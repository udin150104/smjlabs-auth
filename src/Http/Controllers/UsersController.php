<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Core\Models\Role;
use Smjlabs\Core\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Smjlabs\Core\Models\ActivityLog;
use Smjlabs\Core\Modules\Grid;
use Smjlabs\Core\Traits\StaticResources;
use Smjlabs\Core\Modules\BaseController;
use Smjlabs\Core\Http\Helpers\Permission;
use Smjlabs\Core\Http\Requests\UserRequest;

class UsersController extends BaseController
{
  use StaticResources;
  /**
   * Summary of title
   * @var string
   */
  protected $title = 'Users';
  /**
   * Summary of menulabel
   * @var string
   */
  protected $menulabel = 'User';
  public function __construct()
  {
    $this->middleware("perms:{$this->menulabel}:access")->only(['index']);
    $this->middleware("perms:{$this->menulabel}:create")->only(['create', 'store']);
    $this->middleware("perms:{$this->menulabel}:edit")->only(['edit', 'update']);
    $this->middleware("perms:{$this->menulabel}:delete")->only(['destroy']);
    $this->middleware("perms:{$this->menulabel}:set-permission")->only(['setpermission', 'setpermissionprocess']);
  }
  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Konfigurasi'],
      (object)['url' => '#', 'label' => $this->title]
    ];
  }

  /**
   * Summary of grid
   * @param \Illuminate\Http\Request $request
   * @return Grid
   */
  protected function grid(Request $request)
  {
    $grid = new Grid(new User());
    /** add button link */
    $grid->setButton([
      'add' => ['label' => 'Tambah', 'type' => 'link', 'icon' => 'plus', 'enable' => Permission::can($this->menulabel, 'create'), 'url' => route('page.users.create')]
    ]);
    /** Filter */
    $filters = $request->input('filter', []);
    $grid->filterQuery(function ($model) use ($filters) {
      if (!empty($filters['name'])) {
        $model->where("users.name", 'like', '%' . $filters['name'] . '%');
      }
      if (!empty($filters['username'])) {
        $model->where("users.username", 'like', '%' . $filters['username'] . '%');
      }
      if (!empty($filters['email'])) {
        $model->where("users.email", 'like', '%' . $filters['email'] . '%');
      }
      if (!empty($filters['role'])) {
        $model->with('roles')->whereHas('roles', function ($q) use ($filters) {
          $q->where('name', $filters['role']);
        });
      }
    });
    /** Sorting */
    $grid->sortQuery(function ($query) use ($request) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';
      $sort = $request->has('sort') && $request->filled('sort') ? $request->sort : 'asc';
      if ($orderby == 'role') {
        $query->select('users.*')
          ->leftJoin('role_user', 'users.id', '=', 'role_user.user_id')
          ->leftJoin('roles', 'roles.id', '=', 'role_user.role_id')
          ->orderBy('roles.name', $sort);
      } else {
        $query->orderBy("users.{$orderby}", $sort);
      }
    });
    /** Column to display */
    $grid->setColumn([
      'name' =>  ['label' => 'Nama', 'column' => true, 'search' => true, 'type' => 'input', 'sort' => true],
      'username' => ['label' => 'Username', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'input', 'sort' => true],
      'email' =>  ['label' => 'Email', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'input', 'sort' => true],
      'role' =>  ['label' => 'Peran', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'tom-select-ajax', 'data-url' => 'api-form/role', 'sort' => true],
      'action' =>  ['label' => 'Aksi', 'column' => true, 'width' => 300, 'search' => false, 'sort' => false],
    ]);
    if ($request->has('perpage') && $request->filled('perpage')) {
      $grid->setPerPage($request->get('perpage'));
    }
    $grid->setManipulationColumns(null, function ($item) {
      $data = [
        'edit' => [
          'label' => 'Ubah',
          'icon' => 'square-pen',
          'url' => $this->generateUrlWithRequest('page.users.edit', ['user' => $item->id]),
          'enable' => (Auth::user()->id === $item->id) ? false : Permission::can($this->menulabel, 'edit')
        ],
        'set-permission' => [
          'label' => 'Izin Akses',
          'icon' => 'shield-alert',
          'url' => $this->generateUrlWithRequest('page.users.set-permission', ['user' => $item->id]),
          'enable' => (Auth::user()->id === $item->id) ? false : Permission::can($this->menulabel, 'set-permission')
        ],
        'delete' => [
          'label' => 'Hapus',
          'icon' => 'trash',
          'url' => $this->generateUrlWithRequest('page.users.destroy', ['user' => $item->id]),
          'enable' => (Auth::user()->id === $item->id) ? false : Permission::can($this->menulabel, 'delete')
        ]
      ];
      $item->role = optional($item->roles->first())->name ?? '-';
      $item->action = view('smjlabscore::modules.grid.action', ['data' => $data])->render();
      return $item;
    });

    return $grid;
  }
  /**
   * Summary of form
   * @param \Illuminate\Http\Request $request
   * @param mixed $id
   * @return array{breadcrumb: object[], role: mixed, title: string, views: string}
   */
  protected function form(Request $request, $id = null)
  {
    /** User login tidak bisa merubah data sendiri dan tidak bisa merubah data default user 1 */
    if (!is_null($id) && Auth::user()->id == $id || $id == 1) {
      abort(403);
    }
    $breadcrumb = $this->breadcrumbs();
    $user = [];
    if (is_null($id)) {
      array_push($breadcrumb, (object)['url' => '#', 'label' => 'Tambah']);
    } else {
      array_push($breadcrumb, (object)['url' => '#', 'label' => 'Ubah']);
      $user = User::find($id);
    }
    return [
      'title' => 'Form ' . $this->title,
      'breadcrumb' => $breadcrumb,
      'form' => $user,
      'role' => Role::select('id', 'name')->get()->pluck('name', 'id')->toArray(),
      'views' => 'smjlabscore::users.form',
    ];
  }
  /**
   * Summary of store
   * @param \Smjlabs\Core\Http\Requests\UserRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(UserRequest $request)
  {
    try {
      $data = [
        'username' => $request->input('username'),
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'email_verified_at' => now(),
        'is_active' => 1,
      ];
      if ($request->has('password') && $request?->password !== '' && !is_null($request?->password) && !empty($request?->password)) {
        $data['password'] = bcrypt($request->input('password'));
      }
      $store = User::create($data);

      $store->roles()->sync($request->input('role'));
      return redirect()->to(path: $this->generateUrlWithRequest('page.users.index'))->with("success", "Data berhasil disimpan");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of update
   * @param \Smjlabs\Core\Http\Requests\UserRequest $request
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(UserRequest $request, User $user)
  {
    if (Auth::user()->id == $user->id || $user->id == 1) {
      abort(403);
    }
    try {
      $data = [
        'username' => $request->input('username'),
        'name' => $request->input('name'),
        'email' => $request->input('email')
      ];
      if ($request->has('password') && $request?->password !== '' && !is_null($request?->password) && !empty($request?->password)) {
        $data['password'] = bcrypt($request->input('password'));
      }
      $user->update($data);

      $user->roles()->sync($request->input('role'));

      return redirect()->to(path: $this->generateUrlWithRequest('page.users.index'))->with("success", "Data berhasil diperbaharui");
    } catch (\Throwable $th) {
      Log::error('Gagal memperbaharui: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of destroy
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(User $user)
  {
    if (Auth::user()->id == $user->id || $user->id == 1) {
      abort(403);
    }
    try {
      $user->delete();
      return redirect()->to($this->generateUrlWithRequest('page.users.index'))->with("success", "Data berhasil dihapus");
    } catch (\Throwable $th) {
      Log::error('Gagal menghapus: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of setpermission
   * @param \Illuminate\Http\Request $request
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Contracts\View\View
   */
  public function setpermission(Request $request, User $user)
  {
    if (Auth::user()->id == $user->id || $user->id == 1) {
      abort(403);
    }
    $breadcrumb = $this->breadcrumbs();
    array_push($breadcrumb, (object)['url' => '#', 'label' => 'Set Permission']);
    $menus = config('smjlabscore.menus');
    $accessLists = collect($menus)->flatMap(function ($menu) {
      // Ambil access-lists utama
      $lists = $menu['access-lists'] ?? [];
      // Ambil dari sub-menu kalau ada
      if (!empty($menu['sub-menu'])) {
        $subLists = collect($menu['sub-menu'])->flatMap(function ($submenu) {
          return $submenu['access-lists'] ?? [];
        });
        $lists = array_merge($lists, $subLists->all());
      }
      return $lists;
    })->unique()->values();
    $role = Role::get();
    $data = [
      'title' => 'Izin Akses ' . $this->title,
      'breadcrumb' => $breadcrumb,
      'accessLists' => $accessLists,
      'role' => $role,
      'user' => $user,
      'menus' => $menus
    ];
    return view('smjlabscore::users.permission', $data);
  }
  /**
   * Summary of setpermissionprocess
   * @param \Illuminate\Http\Request $request
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function setpermissionprocess(Request $request, User $user)
  {
    if (Auth::user()->id == $user->id || $user->id == 1) {
      abort(403);
    }

    try {
      // Bersihkan dulu data lama untuk role ini
      DB::table('permissions_access_user')->where('user_id', operator: $user->id)->delete();

      ActivityLog::create([
        'user_id'     => Auth::user()->id,
        'event'       => 'set_permission',
        'model_type'  => null,
        'model_id'    => null,
        'description' => 'Hapus Izin Akses User pada ' . $user->name,
        'properties'  => ['user_data' => [
          'name' => $user->name,
          'username' => $user->username,
          'email' => $user->email,
        ]],
        'ip_address'  => $request->ip(),
        'user_agent'  => $request->userAgent(),
      ]);

      // Loop dan insert data baru
      if ($request->has('permissions')) {
        foreach ($request->input('permissions') as $menu => $accessData) {
          foreach ($accessData as $access => $value) {
            DB::table('permissions_access_user')->insert([
              'menu_label' => $menu,
              'access' => $access,
              'user_id' => $user->id,
              'created_at' => now(),
              'updated_at' => now(),
            ]);
          }
        }

        ActivityLog::create([
          'user_id'     => Auth::user()->id,
          'event'       => 'set_permission',
          'model_type'  => null,
          'model_id'    => null,
          'description' => 'Perubahan Izin Akses User pada ' . $user->name,
          'properties'  => array_merge(['user_data' => [
            'name' => $user->name,
            'username' => $user->username,
            'email' => $user->email,
          ]], $request->input('permissions')),
          'ip_address'  => $request->ip(),
          'user_agent'  => $request->userAgent(),
        ]);
      }

      return redirect()->to($this->generateUrlWithRequest('page.users.set-permission', ['user' => $user->id]))->with("success", "Izin akses telah diterapkan!");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of searchUsers
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function searchUsers(Request $request)
  {
    $query = $request->get('q');

    $users = User::query()->when($query, fn($q) => $q->where('name', 'like', "%$query%"))->limit(10)
      ->get();

    return response()->json([
      'items' => $users->map(fn($user) => [
        'id' => $user->name,
        'text' => $user->name,
      ])
    ]);
  }
}