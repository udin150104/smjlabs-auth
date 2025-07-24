@extends('smjlabscore::layouts.login')
@php
    $includejs = 'login';
@endphp
@section('content')
    <div class="container d-flex align-items-center justify-content-center vh-100">
        <div class="card p-4 col-sm-12 col-md-6 col-lg-6 border-0 shadow ">
            <div class="text-start ">
                <h4 class="d-flex align-items-center display-5 mt-2 no-select">
                    <i data-lucide="shield-user" class="lucide-70 me-2"></i>
                    Akses Masuk
                </h4>
                <hr>
                <p class=" fw-light no-select">
                    Silahkan masukkan inisial akses dan kata sandi anda pada form dibawah ini.
                </p>
            </div>

            @include('smjlabscore::alert')

            <form method="POST" action="{{ route('acc.login.store') }}">
                @csrf

                <div class="mb-3">
                    <label for="email" class="form-label small text-muted">Inisial Akses</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white border-end-0 d-flex align-items-center">
                            <i data-lucide="user" class="lucide-sm"></i>
                        </span>
                        <input type="text" class="form-control border-start-0" id="email" name="email"
                            value="{{ old('email') }}" required autofocus placeholder="Masukkan Email atau Username">
                        @error('email')
                            <div class="text-danger small">{{ $message }}</div>
                        @enderror
                    </div>
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label d-flex justify-content-between small text-muted">
                        <span>Kata Sandi</span>
                    </label>
                    <div class="input-group ">
                        <span class="input-group-text bg-white border-end-0 d-flex align-items-center">
                            <i data-lucide="lock" class="lucide-sm"></i>
                        </span>
                        <input type="password" class="form-control border-start-0" id="password" name="password" required
                            placeholder="••••••••">
                        <button type="submit" class="btn btn-dark d-flex align-items-center gap-2">
                            <i data-lucide="log-in" class="lucide-sm"></i> Masuk
                        </button>
                    </div>
                </div>

                <hr>
                <div class="d-flex justify-content-between align-items-center mt-3 flex-wrap">
                    <div class="form-check mb-2 no-select">
                        <input type="checkbox" class="form-check-input custom-checkbox" id="remember" name="remember">
                        <label class="form-check-label small" for="remember">Ingat Saya</label>
                    </div>
                    <div class="mb-2">
                    </div>
                    <div class="mb-2">
                        <button type="button" id="toggle-password"
                            class="btn btn-link text-dark d-flex border-0 px-0 text-decoration-none small justify-content-center align-items-center gap-2">
                            <small><i data-lucide="eye-off" class="lucide-sm lucide-toggle"></i> Tampilkan Kata
                                Sandi</small>
                        </button>
                    </div>
                </div>
            </form>
            <div class="mb-2">
                <a href="{{ url('/') }}"
                    class="btn btn-link text-dark d-flex border-0 px-0 text-decoration-none small justify-content-start align-items-center gap-2">
                    <small><i data-lucide="chevron-left" class="lucide-sm"></i> Kembali</small>
                </a>
            </div>

        </div>
    </div>
@endsection
