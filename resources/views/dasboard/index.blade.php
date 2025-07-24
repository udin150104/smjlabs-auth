@extends('smjlabsauth::layouts.panel-administrator')

@section('title')
  Halaman {{$title}}
@endsection

@section('namespace'){{ Str::slug('Halaman '.$title) }}@endsection

@section('content')
  <h4 class="display-5"> Selamat Datang, {{auth()->user()->name}} </h4>
  <h3 class="text-muted fst-normal fw-light">Selamat beraktivitas. 😊</h3>
@endsection