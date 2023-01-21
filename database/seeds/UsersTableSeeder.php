<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users=[
                [
                    'name' => 'Wilken Montero',
                    'email' => 'monterowilken311@gmail.com',
                    'password' => bcrypt('12345678'),
                    'created_at' => Carbon::now(),
                ]
            ];

        DB::table('users')->insert($users);        
        $this->command->info('Users table seeded!');
    }
}
