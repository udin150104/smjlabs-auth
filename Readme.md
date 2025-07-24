

# 🚀 Smjlabs Core

![Laravel](https://img.shields.io/badge/Laravel-12.x-red.svg)
![Status](https://img.shields.io/badge/Status-Development-yellow)
![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey.svg)
![Last Commit](https://img.shields.io/github/last-commit/udin150104/smjlabs-auth)


**Smjlabs Core** adalah package kerangka kerja core awal untuk menunjang kerja menggunakan laravel.


### ✨ Fitur Utama

- Halaman **Login** sederhana
- Panel Admin minimalis:
  - Dashboard
  - Konfigurasi:
    - Manajemen User
    - Izin Akses (Permissions)
- Halaman **Profil** pengguna
- Fungsi **Logout**


### 📦 Instalasi

Tambahkan repository ke `composer.json` proyek Laravel Anda:

```json
"repositories": [
  {
    "type": "vcs",
    "url": "https://github.com/udin150104/smjlabs-core.git"
  }
],
"require": {
  "udin150104/smjlabs-core": "dev-main"
}
```

Lalu jalankan salah satu perintah berikut:

```bash
composer require udin150104/smjlabs-core:dev-main --prefer-source
# atau
composer update udin150104/smjlabs-core
```


### 📤 Publikasi Resource

Anda dapat mem-publish file konfigurasi, view, dan seeder (opsional):

```bash
php artisan vendor:publish --tag=smjlabs-core-config
# -> config/smjlabscore.php

php artisan vendor:publish --tag=smjlabs-core-views
# -> resources/views/vendor/smjlabscore

php artisan vendor:publish --tag=smjlabs-core-seeders
# -> database/seeders/SampleUsersSeeder.php
```


### 🧩 Blade Directive

Untuk mengecek izin akses menggunakan `@permcan`:

```blade
@permcan($menulabel, $access)
@endpermcan
```

> `menulabel` & `access` mengacu pada konfigurasi `menus` dalam `config/smjlabscore.php`.


### 👥 Kontributor

| Nama Pengguna                                    | Peran                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| [@udin150104](https://github.com/udin150104)     | 🛠️ Creator, Maintainer & Contributor *(Main Account)*        |
| [@syahrudinsmj](https://github.com/syahrudinsmj) | 🧑‍💻 Creator, Maintainer & Contributor *(Secondary Account)* |



### 📃 Lisensi

Lisensi: **UNLICENSED**

Penggunaan hanya untuk kebutuhan internal/personal.

### 🧾 Changelog

Lihat changelog lengkap di [CHANGELOG.md](./CHANGELOG.md)
