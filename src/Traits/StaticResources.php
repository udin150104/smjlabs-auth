<?php
namespace Smjlabs\Core\Traits;

use Illuminate\Http\Request;

trait StaticResources
{
  /**
   * Summary of index
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Contracts\View\View
   */
  public function index(Request $request)
  {

    $grid = $this->grid($request)->getArray();
    $views = $grid['views'] ;
    $data = $grid;
    unset($data['views']);
    $data['title'] = $this->title;
    $data['breadcrumb'] = $this->breadcrumbs();
    // dd($grid, $data);

    return view($views,$data);
  }

  /**
   * Summary of create
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Contracts\View\View
   */
  public function create(Request $request)
  {
    
    $data = $this->form($request);

    $views = $data['views'];
    $data['type'] = 'create';

    return view($views,$data);
  }

  /**
   * Summary of edit
   * @param \Illuminate\Http\Request $request
   * @param mixed $id
   * @return \Illuminate\Contracts\View\View
   */
  public function edit(Request $request,$id)
  {
    $data = $this->form($request,$id);

    $views = $data['views'];
    $data['type'] = 'edit';

    return view($views,$data);
  }
  /**
   * Summary of generateUrlWithRequest
   * @param string $routename
   * @param array $params
   * @return string
   */
  protected function generateUrlWithRequest(string $routename, array $params = [])
  {
    $url = route($routename,$params);
    $urlquery = request()->query();
    $fullUrlWith4request = count($urlquery) ? $url . '?' . http_build_query($urlquery) : $url;

    return $fullUrlWith4request;
  }  
}
