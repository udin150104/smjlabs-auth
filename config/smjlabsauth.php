<?php

return [
    'development' => true,
    'login_route' => 'access/login',
    'redirect_after_login' => 'page/dashboard',
    // 'register' => true,
    // 'forgot-password' => true,
    'menus' => [
        [
            'label' => 'Dashboard',
            'icon-lucide' => 'gauge',
            'route-name' => 'page.dashboard.index',
            'access-lists' => ['access']
        ],
        [
            'label' => 'Konfigurasi',
            'icon-lucide' => 'bolt',
            'route-name' => '',
            'role-allowed' => ['administator'],
            'access-lists' => ['access'],
            'sub-menu' => [
                [
                    'label' => 'User',
                    'route-name' => 'page.users.index',
                    'access-lists' => ['access','create','edit','delete','set-permission'],
                ],
                [
                    'label' => 'Izin Akses',
                    'route-name' => 'page.izin-akses.index',
                    'access-lists' => ['access','set-permission'],
                ]
            ]
        ]
    ]
];
