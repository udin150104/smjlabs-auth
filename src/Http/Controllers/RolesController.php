<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Smjlabs\Core\Models\Role;
use Smjlabs\Core\Modules\Grid;
use Illuminate\Support\Facades\Log;
use Smjlabs\Core\Modules\BaseController;
use Smjlabs\Core\Traits\StaticResources;
use Smjlabs\Core\Http\Helpers\Permission;
use Smjlabs\Core\Http\Requests\RoleRequest;

class RolesController extends BaseController
{
  use StaticResources;
  /**
   * Summary of title
   * @var string
   */
  protected $title = 'Roles';
  /**
   * Summary of menulabel
   * @var string
   */
  protected $menulabel = 'Role';

  public function __construct()
  {
    $this->middleware("perms:{$this->menulabel}:access")->only(['index']);
    $this->middleware("perms:{$this->menulabel}:create")->only(['create', 'store']);
    $this->middleware("perms:{$this->menulabel}:edit")->only(['edit', 'update']);
    $this->middleware("perms:{$this->menulabel}:delete")->only(['destroy']);
  }

  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Konfigurasi'],
      (object)['url' => '#', 'label' => 'Role']
    ];
  }
  /**
   * Summary of grid
   * @param \Illuminate\Http\Request $request
   * @return Grid
   */
  protected function grid(Request $request)
  {
    $grid = new Grid(new Role());
    /** add button link */
    $grid->setButton([
      'add' => ['label' => 'Tambah', 'type' => 'link', 'icon' => 'plus', 'enable' => Permission::can($this->menulabel, 'create'), 'url' => route('page.roles.create')]
    ]);
    /** Filter */
    $filters = $request->input('filter', []);
    $grid->filterQuery(function ($query) use ($filters) {
      if (!empty($filters['name'])) {
        $query->where("name", 'like', '%' . $filters['name'] . '%');
      }
    });
    /** Sorting */
    $grid->sortQuery(function ($query) use ($request) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';
      $sort = $request->has('sort') && $request->filled('sort') ? $request->sort : 'asc';
      $query->orderBy($orderby, $sort);
    });
    /** Column to display */
    $grid->setColumn([
      'name' =>  ['label' => 'Nama', 'column' => true, 'search' => true, 'type' => 'input', 'sort' => true],
      'action' =>  ['label' => 'Aksi', 'column' => true, 'width' => 100, 'search' => false, 'sort' => false],
    ]);
    if ($request->has('perpage') && $request->filled('perpage')) {
      $grid->setPerPage($request->get('perpage'));
    }
    $grid->setManipulationColumns(null, function ($item) {
      $data = [
        'edit' => [
          'label' => 'Ubah',
          'icon' => 'square-pen',
          'url' => $this->generateUrlWithRequest('page.roles.edit', ['role' => $item->id]),
          'enable' => (strtolower($item->name) == 'administrator') ? false : Permission::can($this->menulabel, 'edit')
        ],
        'delete' => [
          'label' => 'Hapus',
          'icon' => 'square-pen',
          'url' => $this->generateUrlWithRequest('page.roles.destroy', ['role' => $item->id]),
          'enable' => (strtolower($item->name) == 'administrator') ? false : Permission::can($this->menulabel, 'delete')
        ]
      ];
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
    if(!is_null($id) && $id == 1){
      abort(403);
    }
    $breadcrumb = $this->breadcrumbs();
    $role = [];
    if (is_null($id)) {
      array_push($breadcrumb, (object)['url' => '#', 'label' => 'Tambah']);
    } else {
      array_push($breadcrumb, (object)['url' => '#', 'label' => 'Ubah']);
      $role = Role::find($id);
    }
    return [
      'title' => 'Form ' . $this->title,
      'breadcrumb' => $breadcrumb,
      'form' => $role,
      'views' => 'smjlabscore::roles.form',
    ];
  }
  /**
   * Summary of store
   * @param \Smjlabs\Core\Http\Requests\RoleRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(RoleRequest $request)
  {
    try {
      $data = [
        'name' => $request->input('name'),
        'slug' => Str::slug($request->input('name'))
      ];
      Role::create($data);
      return redirect()->to( $this->generateUrlWithRequest('page.roles.index'))->with("success", "Data berhasil disimpan");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of update
   * @param \Smjlabs\Core\Http\Requests\RoleRequest $request
   * @param \Smjlabs\Core\Models\Role $role
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(RoleRequest $request, Role $role)
  {
    if($role->id == 1){
      abort(404);
    }
    try {
      $data = [
        'name' => $request->input('name'),
        'slug' => Str::slug($request->input('name'))
      ];
      $role->update($data);

      return redirect()->to($this->generateUrlWithRequest('page.roles.index'))->with("success", "Data berhasil diperbaharui");
    } catch (\Throwable $th) {
      Log::error('Gagal memperbaharui: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of destroy
   * @param \Smjlabs\Core\Models\Role $role
   * @return \Illuminate\Http\RedirectResponse
   */
  public function destroy(Role $role)
  {
    if($role->id == 1){
      abort(404);
    }
    try {
      $role->delete();

      return redirect()->to($this->generateUrlWithRequest('page.roles.index'))->with("success", "Data berhasil dihapus");
    } catch (\Throwable $th) {
      Log::error('Gagal menghapus: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
  /**
   * Summary of searchRoles
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function searchRoles(Request $request)
  {
    $query = $request->get('q');

    $users = Role::query()->when($query, fn($q) => $q->where('name', 'like', "%$query%"))->limit(10)
      ->get();

    return response()->json([
      'items' => $users->map(fn($user) => [
        'id' => $user->name,
        'text' => $user->name,
      ])
    ]);
  }
}