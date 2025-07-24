<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Core\Models\Role;
use Smjlabs\Core\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Smjlabs\Core\Traits\StaticLists;
use Smjlabs\Core\Http\Helpers\Permission;

class UsersController extends Controller
{
  use StaticLists;
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
  /**
   * Summary of access
   * @var array
   */
  protected $access = [
    'index' => 'access',
    'create' => 'create',
    'edit' => 'edit',
  ];
  /**
   * Summary of perpage
   * @var int
   */
  protected $perpage = 10;
  /**
   * Summary of pagination
   * @var array
   */
  protected $pagination = [10, 25, 50];
  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Konfigurasi'],
      (object)['url' => '#', 'label' => 'Users']
    ];
  }
  /**
   * Summary of columns
   * @return array{action: array{label: string, search: bool, sort: bool, width: int, email: array{label: string, search: bool, sort: bool, type: string, width: int}, name: array{label: string, search: bool, sort: bool, type: string}, username: array{label: string, search: bool, sort: bool, type: string, width: int}}}
   */
  protected function columns()
  {
    return [
      'name' =>  ['label' => 'Nama', 'search' => true, 'type' => 'input', 'sort' => true],
      'username' => ['label' => 'Username', 'width' => 200, 'search' => true, 'type' => 'input', 'sort' => true],
      'email' =>  ['label' => 'Email', 'width' => 200, 'search' => true, 'type' => 'input', 'sort' => true],
      'role' =>  ['label' => 'Peran', 'width' => 200, 'search' => true, 'type' => 'select', 'select_data' => Role::select('id', 'name')->get()->pluck('name', 'id')->toArray(), 'sort' => true],
      'action' =>  ['label' => 'Aksi', 'width' => 300, 'search' => false, 'sort' => false],
    ];
  }
  /**
   * Summary of query
   * @param mixed $request
   */
  protected function query($request)
  {
    // Ambil kolom yang akan ditampilkan
    $selectFields = array_keys($this->columns());
    $selectFields = array_merge(['id'], $selectFields);
    // per page
    $this->perpage = $request->input('perpage', $this->perpage);
    // select berdasarkan colum yang ditampilkan
    $query = User::select($selectFields);
    /** FILTER */
    $filters = $request->input('filter', []);
    if (!empty($filters['name'])) {
      $query->where("users.name", 'like', '%' . $filters['name'] . '%');
    }
    if (!empty($filters['username'])) {
      $query->where("users.username", 'like', '%' . $filters['username'] . '%');
    }
    if (!empty($filters['email'])) {
      $query->where("users.email", 'like', '%' . $filters['email'] . '%');
    }
    if (!empty($filters['role'])) {
      $query->with('roles')->whereHas('roles', function ($q) use ($filters) {
        $q->where('name', $filters['role']);
      });
    }
    /** SORTING */
    if ($request->has('sort') && $request->filled('sort')) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';

      if ($orderby == 'role') {
        $query->select('users.*')
          ->leftJoin('role_user', 'users.id', '=', 'role_user.user_id')
          ->leftJoin('roles', 'roles.id', '=', 'role_user.role_id')
          ->orderBy('roles.name', $request->sort);
      } else {
        if ($request->has('sort') && $request->filled('sort') && $request->has('orderby') && $request->filled('orderby') && $request->orderby == 'role') {
          $query->orderBy("users.{$orderby}", $request->sort);
        } else {
          $query->orderBy($orderby, $request->sort);
        }
      }
    }

    $paginated = $query->paginate($this->perpage)->appends($request->except('page'));
    /**
     * Tulisa ulang isi data
     * Transform hasil (misal, tambahkan tombol aksi dll)
     */
    $paginated->getCollection()->transform(function ($q) use ($filters) {
      $urledit = route('page.users.edit', ['user' => $q->id]);
      $urldestroy = route('page.users.destroy', ['user' => $q->id]);
      $urlsetpermission = route('page.users.set-permission', ['user' => $q->id]);
      $urlquery = request()->query();
      $fullUrlEdit = count($urlquery) ? $urledit . '?' . http_build_query($urlquery) : $urledit;
      $fullUrlDestroy = count($urlquery) ? $urldestroy . '?' . http_build_query($urlquery) : $urldestroy;
      $fullUrlSetPermission = count($urlquery) ? $urlsetpermission . '?' . http_build_query($urlquery) : $urlsetpermission;
      $data = [
        'edit' => [
          'label' => 'Ubah',
          'icon' => 'trash',
          'url' => $fullUrlEdit,
          'enable' => (auth()->user()->id === $q->id)? false : Permission::can($this->menulabel, $this->access['edit'])
        ],
        'set-permission' => [
          'label' => 'Izin Akses',
          'icon' => 'shield-alert',
          'url' => $fullUrlSetPermission,
          'enable' => (auth()->user()->id === $q->id)? false : Permission::can($this->menulabel, 'set-permission')
        ],
        'delete' => [
          'label' => 'Hapus',
          'icon' => 'square-pen',
          'url' => $fullUrlDestroy,
          'enable' => (auth()->user()->id === $q->id)? false : Permission::can($this->menulabel, 'delete')
        ]
      ];
      $q->role = optional($q->roles->first())->name ?? '-';
      $q->action = view('smjlabscore::crud.action', ['data' => $data])->render();
      return $q;
    });

    return $paginated;
  }
  /**
   * Summary of grid
   * @param \Illuminate\Http\Request $request
   * @return array{breadcrumb: object[], buttons: array, columns: array, pagination: array, query: mixed, title: string}
   */
  protected function grid(Request $request)
  {
    if ($request->has('perpage') && $request->filled('perpage')) {
      $this->perpage = $request->get('perpage');
    }

    return [
      'title' => $this->title,
      'views' => 'smjlabscore::crud.index',
      'breadcrumb' => $this->breadcrumbs(),
      'columns' => $this->columns(),
      'perpage' => $this->perpage,
      'pagination' => $this->pagination,
      'query' => $this->query($request),
      'buttons' => [
        'add' => ['label' => 'Tambah', 'type' => 'link', 'icon' => 'plus', 'enable' => Permission::can($this->menulabel, $this->access['create']), 'url' => route('page.users.create')]
      ]
    ];
  }
  /**
   * Summary of form
   * @param \Illuminate\Http\Request $request
   * @param mixed $id
   * @return array{breadcrumb: object[], role: mixed, title: string, views: string}
   */
  protected function form(Request $request, $id = null)
  {
    if(!is_null($id) && auth()->user()->id == $id){
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
   * Summary of requestValidation
   * @param mixed $request
   * @param mixed $id
   * @return void
   */
  protected function requestValidation($request, $id = null)
  {
    $passArrayRule = ['required', 'string', 'min:8', 'max:100', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/'];
    if (!is_null($id)) {
      $passArrayRule = ['nullable', 'string', 'min:8', 'max:100', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/'];
    }

    $request->validate([
      'name' => ['required', 'string', 'min:8', 'max:100'],
      'username' => ['required', 'string', 'min:8', 'max:100', Rule::unique('users', 'username')->ignore($id, 'id')],
      'email' => ['required', 'string', 'email', 'min:8', 'max:100', Rule::unique('users', 'email')->ignore($id, 'id')],
      'password' => $passArrayRule,
      'role' => ['required'],
    ], [
      'password.regex' => 'Format Kata Sandi Harus berupa kombinasi huruf besar, huruf kecil, angka dan simbol'
    ], [
      'role' => 'Role/Peran',
      'username' => 'Username',
      'name' => 'Nama',
      'email' => 'Email',
      'password' => 'Kata Sandi'
    ]);
  }
  /**
   * Summary of store
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(Request $request)
  {
    if (Permission::can($this->menulabel, $this->access['create']) !== true) {
      abort(403);
    }

    $this->requestValidation($request);

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

      $currentRoute = request()->route()->getName();
      $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
      $urlIndex = route($indexRoute);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;

      return redirect()->to($fullUrl)->with("success", "Data berhasil disimpan");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of update
   * @param \Illuminate\Http\Request $request
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(Request $request, User $user)
  {
    if(auth()->user()->id == $user->id){
      abort(403);
    }
    if (Permission::can($this->menulabel, $this->access['edit']) !== true) {
      abort(403);
    }

    $this->requestValidation($request, $user->id);

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

      $currentRoute = request()->route()->getName();
      $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
      $urlIndex = route($indexRoute);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
      // dd($fullUrl);
      return redirect()->to($fullUrl)->with("success", "Data berhasil diperbaharui");
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
    if(auth()->user()->id == $user->id){
      abort(403);
    }
    if (Permission::can($this->menulabel, 'delete') !== true) {
      abort(403);
    }

    try {
      $user->delete();

      $currentRoute = request()->route()->getName();
      $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
      $urlIndex = route($indexRoute);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;

      return redirect()->to($fullUrl)->with("success", "Data berhasil dihapus");
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
    if(auth()->user()->id == $user->id){
      abort(403);
    }
    if (Permission::can($this->menulabel, 'set-permission') !== true) {
      abort(403);
    }
    $views = 'smjlabscore::users.permission';

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
    return view($views, $data);
  }
  /**
   * Summary of setpermissionprocess
   * @param \Illuminate\Http\Request $request
   * @param \Smjlabs\Core\Models\User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function setpermissionprocess(Request $request, User $user)
  {
    if(auth()->user()->id == $user->id){
      abort(403);
    }
    if (Permission::can($this->menulabel, 'set-permission') !== true) {
      abort(403);
    }

    try {
      // Bersihkan dulu data lama untuk role ini
      DB::table('permissions_access_user')->where('user_id', operator: $user->id)->delete();

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
      }

      $urlIndex = route('page.users.set-permission', ['user' => $user->id]);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;

      return redirect()->to($fullUrl)->with("success", "Izin akses telah diterapkan!");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
}
