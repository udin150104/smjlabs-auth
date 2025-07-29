@if (count($data) > 0)
    <div class="btn-group">
        @foreach ($data as $k => $v)
            @if ($v['enable'])
                @if ($k === 'delete')
                    <form action="{{ $v['url'] }}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn text-danger btn-sm d-flex align-items-center crud-btn-delete"
                            data-barba-prevent>
                            @if (array_key_exists('icon', $v))
                                <i data-lucide="{{ $v['icon'] }}" class="lucide-sm me-1 text-danger"></i>
                            @endif
                            {{ $v['label'] }}
                        </button>
                    </form>
                @else
                    <a href="{{ $v['url'] }}" class="btn btn-sm  d-flex align-items-center">
                        @if (array_key_exists('icon', $v))
                            <i data-lucide="{{ $v['icon'] }}" class="lucide-sm text-muted me-1 text"></i>
                        @endif
                        {{ $v['label'] }}
                    </a>
                @endif
            @endif
        @endforeach
    </div>
@endif
