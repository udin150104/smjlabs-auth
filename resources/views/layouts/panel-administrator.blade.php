<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title') </title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="@smjlabs_auth_assets('css/style.css')">
</head>

<body>
    <!-- Global Loader -->
    <div id="barba-loader" class="barba-loader d-none">
        <div class="barba-loader-inner text-center">
            <div class="spinner-border text-dark mb-3" role="status"></div>
            <p class="text-muted fw-lighter mb-0">Memuat...</p>
        </div>
    </div>

    <div id="panel-administrator-app" data-barba="wrapper">
        <!-- Sidebar -->
        @include('smjlabsauth::layouts.part.panel-administrator.sidebar')
        <!-- Main content -->
        <div class="main-content" id="mainContent">
            <!-- Topbar -->
            @include('smjlabsauth::layouts.part.panel-administrator.topbar')

            <!-- Content -->
            <div class="container-fluid py-2" id="content" data-barba="container" data-js="{{ $includejs ?? '' }}"
                data-base-url="/smjlabs-auth-assets/" data-barba-namespace="@yield('namespace')">
                @yield('content')
            </div>

            <!-- Footer -->
            @include('smjlabsauth::layouts.part.panel-administrator.footer')
        </div>

        <script src="@smjlabs_auth_assets('js/app.js')" type="module"></script>
    </div>
</body>

</html>
