<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Http\Request;
use Smjlabs\Core\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Smjlabs\Core\Models\ActivityLog;
use Smjlabs\Core\Http\Helpers\Permission;

class IzinAksesController extends Controller
{
  /**
   * Summary of index
   * @return \Illuminate\Contracts\View\View
   */
  public function index()
  {

    if (Permission::can('Izin Akses', 'access') !== true) {
      abort(403);
    }

    $title = "Izin Akses";
    $breadcrumb = [
      (object)['url' => '#', 'label' => 'Konfigurasi'],
      (object)['url' => '#', 'label' => 'Izin Akses']
    ];
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
    return view('smjlabscore::access.permissions', compact('title', 'breadcrumb', 'accessLists', 'accessLists', 'menus', 'role'));
  }
  /**
   * Summary of store
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function store(Request $request)
  {
    if (Permission::can('Izin Akses', 'set-permission') !== true) {
      abort(403);
    }
    $request->validate([
      'role' => ['required'],
    ], [],  [
      'role' => 'Role/Peran',
    ]);
    try {
      $role = Role::firstOrCreate(['name' => $request->input('role')]);
      $roleId = $role->id;

      // Bersihkan dulu data lama untuk role ini
      DB::table('permissions_access_role')->where('role_id', $roleId)->delete();

      ActivityLog::create([
        'user_id'     => auth()->user()->id,
        'event'       => 'set_permission',
        'model_type'  => null,
        'model_id'    => null,
        'description' => 'Hapus Izin Akses Pada role/peran ' . $role->name,
        'properties'  => ['role_data' => [
          'name' => $role->name,
        ]],
        'ip_address'  => $request->ip(),
        'user_agent'  => $request->userAgent(),
      ]);

      // Loop dan insert data baru
      if ($request->has('permissions')) {
        foreach ($request->input('permissions') as $menu => $accessData) {
          foreach ($accessData as $access => $value) {
            DB::table('permissions_access_role')->insert([
              'menu_label' => $menu,
              'access' => $access,
              'role_id' => $roleId,
              'created_at' => now(),
              'updated_at' => now(),
            ]);
          }
        }

        ActivityLog::create([
          'user_id'     => auth()->user()->id,
          'event'       => 'set_permission',
          'model_type'  => null,
          'model_id'    => null,
          'description' => 'Perubahan Izin Akses Pada role/peran ' . $role->name,
          'properties'  => array_merge(['role_data' => [
            'name' => $role->name,
          ]], $request->input('permissions')),
          'ip_address'  => $request->ip(),
          'user_agent'  => $request->userAgent(),
        ]);
      }

      $urlIndex = route('page.izin-akses.index');
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;

      return redirect()->to($fullUrl)->with("success", "Izin akses telah diterapkan!");
    } catch (\Throwable $th) {
      Log::error('Gagal menyimpan: ' . $th->getMessage());
      return redirect()->back()->with("warning", $th->getMessage());
    }
  }
}
