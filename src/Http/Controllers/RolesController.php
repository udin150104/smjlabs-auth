<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Smjlabs\Core\Models\Role;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Smjlabs\Core\Traits\StaticLists;
use Smjlabs\Core\Http\Helpers\Permission;

class RolesController extends Controller
{
  use StaticLists;
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
      (object)['url' => '#', 'label' => 'Role']
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
      'action' =>  ['label' => 'Aksi', 'width' => 100, 'search' => false, 'sort' => false],
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
    $query = Role::select($selectFields);
    /** FILTER */
    $filters = $request->input('filter', []);
    if (!empty($filters['name'])) {
      $query->where("name", 'like', '%' . $filters['name'] . '%');
    }
    /** SORTING */
    if ($request->has('sort') && $request->filled('sort')) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';
      $query->orderBy($orderby, $request->sort);
    }

    $paginated = $query->paginate($this->perpage)->appends($request->except('page'));
    /**
     * Tulisa ulang isi data
     * Transform hasil (misal, tambahkan tombol aksi dll)
     */
    $paginated->getCollection()->transform(function ($q) use ($filters) {
      $urledit = route('page.roles.edit', ['role' => $q->id]);
      $urldestroy = route('page.roles.destroy', ['role' => $q->id]);
      $urlquery = request()->query();
      $fullUrlEdit = count($urlquery) ? $urledit . '?' . http_build_query($urlquery) : $urledit;
      $fullUrlDestroy = count($urlquery) ? $urldestroy . '?' . http_build_query($urlquery) : $urldestroy;
      $data = [
        'edit' => [
          'label' => 'Ubah',
          'icon' => 'trash',
          'url' => $fullUrlEdit,
          'enable' => (strtolower($q->name) == 'administrator')? false: Permission::can($this->menulabel, $this->access['edit'])
        ],
        'delete' => [
          'label' => 'Hapus',
          'icon' => 'square-pen',
          'url' => $fullUrlDestroy,
          'enable' => (strtolower($q->name) == 'administrator')? false: Permission::can($this->menulabel, 'delete')
        ]
      ];
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
        'add' => ['label' => 'Tambah', 'type' => 'link', 'icon' => 'plus', 'enable' => Permission::can($this->menulabel, $this->access['create']), 'url' => route('page.roles.create')]
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
   * Summary of requestValidation
   * @param mixed $request
   * @param mixed $id
   * @return void
   */
  protected function requestValidation($request, $id = null)
  {
    $request->validate([
      'name' => ['required', 'string', 'min:3', 'max:100',Rule::unique('roles', 'name')->ignore($id, 'id')]
    ], [], [
      'name' => 'Role/Peran',
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
        'name' => $request->input('name'),
        'slug' => Str::slug($request->input('name'))
      ];
      Role::create($data);

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
   * @param \Smjlabs\Core\Models\Role $role
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(Request $request, Role $role)
  {
    if (Permission::can($this->menulabel, $this->access['edit']) !== true) {
      abort(403);
    }

    $this->requestValidation($request, $role->id);

    try {
      $data = [
        'name' => $request->input('name'),
        'slug' => Str::slug($request->input('name'))
      ];
      $role->update($data);

      $currentRoute = request()->route()->getName();
      $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
      $urlIndex = route($indexRoute);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
      return redirect()->to($fullUrl)->with("success", "Data berhasil diperbaharui");
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
    if (Permission::can($this->menulabel, 'delete') !== true) {
      abort(403);
    }

    try {
      $role->delete();

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
}
