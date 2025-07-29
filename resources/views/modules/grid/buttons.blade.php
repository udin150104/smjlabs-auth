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