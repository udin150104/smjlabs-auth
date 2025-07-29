<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        @foreach ($breadcrumb as $k => $v)
            <li class="breadcrumb-item">
                @if ($k === count($breadcrumb) - 1)
                    <span class="text-muted">{{ $v->label }}</span>
                @else
                    <a href="{{ $v->url }}" class="text-dark text-decoration-none">{{ $v->label }}</a>
                @endif
            </li>
        @endforeach
    </ol>
</nav>
