
@extends('smjlabscore::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection

@section('namespace'){{ Str::slug('Halaman ' . $title) }}@endsection

@php
    $includejs = 'crud';
@endphp

@section('content')
    @include('smjlabscore::modules.breadcrumb')
    <h6 class=" display-6 mb-3 text-muted">{{ $title }}</h6>

    @include('smjlabscore::alert')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="table-properties" class="lucide-md text-muted me-1"></i> List Data
            </span>

            <div class="ms-auto d-flex gap-2">
              @include('smjlabscore::modules.grid.active-header')
            </div>
        </div>
        <div class="card-header d-flex bg-light align-items-center  bg-white border-bottom-0">
          @include('smjlabscore::modules.grid.buttons')
          <div class="ms-auto d-flex gap-2">
              <div class="d-flex align-items-center gap-2 text-muted">
                  Tampilkan
                  <select class="form-select w-80px" aria-label="Per Halaman" id="crud-per-page">
                      @foreach ($pagination as $v)
                          <option value="{{ $v }}" {{ $perpage == $v ? 'selected' : '' }}>{{ $v }} </option>
                      @endforeach
                  </select>
                  Data
              </div>
          </div>
        </div>

        @include('smjlabscore::modules.grid.filter')

        <div class="card-body p-0 mb-0">
          @include('smjlabscore::modules.grid.lists')
        </div>
        <div class="card-footer border-top-0">
          <nav class="my-2">
              @if ($query->total() < $query->perPage())
                  @include('smjlabscore::nodatapaginate')
              @else
                  {{ $query->links('smjlabscore::paginate-bs-5') }}
              @endif
          </nav>
        </div>
    </div>


    <div class="modal fade" id="modal-all" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-close-modal" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-action-modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>
@endsection
