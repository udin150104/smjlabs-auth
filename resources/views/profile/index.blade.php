@extends('smjlabscore::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace'){{ Str::slug('Halaman ' . $title) }}@endsection

@section('content')
    @include('smjlabscore::alert')
    <div class="card ">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center">
                <i data-lucide="file-text" class="lucide-md text-muted me-1"></i> {{ $title }}
            </span>
            <div class="ms-auto d-flex gap-2">
                <a href="{{ route('page.profile.edit',['profile' => auth()->user()->id]) }}" class="btn btn-link text-muted d-flex align-items-center text-decoration-none "><i data-lucide="pencil-line" class="lucide-sm me-1"></i> Ubah</a>
            </div>
        </div>

        <div class="card-body">
            <div class="container-fluid">
                <div class="mb-2 row">
                    <div class="col-sm-3 col-md-3 col-lg-2  align-middle">Nama</div>
                    <div class="col-sm-9 col-md-9 col-lg-10 align-middle"> {{auth()->user()->name}} </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-sm-3 col-md-3 col-lg-2  align-middle">Username</div>
                    <div class="col-sm-9 col-md-9 col-lg-10 align-middle"> {{'@'.auth()->user()->username}} </div>
                </div>
                <div class="mb-2 row">
                    <div class="col-sm-3 col-md-3 col-lg-2  align-middle">Email</div>
                    <div class="col-sm-9 col-md-9 col-lg-10 align-middle"> {{auth()->user()->email}} </div>
                </div>
            </div>
        </div>
    </div>
@endsection
