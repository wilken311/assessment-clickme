<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class Counter extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'count'
    ];

      /*
      Counters table is belong to Users table.
      Has one to one inverse relationship.
      Has a foriegn key of user_id.
      */
      public function user()
      {
          return $this->belongsTo('App\User','user_id');
      }
}
