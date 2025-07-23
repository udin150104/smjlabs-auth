# Smjlabs Auth

Paket ini menyediakan sistem otentikasi, tampilan, dan resource.


### 📦 Instalasi

Pasang package menggunakan composer (jika ini package terpisah):
tambahkan pada `composer.json` root laravel
```php

// ...
"repositories": [
// ...
  {
    "type": "vcs",
    "url": "https://github.com/udin150104/smjlabs-auth.git"
  }
],
// ...
"require": {
  // ...
  "udin150104/smjlabs-auth": "dev-main"
}
// ...
```
```php
composer require udin150104/smjlabs-auth:dev-main --prefer-source
// or
composer update udin150104/smjlabs-auth
```
Publikasikan file konfigurasi dan resource (opsional):
Anda bisa mempublikasikan resource tertentu menggunakan tag berikut:
```bash
php artisan vendor:publish --tag=smjlabs-auth-config
php artisan vendor:publish --tag=smjlabs-auth-views
php artisan vendor:publish --tag=smjlabs-auth-seeders
```