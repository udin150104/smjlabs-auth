@extends('smjlabsauth::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection

@section('namespace')
    {{ Str::slug('Halaman ' . $title) }}
@endsection

@php
    $includejs = 'izin-akses';
@endphp

@section('content')
    @include('smjlabsauth::crud.breadcrumb')
    <h6 class=" display-6 mb-3 text-muted ">{{ $title }}</h6>

    @include('smjlabsauth::alert')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="columns-3-cog" class="lucide-md text-muted me-1"></i> Atur Izin Akses
            </span>

            <div class="ms-auto d-flex gap-2">
            </div>
        </div>
        @php
            $url = route('page.izin-akses.store');
            $urlQuery = request()->query();
            $fullUrl = count($urlQuery) ? $url . '?' . http_build_query($urlQuery) : $url;
        @endphp
        <form action="{{ $fullUrl }}" method="POST">
            @csrf
            <div class="card-body p-0 mb-0">

                <div class="mb-3 p-2">
                    <label for="password" class="form-label d-flex justify-content-between">
                        <span>Terapkan izin akses kepada peran : </span>
                    </label>

                    <select class="form-select" name="role" id="role">
                        <option value="">Pilih Peran</option>
                        @foreach ($role as $kk => $vv)
                            <option value="{{ $vv->name }}" {{ request('role') == $vv->name ? 'selected' : '' }}>
                                {{ $vv->name }}</option>
                        @endforeach
                    </select>
                    @error('role')
                        <div class="form-text text-danger small error-help">{{ $message }}</div>
                    @enderror
                </div>
                @if (request()->has('role') && request()->filled('role'))
                    <div class=" table-responsive mb-0">

                        <table class="table table-bordered mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th width="400" class=" text-muted text-uppercase">Menu</th>
                                    @foreach ($accessLists as $k => $acs)
                                        <th class="text-center text-muted  text-uppercase">
                                            {{ str_replace('-', ' ', ucwords($acs)) }}</th>
                                    @endforeach
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($menus as $k => $v)
                                    <tr>
                                        <td><i data-lucide="{{ $v['icon-lucide'] }}" class="lucide-sm me-1"></i>
                                            {{ $v['label'] }}
                                        </td>
                                        @foreach ($accessLists as $k => $acs)
                                            <td
                                                class="text-center {{ in_array($acs, $v['access-lists']) ? '' : 'bg-secondary-subtle' }}">
                                                @if (in_array($acs, $v['access-lists']))
                                                    @php
                                                        $checked = \Smjlabs\Auth\Http\Helpers\Permission::check(
                                                            $v['label'],
                                                            $acs,
                                                            request('role'),
                                                        )
                                                            ? 'checked'
                                                            : '';
                                                    @endphp
                                                    @permcan('Izin Akses', 'set-permission')
                                                        <label for="{{ "main{$acs}{$v['label']}" }}" class="text-muted">
                                                            <input id="{{ "main{$acs}{$v['label']}" }}"
                                                                class="form-check-input custom-checkbox"
                                                                name="permissions[{{ $v['label'] }}][{{ $acs }}]"
                                                                type="checkbox" {{ $checked }}>
                                                            {{ $acs }}
                                                        </label>
                                                    @else
                                                        <label for="{{ "main{$acs}{$v['label']}" }}" class="text-muted">
                                                            <input id="{{ "main{$acs}{$v['label']}" }}"
                                                                class="form-check-input custom-checkbox"
                                                                name="permissions[{{ $v['label'] }}][{{ $acs }}]"
                                                                type="checkbox" {{ $checked }} disabled>
                                                        </label>
                                                    @endpermcan
                                                @endif
                                            </td>
                                        @endforeach
                                    </tr>
                                    @if (array_key_exists('sub-menu', $v))
                                        @foreach ($v['sub-menu'] as $kk => $vv)
                                            <tr>
                                                <td class="ps-5">{{ $vv['label'] }}</td>
                                                @foreach ($accessLists as $k => $acs)
                                                    <td
                                                        class="text-center {{ in_array($acs, $vv['access-lists']) ? '' : 'bg-secondary-subtle' }}">
                                                        @if (in_array($acs, $vv['access-lists']))
                                                            @php
                                                                $checked = \Smjlabs\Auth\Http\Helpers\Permission::check(
                                                                    $vv['label'],
                                                                    $acs,
                                                                    request('role'),
                                                                )
                                                                    ? 'checked'
                                                                    : '';
                                                            @endphp
                                                            @permcan('Izin Akses', 'set-permission')
                                                                <label for="{{ "sub{$acs}{$vv['label']}" }}"
                                                                    class="text-muted">
                                                                    <input id="{{ "sub{$acs}{$vv['label']}" }}"
                                                                        class="form-check-input custom-checkbox"
                                                                        name="permissions[{{ $vv['label'] }}][{{ $acs }}]"
                                                                        type="checkbox" {{ $checked }}>
                                                                    {{ $acs }}
                                                                </label>
                                                            @else
                                                                <label for="{{ "sub{$acs}{$vv['label']}" }}"
                                                                    class="text-muted">
                                                                    <input id="{{ "sub{$acs}{$vv['label']}" }}"
                                                                        class="form-check-input custom-checkbox"
                                                                        name="permissions[{{ $vv['label'] }}][{{ $acs }}]"
                                                                        type="checkbox" {{ $checked }} disabled>
                                                                </label>
                                                            @endpermcan
                                                        @endif
                                                    </td>
                                                @endforeach
                                            </tr>
                                        @endforeach
                                    @endif
                                @endforeach
                            </tbody>
                        </table>


                    </div>
                    @permcan('Izin Akses', 'set-permission')
                        <button type="submit" class="btn btn-dark d-flex justify-content-center align-items-center gap-2 m-2">
                            <i data-lucide="save" class="lucide-sm lucide-toggle"></i> Simpan Pengaturan
                        </button>
                    @endpermcan
                @endif

            </div>
        </form>
    </div>
@endsection
