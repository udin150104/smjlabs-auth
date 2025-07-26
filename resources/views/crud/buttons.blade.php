<div class="card-header d-flex bg-light align-items-center  bg-white border-bottom-0">
    @isset($buttons)
        @foreach ($buttons as $k => $v)
            @if ($v['enable'])
                @if ($v['type'] === 'link')
                    @php
                        $url = $v['url'];
                        $urlquery = request()->query();
                        $fullUrl = count($urlquery) ? $url . '?' . http_build_query($urlquery) : $url;
                    @endphp
                    <a href="{{ $fullUrl }}" class="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                        <i data-lucide="{{ $v['icon'] }}" class="lucide-sm lucide-toggle"></i> {{ $v['label'] }}
                    </a>
                @endif
                @if ($v['type'] === 'button')
                    <button class="btn btn-dark d-flex justify-content-center align-items-center gap-2">
                        <i data-lucide="{{ $v['icon'] }}" class="lucide-sm lucide-toggle"></i> {{ $v['label'] }}
                    </button>
                @endif
            @endif
        @endforeach
    @endisset
    <div class="ms-auto d-flex gap-2">
        <div class="d-flex align-items-center gap-2 text-muted">
            Tampilkan
            <select class="form-select w-80px" aria-label="Per Halaman" id="crud-per-page">
                @foreach ($pagination as $v)
                    <option value="{{ $v }}" {{ $perpage == $v ? 'selected' : '' }}>{{ $v }}
                    </option>
                @endforeach
            </select>
            Data
        </div>
    </div>
</div>
