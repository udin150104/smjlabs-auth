# Smjlabs Auth

Paket ini menyediakan sistem otentikasi, tampilan, dan resource.


### 📦 Instalasi

Pasang package menggunakan composer (jika ini package terpisah):
```bash
composer require smjlabs/auth
```
Publikasikan file konfigurasi dan resource (opsional):
Anda bisa mempublikasikan resource tertentu menggunakan tag berikut:
```bash
php artisan vendor:publish --tag=smjlabs-auth-config
php artisan vendor:publish --tag=smjlabs-auth-views
# php artisan vendor:publish --tag=smjlabs-auth-lang
php artisan vendor:publish --tag=smjlabs-auth-css
php artisan vendor:publish --tag=smjlabs-auth-js
php artisan vendor:publish --tag=smjlabs-auth-seeders
```

### 📂 Fitur Otomatis yang Dimuat

Saat package ini di-boot, Laravel akan:

- Memuat Konfigurasi dari `config/smjlabsauth.php`
- Memuat Routes dari `routes/web.php`
- Memuat View dari `resources/views` dengan namespace: `smjlabs-auth-views`
- Memuat Terjemahan (lang) dari `resources/lang` dengan namespace: `smjlabs-auth-lang`
- Memuat Migrasi dari `Database/Migrations`