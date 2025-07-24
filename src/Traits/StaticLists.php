<?php
namespace Smjlabs\Core\Traits;

use Illuminate\Http\Request;
use Smjlabs\Core\Http\Helpers\Permission;

trait StaticLists
{

  public function index(Request $request)
  {
    if(Permission::can($this->menulabel,$this->access['index']) !== true ){
      abort(403);
    }

    $data = $this->grid($request);

    $views = $data['views'];

    return view($views,$data);
  }

  public function create(Request $request)
  {
    if(Permission::can($this->menulabel,$this->access['create']) !== true ){
      abort(403);
    }
    
    $data = $this->form($request);

    $views = $data['views'];
    $data['type'] = 'create';

    return view($views,$data);
  }

  public function edit(Request $request,$id)
  {
    if(Permission::can($this->menulabel,$this->access['edit']) !== true ){
      abort(403);
    }
    $data = $this->form($request,$id);

    $views = $data['views'];
    $data['type'] = 'edit';

    return view($views,$data);
  }


  
}
