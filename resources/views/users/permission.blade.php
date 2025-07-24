@extends('smjlabscore::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace'){{ Str::slug('Halaman ' . $title) }}@endsection

@section('content')
    @include('smjlabscore::crud.breadcrumb')
    @include('smjlabscore::alert')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="shield-alert" class="lucide-md text-muted me-1"></i> {{ $title }}
            </span>

            <div class="ms-auto d-flex ">
                @php
                    $urlIndex = route('page.users.index');
                    $urlquery = request()->query();
                    $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
                @endphp
                <a href="{{ $fullUrl }}"
                    class="btn btn-link text-muted d-flex align-items-center text-decoration-none "><i
                        data-lucide="arrow-left" class="lucide-sm me-1"></i> Kembai</a>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-sm">
                <tr>
                    <td width="200">Nama </td>
                    <td>{{ $user->name }} </td>
                </tr>
                <tr>
                    <td width="200">Username </td>
                    <td>{{ $user->username }} </td>
                </tr>
                <tr>
                    <td width="200">Email </td>
                    <td>{{ $user->email }} </td>
                </tr>
                <tr>
                    <td width="200">Role/Peran </td>
                    <td class="text-secondary px-2 ">{{ $user->roles->first()->name }} </td>
                </tr>
            </table>
        </div>

        <div class="card-body p-0 m-0">
            @php
                $urlIndex = route('page.users.set-permission-process', ['user' => $user->id]);
                $urlquery = request()->query();
                $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
            @endphp
            <form action="{{ $fullUrl }}" method="POST">
                @csrf
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
                                                    $byrole = \Smjlabs\Core\Http\Helpers\Permission::check(
                                                        $v['label'],
                                                        $acs,
                                                        $user->roles->first()->name,
                                                    );
                                                @endphp
                                                @if ($byrole)
                                                    <span class="text-success  text-decoration-none"><i
                                                            data-lucide="circle-check-big" class="lucide-sm me-1"></i>
                                                        Default by role</span>
                                                @else
                                                    @php
                                                        $checked = \Smjlabs\Core\Http\Helpers\Permission::checkbyUser(
                                                            $v['label'],
                                                            $acs,
                                                            $user->id,
                                                        )
                                                            ? 'checked'
                                                            : '';
                                                    @endphp
                                                    <label for="{{ "main{$acs}{$v['label']}" }}" class="text-muted">
                                                        <input id="{{ "main{$acs}{$v['label']}" }}"
                                                            class="form-check-input custom-checkbox"
                                                            name="permissions[{{ $v['label'] }}][{{ $acs }}]"
                                                            type="checkbox" {{ $checked }}>
                                                        {{ $acs }}
                                                    </label>
                                                @endif
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
                                                            $byrole = \Smjlabs\Core\Http\Helpers\Permission::check(
                                                                $vv['label'],
                                                                $acs,
                                                                $user->roles->first()->name,
                                                            );
                                                        @endphp
                                                        @if ($byrole)
                                                            <span class="text-success text-decoration-none"><i
                                                                    data-lucide="circle-check-big"
                                                                    class="lucide-sm me-1"></i> Default by role</span>
                                                        @else
                                                            @php
                                                                $checked = \Smjlabs\Core\Http\Helpers\Permission::checkbyUser(
                                                                    $vv['label'],
                                                                    $acs,
                                                                    $user->id,
                                                                )
                                                                    ? 'checked'
                                                                    : '';
                                                            @endphp
                                                            <label for="{{ "sub{$acs}{$vv['label']}" }}"
                                                                class="text-muted">
                                                                <input id="{{ "sub{$acs}{$vv['label']}" }}"
                                                                    class="form-check-input custom-checkbox"
                                                                    name="permissions[{{ $vv['label'] }}][{{ $acs }}]"
                                                                    type="checkbox" {{ $checked }}>
                                                                {{ $acs }}
                                                            </label>
                                                        @endif
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
                @permcan('User', 'set-permission')
                    <button type="submit" class="btn btn-dark d-flex justify-content-center align-items-center gap-2 m-2">
                        <i data-lucide="save" class="lucide-sm lucide-toggle"></i> Simpan Pengaturan
                    </button>
                @endpermcan
            </form>
        </div>
    </div>
@endsection
