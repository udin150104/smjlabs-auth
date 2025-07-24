<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;
use Smjlabs\Core\Http\Middleware\IsGuest;
use Smjlabs\Core\Http\Middleware\IsAuthenticated;
use Smjlabs\Core\Http\Controllers\LoginController;
use Smjlabs\Core\Http\Controllers\RolesController;
use Smjlabs\Core\Http\Controllers\UsersController;
use Smjlabs\Core\Http\Controllers\ProfileController;
use Smjlabs\Core\Http\Controllers\DashboardController;
use Smjlabs\Core\Http\Controllers\IzinAksesController;
use Smjlabs\Core\Http\Middleware\ContentSecurityPolicy;

/**
 * Load asset local packages assets
 */
Route::get('/smjlabs-core-assets/{path}', function ($path) {
    $file = __DIR__ . '/../public/' . $path;

    if (!file_exists($file)) {
        abort(404);
    }

    $ext = pathinfo($file, PATHINFO_EXTENSION);
    $mimeTypes = [
        'css' => 'text/css',
        'js' => 'application/javascript',
        'png' => 'image/png',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'svg' => 'image/svg+xml',
        'woff' => 'font/woff',
        'woff2' => 'font/woff2',
        'ttf' => 'font/ttf',
    ];

    $mime = $mimeTypes[$ext] ?? File::mimeType($file) ?? 'text/plain';

    return Response::make(File::get($file), 200, [
        'Content-Type' => $mime,
        'Access-Control-Allow-Origin' => '*',
        'Cache-Control' => 'public, max-age=86400',
    ]);
})->where('path', '.*');

Route::group([
    'prefix' => 'access',
    'as' => 'acc.',
    'middleware' => [
        'web',
        ContentSecurityPolicy::class
    ]
], function () {
    Route::resource('login', LoginController::class)->only(['index', 'store'])->middleware([IsGuest::class]);
    Route::group([
        'middleware' => [
            IsAuthenticated::class
        ]
    ], function () {
        Route::post('logout', [LoginController::class,'logout'])->name('logout');
    });
});

Route::group([
    'prefix' => 'page',
    'as' => 'page.',
    'middleware' => [
        'web',
        ContentSecurityPolicy::class,
        IsAuthenticated::class
    ]
], function () {
    Route::resource('dashboard', DashboardController::class)->only(['index']);
    Route::resource('profile', ProfileController::class)->only(['index','edit','update']);
    Route::get('users/{user}/set-permissions', [UsersController::class,'setpermission'])->name('users.set-permission');
    Route::post('users/{user}/set-permissions', [UsersController::class,'setpermissionprocess'])->name('users.set-permission-process');
    Route::resource('users', UsersController::class);
    Route::resource('roles', RolesController::class);
    Route::resource('izin-akses', IzinAksesController::class)->only(['index','store']);
});
