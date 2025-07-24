@extends('smjlabscore::layouts.panel-administrator')

@section('title')
    Halaman {{ $title }}
@endsection


@section('namespace'){{ Str::slug('Halaman '.$title) }}@endsection

@php
    $includejs = 'crud';
@endphp

@section('content')
    @include('smjlabscore::crud.breadcrumb')
    <h6 class=" display-6 mb-3 text-muted">{{ $title }}</h6>

    @include('smjlabscore::alert')

    <div class="card">
        <div class="card-header d-flex bg-light align-items-center gap-2">
            <span class="fw-bold text-muted d-flex align-items-center  text-uppercase">
                <i data-lucide="table-properties" class="lucide-md text-muted me-1"></i> List Data
            </span>

            <div class="ms-auto d-flex gap-2">
                @php
                    $activefilter = 0;
                    $activesort=0;
                    $filtera = request()->input('filter', []);
                    foreach ($filtera as $c) {
                        if (!empty($c)) {
                            $activefilter++;
                        }
                    }
                    $activesort = !empty(request()->sort)? 1 : 0;
                @endphp
                @if ($activefilter > 0)
                    <span class="badge  text-muted d-flex align-items-center "><i data-lucide="funnel"
                            class="lucide-sm me-1"></i> Filter Aktif</span>
                @endif
                @if ($activesort > 0)
                    <span class="badge text-muted  d-flex align-items-center "><i data-lucide="arrow-down-up"
                            class="lucide-sm me-1"></i> Sorting Aktif</span>
                @endif
            </div>
        </div>

        @include('smjlabscore::crud.buttons')
        @include('smjlabscore::crud.filter-row')

        <div class="card-body p-0 mb-0">

            
            <div class=" table-responsive mb-0">

                <table class="table table-bordered mb-0">
                    <thead>
                        <tr class="table-light">
                            <td width="20" class="text-center text-muted fw-bolder text-uppercase">No</td>
                            @foreach ($columns as $k => $v)
                                <td width="{{ array_key_exists('width', $v) ? $v['width'] : '' }}"
                                    class="text-muted fw-bolder  text-uppercase">
                                    @if (array_key_exists('sort', $v) && $v['sort'])
                                        @php
                                            $urlsort = request()->url();
                                            $urlquery = request()->query();
                                            $urlquery['sort'] =
                                                request()->query('sort', 'asc') === 'asc' ? 'desc' : 'asc';
                                            $urlquery['orderby'] = $k;
                                            $fullUrl = count($urlquery)
                                                ? $urlsort . '?' . http_build_query($urlquery)
                                                : $urlsort;
                                        @endphp
                                        <a href="{{ $fullUrl }}"
                                            class="text-decoration-none text-muted d-flex align-items-center">
                                            @if (request('orderby') === $k)
                                                <i data-lucide="{{ request('sort', 'asc') === 'desc' ? 'move-up' : 'move-down' }}"
                                                    class="lucide-sm me-1 text-muted float-end"></i>
                                            @endif
                                            {{ $v['label'] }}
                                        </a>
                                    @else
                                        {{ $v['label'] }}
                                    @endif
                                </td>
                            @endforeach
                        </tr>
                    </thead>
                    <tbody>
                        @if ($query->total() > 0)
                            @foreach ($query as $k => $v)
                                <tr>
                                    <td class="text-center fw-light" data-label="No">
                                        {{ ($query->currentPage() - 1) * $query->perPage() + $loop->iteration }}</td>
                                    @foreach ($columns as $kk => $vv)
                                        <td class="fw-light" data-label="{{ $vv['label'] }}">
                                            {!! $v->{$kk} !!}
                                        </td>
                                    @endforeach
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="{{ count($columns) + 1 }}" class="text-muted text-center"> Belum ada data</td>
                            </tr>
                        @endif
                    </tbody>
                </table>

            </div>

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
