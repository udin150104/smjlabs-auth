<?php

namespace Smjlabs\Core\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Smjlabs\Core\Modules\Grid;
use Smjlabs\Core\Models\ActivityLog;
use Smjlabs\Core\Modules\BaseController;
use Smjlabs\Core\Traits\StaticResources;

class LogsActivityController extends BaseController
{

  use StaticResources;
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
  public function __construct()
  {
    $this->middleware("perms:{$this->menulabel}:access")->only(['index', 'show']);
  }
  /**
   * Summary of breadcrumbs
   * @return object[]
   */
  protected function breadcrumbs()
  {
    return [
      (object)['url' => '#', 'label' => 'Sistem'],
      (object)['url' => '#', 'label' => $this->title]
    ];
  }
  /**
   * Summary of grid
   * @param \Illuminate\Http\Request $request
   * @return Grid
   */
  protected function grid(Request $request)
  {

    $select_data_type = ActivityLog::select('event')->groupBy('event')
      ->get()
      ->mapWithKeys(function ($item) {
        return [$item->event => ucwords(str_replace('_', ' ', $item->event))];
      })
      ->toArray();

    $grid = new Grid(new ActivityLog());
    /** Filter */
    $filters = $request->input('filter', []);
    $grid->filterQuery(function ($query) use ($filters) {
      if (!empty($filters['description'])) {
        $query->where("activity_logs.description", 'like', '%' . $filters['description'] . '%');
      }
      if (!empty($filters['tanggal'])) {
        $query->whereDate("activity_logs.created_at", Carbon::createFromFormat('d/m/Y', $filters['tanggal'])->format("Y-m-d"));
      }
      if (!empty($filters['type'])) {
        $fil = str_replace(' ', '_', strtolower($filters['type']));
        $query->where("activity_logs.event", 'like', '%' . $fil . '%');
      }
      if (!empty($filters['user'])) {
        $query->with('users')->whereHas('users', function ($q) use ($filters) {
          $q->where('name', $filters['user']);
        });
      }
    });
    /** Sorting */
    $grid->sortQuery(function ($query) use ($request) {
      $orderby = $request->has('orderby') && $request->filled('orderby') ? $request->orderby : 'created_at';
      $sort = $request->has('sort') && $request->filled('sort') ? $request->sort : 'asc';
      if ($orderby == 'tanggal') {
        $query->orderBy('activity_logs.created_at', $request->sort);
      }else if ($orderby == 'user') {
        $query->select('activity_logs.*')
          ->leftJoin('users', 'users.id', '=', 'activity_logs.user_id')
          ->orderBy('users.name', $request->sort);
      }else if ($orderby == 'description') {
        $query->orderBy('activity_logs.description', $request->sort);
      } else {
        $query->orderBy("activity_logs.{$orderby}", $sort);
      }
    });
    /** Column to display */
    $grid->setColumn([
      'tanggal' =>  ['label' => 'Tanggal', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'datepicker', 'sort' => true],
      'user' =>  ['label' => 'User', 'column' => true, 'width' => 200, 'search' => true, 'type' => 'tom-select-ajax', 'data-url' => 'api-form/users', 'sort' => true],
      'type' =>  ['label' => 'Tipe', 'column' => false, 'search' => true, 'type' => 'select', 'select_data' => $select_data_type, 'sort' => false],
      'description' =>  ['label' => 'Keterangan', 'column' => true, 'search' => false, 'sort' => true],
      'action' =>  ['label' => '', 'column' => true, 'width' => 50, 'search' => false, 'sort' => false],
    ]);
    if ($request->has('perpage') && $request->filled('perpage')) {
      $grid->setPerPage($request->get('perpage'));
    }
    $grid->setManipulationColumns(null, function ($q) use ($select_data_type) {
      $q->tanggal = Carbon::parse($q->created_at)->format('d/m/Y H:i:s');
      $q->user = $q->users?->name ?? '';
      $q->type = $select_data_type[$q->event]?? '';
      $data = [
        'detail' => [
          'label' => 'Detail',
          'icon' => 'file-text',
          'url' => $this->generateUrlWithRequest('page.logactivity.show', ['logactivity' => $q->id]),
          'enable' => true
        ]
      ];
      $q->action = view('smjlabscore::modules.grid.action', ['data' => $data])->render();
      return $q;
    });

    return $grid;
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
