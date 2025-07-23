@extends('smjlabsauth::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace'){{ Str::slug('Halaman '.$title) }}@endsection

@php
    $includejs = 'users-form';
@endphp

@section('content')
    @include('smjlabsauth::crud.breadcrumb')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="clipboard-type" class="lucide-md text-muted me-1"></i> {{ $title }}
            </span>

            <div class="ms-auto d-flex ">
                @php
                    $currentRoute = request()->route()->getName();
                    // $indexRoute = preg_replace('/\.create$/', '.index', $currentRoute);
                    $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
                    $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.index', $currentRoute);
                    $urlIndex = route($indexRoute);
                    $urlquery = request()->query();
                    $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
                @endphp
                <a href="{{ $fullUrl }}" class="btn btn-link text-muted d-flex align-items-center text-decoration-none "><i
                        data-lucide="arrow-left" class="lucide-sm me-1"></i> Kembai</a>
            </div>
        </div>

        <div class="card-body">

            @include('smjlabsauth::alert')

            @php
                $currentRoute = request()->route()->getName();
                if ($type == 'create') {
                    $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.store', $currentRoute);
                    $urlIndex = route($indexRoute);
                }
                if ($type == 'edit') {
                    $indexRoute = preg_replace('/\.(create|edit|show|update|destroy)$/', '.update', $currentRoute);
                    $urlIndex = route($indexRoute,$form->id);
                }
                $urlquery = request()->query();
                $fullUrl = count($urlquery) ? $urlIndex . '?' . http_build_query($urlquery) : $urlIndex;
            @endphp
            <form action="{{ $fullUrl }}" method="post">
                @csrf
                @if ($type == 'edit')
                    @method('PUT')
                @endif

                <div class="mb-2 row">
                    <label for="name" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Nama</label>
                    <div class="col-sm-9 col-md-9 col-lg-8">
                        @php
                            $df = ($type == 'edit')? $form->name : old('name');
                            $valname =  old('name',$df);
                        @endphp
                        <input type="text" class="form-control" id="name" name="name" value="{{$valname}}">
                        @error('name')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="username" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Username</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        @php
                            $df = ($type == 'edit')? $form->username : old('username');
                            $valusername =  old('username',$df);
                        @endphp
                        <input type="text" class="form-control" id="username" name="username" value="{{$valusername}}">
                        @error('username')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="email" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Email</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        @php
                            $df = ($type == 'edit')? $form->email : old('email');
                            $valemail =  old('email',$df);
                        @endphp
                        <input type="text" class="form-control" id="email" name="email" value="{{$valemail}}">
                        @error('email')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="password" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Kata Sandi</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        <input type="password" class="form-control" id="password" name="password" placeholder="{{($type == 'edit')? 'Kosongkan jika tidak ingin merubah kata sandi' : ''}}">
                        @error('password')
                            <div class="form-text text-danger small error-help">{{ $message }}</div>
                        @enderror
                    </div>
                </div>
                <div class="mb-2 row">
                    <label for="password" class="col-sm-3 col-md-3 col-lg-2 col-form-label">Peran</label>
                    <div class="col-sm-9 col-md-9 col-lg-4">
                        @php
                            $df = ($type == 'edit')? $form->roles->first()->id : old('role');
                            $valrole =  old('role',$df);
                        @endphp
                        <select class="form-select" id="role" name="role">
                            <option value="">Pilih Peran</option>
                            @foreach ($role as $k => $v)
                                <option value="{{ $k }}" {{$valrole == $k? 'selected' : ''}}>{{ $v }}</option>
                            @endforeach
                        </select>
                        @error('role')
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
                            <button type="button" id="generate-password"
                                class="btn btn-link text-dark d-flex border-0 px-0 ms-2 text-decoration-none justify-content-center align-items-center gap-2">
                                <i data-lucide="brain" class="lucide-sm lucide-toggle"></i> Generate Kata Sandi
                            </button>
                            <button type="button" id="toggle-password"
                                class="btn btn-link text-dark d-flex border-0 px-0 ms-2 text-decoration-none justify-content-center align-items-center gap-2">
                                <i data-lucide="eye-off" class="lucide-sm lucide-toggle"></i> Tampilkan Kata Sandi
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
@endsection
