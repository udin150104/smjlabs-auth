<div class="sidebar show shadow" id="sidebar">
    <div class="card bg-transparent border-0 rounded-0 mb-1">
        <div class="card-body bg-transparent rounded-0  border-0">
            <button class="btn-close float-end btn-close-white d-sm-none me-2" id="close-sidebar" type="button"></button>
            <a href="{{ url('/') }}" class="p-0">
                <h5 class="fw-light text-white"> {{ env('APP_NAME') }} </h5>
            </a>
        </div>
    </div>
    <ul class="nav flex-column mt-1">
        @php
            $menu = config('smjlabsauth.menus');
        @endphp
        @foreach ($menu as $item)
            <li class="nav-item">
                @if (!isset($item['sub-menu']))
                    @permcan($item['label'], 'access')
                        @php
                            $cleanRoute = '';
                            if (isset($item['route-name'])) {
                                $cleanRoute = Str::beforeLast($item['route-name'], '.');
                            }
                            $isActive = isset($item['route-name']) && request()->routeIs($cleanRoute . '*');
                        @endphp
                        <a href="{{ route($item['route-name']) }}"
                            class="nav-link {{ $isActive ? 'active' : '' }} d-flex align-items-center">
                            <i data-lucide="{{ $item['icon-lucide'] ?? 'circle' }}" class="lucide-sm me-2"></i>
                            {{ $item['label'] }}
                        </a>
                    @endpermcan
                @else
                    @php
                        $collapseId = Str::slug($item['label'], '-'); // agar ID unik

                        // Cek apakah submenu aktif, support wildcard route seperti 'users.*'
                        $isActive = collect($item['sub-menu'])
                            ->pluck('route-name')
                            ->filter()
                            ->contains(function ($r) {
                                $cleanRoute = Str::beforeLast($r, '.');
                                return request()->routeIs($cleanRoute . '*');
                            });
                    @endphp
                    @permcan($item['label'], 'access')
                        <a class="nav-link w-100 d-flex align-items-center {{ $isActive ? 'active' : '' }}"
                            data-bs-toggle="collapse" href="#{{ $collapseId }}" role="button"
                            aria-expanded="{{ $isActive ? 'true' : 'false' }}">
                            <i data-lucide="{{ $item['icon-lucide'] ?? 'circle' }}" class="lucide-sm me-2"></i>
                            {{ $item['label'] }}
                            <i data-lucide="chevron-right" class="lucide-sm ms-auto"></i>
                        </a>
                        <div class="collapse {{ $isActive ? 'show' : '' }}" id="{{ $collapseId }}">
                            @foreach ($item['sub-menu'] as $sub)
                                @permcan($sub['label'], 'access')
                                    @php
                                        $cleanRoute = '';
                                        if (isset($sub['route-name'])) {
                                            $cleanRoute = Str::beforeLast($sub['route-name'], '.');
                                        }
                                        $subActive = isset($sub['route-name']) && request()->routeIs($cleanRoute . '*');
                                    @endphp
                                    <a href="{{ route($sub['route-name']) }}"
                                        class="nav-link {{ $subActive ? 'active' : '' }}">
                                        {{ $sub['label'] }}
                                    </a>
                                @endpermcan
                            @endforeach
                        </div>
                    @endpermcan
                @endif

            </li>
        @endforeach
    </ul>

</div>
