<?php

namespace Smjlabs\Core;

use Illuminate\Routing\Router;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Failed;
use Illuminate\Auth\Events\Logout;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Smjlabs\Core\Http\Helpers\Permission;
use Smjlabs\Core\Listeners\LogFailedLogin;
use Smjlabs\Core\Listeners\LogLoginLogout;
use Smjlabs\Core\Http\Middleware\Permission as MiddlewarePermission;

class CoreServiceProvider extends ServiceProvider
{
  public function boot()
  {
    Event::listen(Login::class, [LogLoginLogout::class, 'handle']);
    Event::listen(Logout::class, [LogLoginLogout::class, 'handle']);
    Event::listen(Failed::class, [LogFailedLogin::class, 'handle']);

    // config
    $this->mergeConfigFrom(__DIR__ . '/../config/smjlabscore.php', 'smjlabscore');
    // loads
    $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
    // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', namespace: 'smjlabsauth');
    $this->loadViewsFrom(__DIR__ . '/../resources/views', 'smjlabscore');
    $this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');
    // publishes
    $this->publishes([__DIR__ . '/Database/Seeders/SampleUsersSeeder.php' => database_path('seeders/SampleUsersSeeder.php')], 'smjlabs-core-seeders');
    $this->publishes([__DIR__ . '/../resources/views' => resource_path('views/vendor/smjlabscore')], 'smjlabs-core-views');
    $this->publishes([__DIR__ . '/../config/smjlabscore.php' => config_path('smjlabscore.php')], 'smjlabs-core-config');
    // $this->publishes([ __DIR__.'/../resources/lang' => resource_path('lang/vendor/smjlabs') ], 'smjlabs-lang');

    // routes/smjlabs-auth.php
    // use on root web.php :
    // require base_path('routes/smjlabs-core.php');
    // php artisan vendor:publish --tag=smjlabs-core-routes
    // $this->publishes([__DIR__ . '/../routes/web.php' => base_path('routes/smjlabs-core.php')], 'smjlabs-core-routes');
    
    // blade directive
    Blade::directive('smjlabs_core_assets', function ($path) {
      return "<?php echo url('/smjlabs-core-assets/' . $path); ?>";
    });
    Blade::if('permcan', function ($label, $access) {
      return Permission::can($label, $access);
    });

    // middleware bawaan
    $router = $this->app->make(Router::class);
    $router->aliasMiddleware('perms', MiddlewarePermission::class);

  }

  public function register()
  {
    //
  }
}
