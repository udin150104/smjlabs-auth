@extends('smjlabscore::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace')
    {{ Str::slug('Halaman ' . $title) }}
@endsection

@section('content')
    @include('smjlabscore::crud.breadcrumb')
    <h6 class=" display-6 mb-3 text-muted">{{ $title }}</h6>
    @include('smjlabscore::alert')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="book-open-text" class="lucide-md text-muted me-1"></i> Detail
            </span>

            <div class="ms-auto d-flex ">
                @php
                    $urlIndex = route('page.logactivity.index');
                    $urlquery = request()->query();
                    $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
                @endphp
                <a href="{{ $fullUrl }}"
                    class="btn btn-link text-muted d-flex align-items-center text-decoration-none "><i
                        data-lucide="arrow-left" class="lucide-sm me-1"></i> Kembali</a>
            </div>
        </div>
        <div class="card-body">
            <div class="container-fluid">
                <div class="mb-2 ">
                    <div class="align-middle text-lg-start text-sm-end text-muted w-100">
                        {{ $logactivity->created_at->format('d/m/Y H:i:s') }} </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-sm-12 col-md-12 col-lg-12 align-middle ">
                        @if ($logactivity->users)
                            <table class=" table table-bordered">
                                <thead>
                                    <tr>
                                        <th colspan="2">Dilakukan oleh User :</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="p-0 p-sm-3">
                                        <td width="100" class="d-none d-sm-table-cell">Nama</td>
                                        <td data-label="Nama" class=" ">{{ $logactivity->users?->name ?? '-' }}</td>
                                    </tr>
                                    <tr class="p-0 p-sm-3">
                                        <td class="d-none d-sm-table-cell">Username</td>
                                        <td data-label="Username" class=" ">{{ $logactivity->users?->username ?? '-' }}
                                        </td>
                                    </tr>
                                    <tr class="p-0 p-sm-3">
                                        <td class="d-none d-sm-table-cell">Email</td>
                                        <td data-label="Email" class=" ">{{ $logactivity->users?->email ?? '-' }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        @endif
                    </div>
                </div>

                @if ($logactivity->event == 'created' || $logactivity->event == 'deleted' || $logactivity->event == 'updated')
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle">
                            <pre class="bg-dark text-white p-2"> <code> [ @if (class_exists($logactivity->model_type)) @php $class = $logactivity->model_type; $tableName = with(new $class())->getTable(); @endphp {{ $tableName }} | {{ ucwords(str_replace('_', ' ', $tableName)) }} @endif {{ ucwords(str_replace('_', ' ', $logactivity->event)) }} ] {{ $logactivity->description }} </code> </pre>
                        </div>
                    </div>
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle">
                            <pre class="bg-dark text-white p-2">{{ json_encode($logactivity->properties, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
                        </div>
                    </div>
                @endif
                @if ($logactivity->event == 'page_visited')
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle">
                          <pre class="bg-dark text-white p-2"><code> [{{ ucwords(str_replace('_', ' ', $logactivity->event)) }}] {{ $logactivity->description }} </code> </pre>
                        </div>
                    </div>
                @endif

                @if ($logactivity->event == 'login' || $logactivity->event == 'logout' || $logactivity->event == 'login_failed')
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle"> <code>
                                [{{ ucwords(str_replace('_', ' ', $logactivity->event)) }}]
                                {{ $logactivity->description }}</code> </div>
                    </div>
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle">
                            <pre class="bg-dark text-white p-2">{{ json_encode($logactivity->properties, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
                        </div>
                    </div>
                @endif
                @if ($logactivity->event == 'set_permission')
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle"> <code>
                                [{{ ucwords(str_replace('_', ' ', $logactivity->event)) }}]
                                {{ $logactivity->description }}</code> </div>
                    </div>
                    <div class="mb-2 row">
                        <div class="col-sm-12 col-md-12 col-lg-12 align-middle">
                            <pre class="bg-dark text-white p-2">{{ json_encode($logactivity->properties, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</pre>
                        </div>
                    </div>
                @endif

            </div>
        </div>
    </div>
@endsection
