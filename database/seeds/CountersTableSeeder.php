<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as Carbon;

class CountersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $counters=[
            [
                'user_id' => '1',
                'count' => '0',
                'created_at' => Carbon::now(),
            ]
        ];

    DB::table('counters')->insert($counters);        
    $this->command->info('Counters table seeded!');
    }
}
