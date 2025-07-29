@php
    $url = request()->url();
@endphp

<div colspan="{{ collect($columns)->where('search', true)->count() + 1 }}"
    class="px-3 pb-3 card rounded-0 bg-light border-start-0 border-end-0 border-bottom-0 ">
    <strong class="mt-2 mb-1 fw-light text-muted">Filter</strong>
    <form action="{{ $url }}" method="GET" id="crud-filter-form" data-barba-submit class="table-filter-form" >
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
                            <input type="text" class="form-control " name="filter[{{ $key }}]"
                                placeholder="{{ $col['label'] }}" value="{{ request("filter.{$key}") }}">
                        @endif
                        @if ($col['type'] === 'select' && isset($col['select_data']))
                            <select class="form-select tom-select p-0 border-0" name="filter[{{ $key }}]">
                                <option value="">Semua {{ $col['label'] }}</option>
                                @foreach ($col['select_data'] as $optKey => $optVal)
                                    <option value="{{ $optVal }}"
                                        {{ request("filter.{$key}") == $optVal ? 'selected' : '' }}>
                                        {{ $optVal }}
                                    </option>
                                @endforeach
                            </select>
                        @endif
                        @if ($col['type'] === 'tom-select-ajax')
                            <select class="tom-select-ajax form-select p-0 border-0" data-url = '{{ $col['data-url'] }}'
                                name="filter[{{ $key }}]">
                                <option value="">Semua {{ $col['label'] }} ...</option>
                                @if (request("filter.{$key}"))
                                    <option value="{{ request("filter.{$key}") }}"
                                        {{ request("filter.{$key}") ? 'selected' : '' }}>
                                        {{ request("filter.{$key}") }}
                                    </option>
                                @endif
                            </select>
                        @endif
                        @if ($col['type'] === 'datepicker')
                            <div class="input-group datepicker" id="datepicker-{{ $key }}"
                                data-td-target-input="nearest" data-td-target-toggle="nearest">
                                <input type="text" class="form-control bg-light" name="filter[{{ $key }}]"
                                    placeholder="{{ $col['label'] }}" value="{{ request("filter.{$key}") }}"
                                    data-td-target="#datepicker-{{ $key }}" readonly>
                                <span class="input-group-text" data-td-toggle="datetimepicker"
                                    data-td-target="#datepicker-{{ $key }}">
                                    <i data-lucide="calendar" class="lucide-sm"></i>
                                </span>
                            </div>
                        @endif

                    </div>
                @endif
            @endforeach

            {{-- Tombol Filter dan Reset --}}
            <div class="col-md-3 col-sm-6 d-flex gap-2 align-items-start p-1">
                <button type="submit" class="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
                    <i data-lucide="funnel" class="lucide-sm"></i> Filter
                </button>

                <button type="reset" class="btn btn-outline-danger btn-sm d-flex align-items-center gap-2"
                    id="crud-delete-filter">
                    <i data-lucide="funnel-x" class="lucide-sm"></i> Reset
                </button>
            </div>
        </div>
    </form>
</div>
