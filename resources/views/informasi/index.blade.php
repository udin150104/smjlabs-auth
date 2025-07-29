@extends('smjlabscore::layouts.panel-administrator')

@section('title')
Halaman {{ $title }}
@endsection

@section('namespace'){{ Str::slug('Halaman ' . $title) }}@endsection

@php
$includejs = 'informasisistem';
@endphp

@section('content')
@include('smjlabscore::modules.breadcrumb')
<h6 class="display-6 mb-3 text-muted">{{ $title }}</h6>
@include('smjlabscore::alert')


<div class="row g-4" id="monitor-cards">
  {{-- Memory --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-cpu fs-1 text-primary"></i>
        <div>
          <div class="text-muted small">Memory Usage</div>
          <h5 id="memoryUsage" class="fw-bold mb-0">-</h5>
        </div>
      </div>
    </div>
  </div>

  {{-- PHP --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-code-slash fs-1 text-success"></i>
        <div>
          <div class="text-muted small">PHP Version</div>
          <h5 id="phpVersion" class="fw-bold mb-0">-</h5>
        </div>
      </div>
    </div>
  </div>

  {{-- Laravel --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-layers fs-1 text-warning"></i>
        <div>
          <div class="text-muted small">Laravel Version</div>
          <h5 id="laravelVersion" class="fw-bold mb-0">-</h5>
        </div>
      </div>
    </div>
  </div>

  {{-- Server Time --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-clock fs-1 text-info"></i>
        <div>
          <div class="text-muted small">Server Time</div>
          <h5 id="serverTime" class="fw-bold mb-0">-</h5>
        </div>
      </div>
    </div>
  </div>

  {{-- 👇 Tambahan Baru --}}
  {{-- Uptime --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-activity fs-1 text-danger"></i>
        <div>
          <div class="text-muted small">Uptime</div>
          <h5 id="uptime" class="fw-bold mb-0">-</h5>
        </div>
      </div>
    </div>
  </div>

  {{-- Server OS --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-hdd-network fs-1 text-secondary"></i>
        <div>
          <div class="text-muted small">Server OS</div>
          <h6 id="os" class="fw-bold mb-0 small text-wrap">-</h6>
        </div>
      </div>
    </div>
  </div>

  {{-- Server Software --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body d-flex align-items-center gap-3">
        <i class="bi bi-terminal-dash fs-1 text-dark"></i>
        <div>
          <div class="text-muted small">Server Software</div>
          <h6 id="serverSoftware" class="fw-bold mb-0 small text-wrap">-</h6>
        </div>
      </div>
    </div>
  </div>

  {{-- App Info --}}
  <div class="col-md-6 col-lg-3 col-sm-12">
    <div class="card shadow-sm  h-100">
      <div class="card-body small">
        <div><strong>DB Connection:</strong> <span id="dbConnection">-</span></div>
        <div><strong>Queue Driver:</strong> <span id="queueConnection">-</span></div>
        <div><strong>Cache Driver:</strong> <span id="cacheDriver">-</span></div>
        <div><strong>Env:</strong> <span id="appEnv">-</span></div>
        <div><strong>Debug:</strong> <span id="appDebug">-</span></div>
      </div>
    </div>
  </div>
</div>

@endsection