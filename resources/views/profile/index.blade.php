@extends('smjlabs-auth-views::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace'){{ Str::slug('Halaman '.$title) }}@endsection

@php
    $includejs = 'profile';
@endphp

@section('content')
    <div class="card rounded-0">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center">
                <i data-lucide="file-text" class="lucide-md text-muted me-1"></i> {{ $title }}
            </span>
            <div class="ms-auto d-flex gap-2">
                <button type="button" id="btn-edit" data-error="{{ $errors->any() ? 'error' : '' }}"
                    class="btn btn-link btn-sm text-muted text-decoration-none d-flex align-items-center gap-2 ">
                    <i data-lucide="pencil-line" class="lucide-sm"></i> Edit
                </button>
            </div>
        </div>

        <div class="card-body">
            @include('smjlabs-auth-views::alert')

            <form class="contianer-fluid" action="{{ route('page.profile.update', [auth()->user()->id]) }}" method="POST"
                id="form">
                @csrf
                @method('PUT')
                <div class="mb-2 row">
                    <label for="name" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Nama</label>
                    <div class="col-sm-9 col-md-9 col-lg-10">
                        <input type="text" readonly class="form-control form-control-plaintext" id="name"
                            name="name" value="{{ auth()->user()->name }}">
                        @error('name')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="username" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Username</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        <div class="input-group">
                            <span id="at-sign" class="input-group-text bg-white border-0 p-0 d-flex align-items-center">
                                <i data-lucide="at-sign" class="lucide-sm"></i>
                            </span>
                            <input type="text" readonly class="form-control form-control-plaintext" id="username"
                                name="username" value="{{ auth()->user()->username }}">
                        </div>
                        @error('username')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>

                </div>
                <div class="mb-2 row">
                    <label for="email" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Email</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        <input type="text" readonly class="form-control form-control-plaintext" id="email"
                            name="email" value="{{ auth()->user()->email }}">
                        @error('email')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="d-none" id="hidden-form">
                    <div class="mb-2 row">
                        <label for="password" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Kata Sandi</label>
                        <div class="col-sm-9 col-md-9 col-lg-4">
                            <input type="password" readonly class="form-control form-control-plaintext" id="password"
                                name="password" placeholder="Kosongkan jika tidak ingin merubah">
                            @error('password')
                                <div class="form-text text-danger small error-help">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="mb-2 row">
                        <label for="password_confirm" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Konfirmasi Kata
                            Sandi</label>
                        <div class="col-sm-9 col-md-9 col-lg-4">
                            <input type="password" readonly class="form-control form-control-plaintext"
                                id="password_confirm" name="password_confirm"
                                placeholder="Kosongkan jika tidak ingin merubah">
                            @error('password_confirm')
                                <div class="form-text text-danger small error-help">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>

                    <div class="mb-2 py-2">
                        <div class="col-12 col-lg-10 offset-lg-2">
                            <div class="d-flex flex-wrap gap-2 justify-content-start">
                                <button type="submit"
                                    class="btn btn-dark d-flex justify-content-center align-items-center btn-loading gap-2 rounded-2">
                                    <i data-lucide="save" class="lucide-sm"></i> Simpan
                                </button>
                                <button type="reset"
                                    class="btn btn-secondary d-flex justify-content-center align-items-center gap-2 rounded-2">
                                    <i data-lucide="rotate-ccw" class="lucide-sm"></i> Reset
                                </button>
                                <button type="button" id="toggle-password"
                                    class="btn btn-link text-dark d-flex border-0 px-0 ms-2 text-decoration-none justify-content-center align-items-center gap-2">
                                    <i data-lucide="eye-off" class="lucide-sm lucide-toggle"></i> Tampilkan Kata Sandi
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    </div>
@endsection
