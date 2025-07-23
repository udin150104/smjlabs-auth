# Smjlabs Auth
Package auth sederhana untuk kebutuhan pribadi

Paket ini menyediakan :
- Halaman login sederhana
- Halaman admin panel sederhana
  - Dashbboard sederhana
  - Konfigurasi
    - Users
    - Izin Akses
- Halaman Profile sederhana
- logout


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
### Publish

Publikasikan file konfigurasi dan resource (opsional):
Anda bisa mempublikasikan resource tertentu menggunakan tag berikut:
```bash
php artisan vendor:publish --tag=smjlabs-auth-config
// config/smjlabsauth.php
php artisan vendor:publish --tag=smjlabs-auth-views
// resources/views/vendor/smjlabsauth
php artisan vendor:publish --tag=smjlabs-auth-seeders
// database/seeders/SampleUsersSeeder.php
```

### Blade directive
```php
// if permcan
// menulabel dari config/smjlabsauth.php [menus]
@permcan($menulabel,$access)
```

### 📜 Contributors

Thanks to the following people who have contributed to this project:

- [@udin150104](https://github.com/udin150104) – Creator, Maintainer & Contributor (main account)
- [@syahrudinsmj](https://github.com/syahrudinsmj) – Creator, Maintainer & Contributor (second account)

