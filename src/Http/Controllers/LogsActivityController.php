<?php

namespace Smjlabs\Core\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Smjlabs\Core\Models\ActivityLog;
use Smjlabs\Core\Traits\StaticLists;

class LogsActivityController extends Controller
{

  use StaticLists;
  /**
   * Summary of title
   * @var string
   */
  protected $title = 'Log Aktivitas';
  /**
   * Summary of menulabel
   * @var string
   */
  protected $menulabel = 'Log Aktivitas';
  /**
   * Summary of access
   * @var array
   */
  protected $access = [
    'index' => 'access'
  ];
  /**
   * Summary of perpage
   * @var int
   */
  protected $perpage = 10;
  /**
   * Summary of pagination
   * @var array
   */
  protected $pagination = [10, 25, 50];
  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Sistems'],
      (object)['url' => '#', 'label' => $this->title]
    ];
  }
  /**
   * Summary of columns
   * @return array{action: array{label: string, search: bool, sort: bool, width: int, email: array{label: string, search: bool, sort: bool, type: string, width: int}, name: array{label: string, search: bool, sort: bool, type: string}, username: array{label: string, search: bool, sort: bool, type: string, width: int}}}
   */
  protected function columns()
  {
    // $select_data_type = ActivityLog::select('event')->get()->pluck('event', 'id')->toArray();
    $select_data_type = ActivityLog::select('event')->groupBy('event')
      ->get()
      ->mapWithKeys(function ($item) {
        return [$item->event => ucwords(str_replace('_', ' ', $item->event))];
      })
      ->toArray();

    return [
      'tanggal' =>  ['label' => 'Tanggal', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'datepicker', 'sort' => true],
      'user' =>  ['label' => 'User', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'tom-select-ajax', 'data-url' => 'api-form/users', 'sort' => true],
      'type' =>  ['label' => 'Tipe', 'column' => false, 'search' => true, 'type' => 'select', 'select_data' => $select_data_type, 'sort' => false],
      'description' =>  ['label' => 'Keterangan', 'column' => true, 'search' => false, 'sort' => true],
      'action' =>  ['label' => '', 'column' => true, 'width' => 50, 'search' => false, 'sort' => false],

    ];
  }
  /**
   * Summary of query
   * @param mixed $request
   */
  protected function query($request)
  {
    // Ambil kolom yang akan ditampilkan
    $selectFields = array_keys(collect($this->columns())->where('column', true)->toArray());

    $selectFields = array_merge(['id', 'user_id', 'created_at'], $selectFields);
    // per page
    $this->perpage = $request->input('perpage', $this->perpage);
    // select berdasarkan colum yang ditampilkan
    $query = ActivityLog::select($selectFields);
    /** FILTER */
    $filters = $request->input('filter', []);
    if (!empty($filters['description'])) {
      $query->where("activity_logs.description", 'like', '%' . $filters['description'] . '%');
    }
    if (!empty($filters['tanggal'])) {
      $query->whereDate("activity_logs.created_at", Carbon::createFromFormat('d/m/Y', $filters['tanggal'])->format("Y-m-d"));
    }
    if (!empty($filters['type'])) {
      $fil = str_replace(' ', '_', strtolower($filters['type']));
      // dd($fil);
      $query->where("activity_logs.event", 'like', '%' . $fil . '%');
    }
    if (!empty($filters['user'])) {
      $query->with('users')->whereHas('users', function ($q) use ($filters) {
        $q->where('name', $filters['user']);
      });
    }
    /** Sorting */
    if ($request->has('sort') && $request->filled('sort')) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';
      if ($orderby == 'tanggal') {
        $query->orderBy('activity_logs.created_at', $request->sort);
      } else if ($orderby == 'user') {
        $query->select('activity_logs.*')
          ->leftJoin('users', 'users.id', '=', 'activity_logs.user_id')
          ->orderBy('users.name', $request->sort);
      } else if ($orderby == 'description') {
        $query->orderBy('activity_logs.description', $request->sort);
      } else {
        $query->orderBy("activity_logs.{$orderby}", 'desc');
      }
    } else {
      $query->orderBy('activity_logs.created_at', 'desc');
    }

    $paginated = $query->paginate($this->perpage)->appends($request->except('page'));

    if ($paginated->currentPage() > $paginated->lastPage()) {
      $request->merge(['page' => $paginated->lastPage()]);
      $paginated = $query->paginate($this->perpage)->appends($request->except('page'));
    }
    /**
     * Tulisa ulang isi data
     * Transform hasil (misal, tambahkan tombol aksi dll)
     */
    $paginated->getCollection()->transform(function ($q) use ($filters) {
      $q->tanggal = Carbon::parse($q->created_at)->format('d/m/Y H:i:s');
      $q->user = $q->users?->name ?? '';

      $url = route('page.logactivity.show', ['logactivity' => $q->id]);
      $urlquery = request()->query();
      $fullUrl = count($urlquery) ? $url . '?' . http_build_query($urlquery) : $url;
      $data = [
        'detail' => [
          'label' => 'Detail',
          'icon' => 'file-text',
          'url' => $fullUrl,
          'enable' => true
        ],
      ];
      $q->action = view('smjlabscore::crud.action', ['data' => $data])->render();
      return $q;
    });
    return $paginated;
  }
  /**
   * Summary of grid
   * @param \Illuminate\Http\Request $request
   * @return array{breadcrumb: object[], buttons: array, columns: array, pagination: array, query: mixed, title: string}
   */
  protected function grid(Request $request)
  {
    if ($request->has('perpage') && $request->filled('perpage')) {
      $this->perpage = $request->get('perpage');
    }

    return [
      'title' => $this->title,
      'views' => 'smjlabscore::crud.index',
      'breadcrumb' => $this->breadcrumbs(),
      'columns' => $this->columns(),
      'perpage' => $this->perpage,
      'pagination' => $this->pagination,
      'query' => $this->query($request)
    ];
  }
  /**
   * Summary of show
   * @param \Illuminate\Http\Request $request
   * @param \Smjlabs\Core\Models\ActivityLog $logactivity
   * @return \Illuminate\Contracts\View\View
   */
  public function show(Request $request, ActivityLog $logactivity)
  {
    $title = $this->title;
    $breadcrumb = $this->breadcrumbs();
    array_push($breadcrumb, (object)['url' => '#', 'label' => 'Detail']);
    return view('smjlabscore::logactivity.detail', compact('logactivity', 'title', 'breadcrumb'));
  }
}
