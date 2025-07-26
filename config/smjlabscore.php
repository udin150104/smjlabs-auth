<?php

return [
    'development' => false,
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
            'access-lists' => ['access'],
            'sub-menu' => [
                [
                    'label' => 'User',
                    'route-name' => 'page.users.index',
                    'access-lists' => ['access', 'create', 'edit', 'delete', 'set-permission'],
                ],
                [
                    'label' => 'Role',
                    'route-name' => 'page.roles.index',
                    'access-lists' => ['access', 'create', 'edit', 'delete'],
                ],
                [
                    'label' => 'Izin Akses',
                    'route-name' => 'page.izin-akses.index',
                    'access-lists' => ['access', 'set-permission'],
                ]
            ]
        ],
        [
            'label' => 'Sistem',
            'icon-lucide' => 'file-sliders',
            'route-name' => '',
            'access-lists' => ['access'],
            'sub-menu' => [
                [
                    'label' => 'Log Aktivitas',
                    'route-name' => 'page.logactivity.index',
                    'access-lists' => ['access'],
                ]
            ]
        ]
    ]
];
