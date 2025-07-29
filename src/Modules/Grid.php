<?php

namespace Smjlabs\Core\Modules;

use Closure;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;

class Grid
{
  /**
   * Summary of views
   * @var string
   */
  protected static string $views = 'smjlabscore::modules.grid.index';

  /**
   * Summary of columns
   * @var array
   */
  protected static array $columns;

  /**
   * Summary of search
   * @var array
   */
  protected static array $search;

  /**
   * Summary of perpage
   * @var int
   */
  protected static int $perpage = 10;

  /**
   * Summary of pagination
   * @var array
   */
  protected static array $pagination = [10, 25, 50];

  protected static array $buttons = [];

  /**
   * Summary of iterations
   * @var array
   */
  protected static array $iterations = [
    'label' => 'No',
    'enable' => true
  ];

  /**
   * Summary of manipulationCallback
   * @var 
   */
  protected static $manipulationCallback = null;

  /**
   * Summary of filterCallback
   * @var 
   */
  protected static $filterCallback = null;

  /**
   * Summary of sortCallback
   * @var 
   */
  protected static $sortCallback = null;
  /**
   * Summary of model
   * @var Model
   */
  protected static Model $model;

  public function __construct(Model $model)
  {
    self::$model = $model;
  }

  /**
   * Summary of setColumn
   * @param array $columns
   * @return void
   */
  public static function setColumn(array $columns)
  {
    self::$columns = $columns;
  }

  /**
   * Summary of setSearch
   * @param array $search
   * @return void
   */
  public static function setSearch(array $search)
  {
    self::$search = $search;
  }

  /**
   * Summary of setPerPage
   * @param int $perpage
   * @return void
   */
  public static function setPerPage(int $perpage)
  {
    self::$perpage = $perpage;
  }

  /**
   * Summary of setPagination
   * @param array $pagination
   * @return void
   */
  public static function setPagination(array $pagination)
  {
    self::$pagination = $pagination;
  }

  /**
   * Summary of setButton
   * @param array $buttons
   * @return void
   */
  public static function setButton(array $buttons)
  {
    self::$buttons = $buttons;
  }

  /**
   * Summary of setView
   * @param string $views
   * @return void
   */
  public static function setView(string $views)
  {
    self::$views = $views;
  }

  /**
   * Summary of setNumberIteration
   * @param string $label
   * @param bool $enable
   * @return void
   */
  public static function setNumberIteration(string $label, bool $enable)
  {
    self::$iterations['label'] = $label;
    self::$iterations['enable'] = $enable;
  }

  /**
   * Summary of filterQuery
   * @param \Closure|null $callback
   * @return void
   */
  public static function filterQuery(Closure $callback = null)
  {
    if (is_callable($callback)) {
      self::$filterCallback = $callback;
    }
  }

  /**
   * Summary of applyFilterQuery
   * @param mixed $query
   */
  protected static function applyFilterQuery($query)
  {
    if (is_callable(self::$filterCallback)) {
      call_user_func(self::$filterCallback, $query);
    }

    return $query;
  }

  /**
   * Summary of sortQuery
   * @param \Closure|null $callback
   * @return void
   */
  public static function sortQuery(Closure $callback = null)
  {
    if (is_callable($callback)) {
      self::$sortCallback = $callback;
    }
  }

  /**
   * Summary of applySortQuery
   * @param mixed $query
   */
  protected static function applySortQuery($query)
  {
    if (is_callable(self::$sortCallback)) {
      call_user_func(self::$sortCallback, $query);
    }

    return $query;
  }

  /**
   * Summary of query
   */
  protected static function query()
  {
    $model = self::$model;
    $columns = Schema::getColumnListing($model->getTable());
    $selectFields = array_keys(collect(self::$columns)->toArray());
    $selectFields = array_merge(['id'], $selectFields);
    $query = $model::select($columns);

    $query = self::applyFilterQuery($query);
    $query = self::applySortQuery($query);

    $paginated = $query->paginate(self::$perpage)->appends(request()->except('page'));

    if ($paginated->currentPage() > $paginated->lastPage()) {
      request()->merge(['page' => $paginated->lastPage()]);
      $paginated = $query->paginate(self::$perpage)->appends(request()->except('page'));
    }

    $paginated->getCollection()->transform(function ($q) {
      return self::setManipulationColumns($q);
    });

    return $paginated;
  }
  /**
   * Summary of setManipulationColumns
   * @param mixed $q
   * @param \Closure|null $callback
   */
  public static function setManipulationColumns($q = null, Closure $callback = null)
  {
    if ($callback) {
      self::$manipulationCallback = $callback;
    } elseif (is_callable(self::$manipulationCallback)) {
      $q = call_user_func(self::$manipulationCallback, $q);
    }

    return $q;
  }


  /**
   * Summary of getArray
   * @return array{columns: array, iterations: array, pagination: array, perpage: int, views: string}
   */
  public static function getArray()
  {
    return [
      'views' => self::$views,
      'iterations' => self::$iterations,
      'columns' => self::$columns,
      'perpage' => self::$perpage,
      'pagination' => self::$pagination,
      'query' => self::query(),
      'buttons' => self::$buttons
    ];
  }
}
