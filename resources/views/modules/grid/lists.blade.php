<div class=" table-responsive mb-0">

  <table class="table table-bordered mb-0">
    <thead>
      <tr class="table-light">
        @if($iterations['enable'])
        <th width="20" class="text-center text-muted fw-bolder text-uppercase">{{$iterations['label']}}</th>
        @endif
        @foreach ($columns as $key => $val )
          @php
            $column = (object)$val;
            $width = $column?->width??0;
            $class = $column?->class??'';
            $label = $column?->label?? ucwords(str_replace('-', ' ', $key));
            $sort = $column?->sort?? false;
          @endphp
          <th class="text-muted fw-bolder text-uppercase {{ $class }}" width="{{ $width }}">
            @if($sort)
              @php
                  $urlsort = request()->url();
                  $urlquery = request()->query();
                  $urlquery['sort'] = request()->query('sort', 'asc') === 'asc' ? 'desc' : 'asc';
                  $urlquery['orderby'] = $key;
                  $fullUrl = count($urlquery) ? $urlsort . '?' . http_build_query($urlquery) : $urlsort;
              @endphp
              <a href="{{ $fullUrl }}" class="text-decoration-none text-muted d-flex align-items-center">
                  @if (request('orderby') === $key)
                      <i data-lucide="{{ request('sort', 'asc') === 'desc' ? 'move-up' : 'move-down' }}" class="lucide-sm me-1 text-muted float-end"></i>
                  @endif
                  {{ $label }}
              </a>
            @else
              {{ $label }}
            @endif
          </th>
        @endforeach
      </tr>
    </thead>
    <tbody>
      @if ($query->total() <= 0)
        @php
          $colspan = $iterations['enable']? 1 : 0;
          $colspan = $colspan + count($columns);
        @endphp
        <tr>
            <td colspan="{{ $colspan }}" class="text-muted"> Belum ada data</td>
        </tr>
      @endif

      @foreach ($query as $k => $v)
          <tr>
            @if($iterations['enable'])
              <td class="text-center fw-light" data-label="No"> {{ ($query->currentPage() - 1) * $query->perPage() + $loop->iteration }}</td>
            @endif
            @foreach ($columns as $key => $val)
              @php
                $column = (object)$val;
                $label = $column?->label?? ucwords(str_replace('-', ' ', $key));
              @endphp
              <td class="fw-light" data-label="{{ $label }}"> {!! $v->{$key} !!} </td>
            @endforeach
          </tr>
      @endforeach
    </tbody>
  </table>

</div>