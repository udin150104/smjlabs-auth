@php
$activefilter = 0;
$activesort = 0;
$filtera = request()->input('filter', []);
foreach ($filtera as $c) {
  if (!empty($c)) {
    $activefilter++;
  }
}
$activesort = !empty(request()->sort) ? 1 : 0;
@endphp
@if ($activefilter > 0)
<span class="badge fw-lighter text-muted d-flex align-items-center "><i data-lucide="funnel"
    class="lucide-sm me-1"></i> Filter Aktif</span>
@endif
@if ($activesort > 0)
<span class="badge text-muted  d-flex align-items-center "><i data-lucide="arrow-down-up"
    class="lucide-sm me-1"></i> Sorting Aktif</span>
@endif