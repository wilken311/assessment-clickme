<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Counter extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'count'
    ];
}
