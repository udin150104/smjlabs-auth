<?php

namespace Smjlabs\Auth;

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Smjlabs\Auth\Http\Middleware\ContentSecurityPolicy;

class SmjlabsAuthServiceProvider extends ServiceProvider
{
  public function boot()
  {
    // config
    $this->mergeConfigFrom(__DIR__ . '/../config/smjlabsauth.php', 'smjlabsauth');
    // loads
    $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
    // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', namespace: 'smjlabsauth');
    $this->loadViewsFrom(__DIR__ . '/../resources/views', 'smjlabsauth');
    $this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');
    // publishes
    $this->publishes([ __DIR__ . '/Database/Seeders/SampleUsersSeeder.php' => database_path('seeders/SampleUsersSeeder.php') ], 'smjlabs-auth-seeders');
    $this->publishes([ __DIR__ . '/../resources/views' => resource_path('views/vendor/smjlabs') ], 'smjlabs-auth-views');
    // $this->publishes([ __DIR__ . '/../resources/css' => resource_path('vendor/smjlabs') ], 'smjlabs-auth-css');
    // $this->publishes([ __DIR__ . '/../resources/js' => resource_path('vendor/smjlabs') ], 'smjlabs-auth-js');
    $this->publishes([ __DIR__ . '/../config/smjlabsauth.php' => config_path('smjlabsauth.php') ], 'smjlabs-auth-config');
    // $this->publishes([ __DIR__.'/../resources/lang' => resource_path('lang/vendor/smjlabs') ], 'smjlabs-auth-lang');
    // blade directive
    Blade::directive('smjlabs_auth_assets', function ($path) {
      return "<?php echo url('/smjlabs-auth-assets/' . $path); ?>";
    });
    Blade::if('permcan', function ($label, $access) {
        return \Smjlabs\Auth\Http\Helpers\Permission::can($label, $access);
    });
  }

  public function register()
  {
    //
  }
}
