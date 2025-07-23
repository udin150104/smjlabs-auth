@php
    $url = request()->url();
    $urlQuery = request()->query();
    $fullUrl = count($urlQuery) ? $url . '?' . http_build_query($urlQuery) : $url;
@endphp

<div colspan="{{ count($columns) + 1 }}" class="px-3 pb-3 card rounded-0 bg-light border-start-0 border-end-0 border-bottom-0 ">
    <strong class="mt-2 mb-1 fw-light text-muted">Filter</strong>
    <form 
        action="{{ $url }}" 
        method="GET" 
        id="crud-filter-form" 
        data-barba-submit 
        class="table-filter-form"
    >
        {{-- Hidden Inputs --}}
        <input type="hidden" name="perpage" value="{{ request('perpage', 10) }}">
        <input type="hidden" name="page" value="{{ request('page', 1) }}">
        <input type="hidden" name="sort" value="{{ request('sort') }}">
        <input type="hidden" name="orderby" value="{{ request('orderby') }}">

        {{-- Filter Grid --}}
        <div class="row g-2">
            @foreach ($columns as $key => $col)
                @if ($key !== 'action' && $col['search'])
                    <div class="col-md-3 col-sm-6">
                        @if ($col['type'] === 'input')
                            <input 
                                type="text" 
                                class="form-control " 
                                name="filter[{{ $key }}]" 
                                placeholder="{{ $col['label'] }}" 
                                value="{{ request("filter.{$key}") }}"
                            >
                        @elseif ($col['type'] === 'select' && isset($col['select_data']))
                            <select 
                                class="form-select " 
                                name="filter[{{ $key }}]"
                            >
                                <option value="">Semua {{$col['label']}}</option>
                                @foreach ($col['select_data'] as $optKey => $optVal)
                                    <option 
                                        value="{{ $optVal }}" 
                                        {{ request("filter.{$key}") == $optVal ? 'selected' : '' }}
                                    >
                                        {{ $optVal }}
                                    </option>
                                @endforeach
                            </select>
                        @endif
                    </div>
                @endif
            @endforeach

            {{-- Tombol Filter dan Reset --}}
            <div class="col-md-12 col-sm-12 d-flex gap-2 align-items-start">
                <button 
                    type="submit" 
                    class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2"
                >
                    <i data-lucide="funnel" class="lucide-sm"></i> Filter
                </button>

                <button 
                    type="button" 
                    class="btn btn-outline-danger btn-sm d-flex align-items-center gap-2" 
                    id="crud-delete-filter"
                >
                    <i data-lucide="funnel-x" class="lucide-sm"></i> Reset
                </button>
            </div>
        </div>
    </form>
</div>
