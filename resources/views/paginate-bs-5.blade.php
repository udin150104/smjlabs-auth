@if ($paginator->hasPages())
    <nav class="d-flex justify-items-center justify-content-between">
        <div class="d-flex justify-content-between flex-fill d-sm-none">
            <ul class="pagination">
                {{-- Previous Page Link --}}
                @if ($paginator->onFirstPage())
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link text-dark  d-flex align-items-center"><i data-lucide="arrow-left" class="lucide-sm me-2"></i> Sebelumnya</span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link text-dark  d-flex align-items-center" href="{{ $paginator->previousPageUrl() }}" rel="prev"><i data-lucide="arrow-left" class="lucide-sm me-2"></i> Sebelumnya </a>
                    </li>
                @endif

                {{-- Next Page Link --}}
                @if ($paginator->hasMorePages())
                    <li class="page-item">
                        <a class="page-link text-dark  d-flex align-items-center" href="{{ $paginator->nextPageUrl() }}" rel="next">Selanjutnya <i data-lucide="arrow-right" class="lucide-sm ms-2"></i></a>
                    </li>
                @else
                    <li class="page-item disabled" aria-disabled="true">
                        <span class="page-link text-dark  d-flex align-items-center">Selanjutnya <i data-lucide="arrow-right" class="lucide-sm ms-2"></i> </span>
                    </li>
                @endif
            </ul>
        </div>

        <div class="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
            <div>
                <p class="small text-muted">
                    {!! __('Showing') !!}
                    <span class="fw-semibold">{{ $paginator->firstItem() }}</span>
                    {!! __('to') !!}
                    <span class="fw-semibold">{{ $paginator->lastItem() }}</span>
                    {!! __('of') !!}
                    <span class="fw-semibold">{{ $paginator->total() }}</span>
                    {!! __('results') !!}
                </p>
            </div>

            <div>
                <ul class="pagination">
                    {{-- Previous Page Link --}}
                    @if ($paginator->onFirstPage())
                        <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                            <span class="page-link text-dark  d-flex align-items-center" aria-hidden="true"><i data-lucide="arrow-left" class="lucide-sm me-2"></i>
                        Sebelumnya</span>
                        </li>
                    @else
                        <li class="page-item">
                            <a class="page-link text-dark d-flex align-items-center" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')"><i data-lucide="arrow-left" class="lucide-sm me-2"></i>
                        Sebelumnya</a>
                        </li>
                    @endif

                    {{-- Pagination Elements --}}
                    @foreach ($elements as $element)
                        {{-- "Three Dots" Separator --}}
                        @if (is_string($element))
                            <li class="page-item disabled" aria-disabled="true"><span class="page-link">{{ $element }}</span></li>
                        @endif

                        {{-- Array Of Links --}}
                        @if (is_array($element))
                            @foreach ($element as $page => $url)
                                @if ($page == $paginator->currentPage())
                                    <li class="page-item active active-page" aria-current="page"><span class="page-link">{{ $page }}</span></li>
                                @else
                                    <li class="page-item"><a class="page-link text-dark " href="{{ $url }}">{{ $page }}</a></li>
                                @endif
                            @endforeach
                        @endif
                    @endforeach

                    {{-- Next Page Link --}}
                    @if ($paginator->hasMorePages())
                        <li class="page-item">
                            <a class="page-link text-dark  d-flex align-items-center" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">Selanjutnya <i data-lucide="arrow-right" class="lucide-sm ms-2"></i></a>
                        </li>
                    @else
                        <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                            <span class="page-link text-dark  d-flex align-items-center" aria-hidden="true">Selanjutnya <i data-lucide="arrow-right" class="lucide-sm ms-2"></i></span>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
@endif
