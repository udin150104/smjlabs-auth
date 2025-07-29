<?php

namespace Smjlabs\Core\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Smjlabs\Core\Modules\BaseController;

class InformasiController extends BaseController
{
  /**
   * Summary of title
   * @var string
   */
  protected $title = 'Informasi';
  /**
   * Summary of menulabel
   * @var string
   */
  protected $menulabel = 'Informasi';
  public function __construct()
  {
    $this->middleware("perms:{$this->menulabel}:access")->only(['index']);
    // $this->middleware("throttle:200,1")->only(['status']);
  }
  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Sistem'],
      (object)['url' => '#', 'label' => $this->title]
    ];
  }

  public function index()
  {
    $title = $this->title;
    $breadcrumb = $this->breadcrumbs();

    return view('smjlabscore::informasi.index', compact('title', 'breadcrumb'));
  }

  public function status()
  {
    return response()->json([
      'memory' => memory_get_usage(true),
      'php_version' => PHP_VERSION,
      'laravel_version' => app()->version(),
      'server_time' => now()->format('H:i:s'),
      'uptime' => $this->getUptime(),
      'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'N/A',
      'os' => php_uname(),
      'db_connection' => config('database.default'),
      'queue_connection' => config('queue.default'),
      'cache_driver' => config('cache.default'),
      'app_env' => app()->environment(),
      'app_debug' => config('app.debug'),
    ]);
  }

  protected function getUptime()
  {
    if (PHP_OS_FAMILY === 'Linux') {
      $uptime = shell_exec('uptime -p');
      return trim($uptime);
    }
    return 'Unavailable';
  }

}
