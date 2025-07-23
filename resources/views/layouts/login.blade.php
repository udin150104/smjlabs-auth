<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ env('APP_NAME').' - Halaman Login' }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="@smjlabs_auth_assets('css/style.css')">
</head>

<body id="login-app" data-js="{{ $includejs ?? ''}}" data-base-url="/smjlabs-auth-assets/">
    @yield('content')
    <script src="@smjlabs_auth_assets('js/app.js')" type="module"></script>
</body>

</html>
