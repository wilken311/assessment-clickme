<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Counter;
use App\User;
use Carbon\Carbon;

class CounterTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_counter_response_successful()
    {
        $response = $this->get('/counter');
        $response->assertStatus(200);
    }

    public function test_create_counter_successful()
    {
        $newCounterData = [
            "id" => 1,
            "user_id" => 1,
            "count" => 1,
            "created_at" => Carbon::today()
        ];

         $this->json('POST', '/counter', $newCounterData, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure([
                "message",
                "success"
            ]);
    }

    public function test_update_counter_successful()
    {

        $updatedCounterData = [
            "id" => 1,
            "user_id" => 1,
            "count" => 2,
            "created_at" => Carbon::today()
        ];

         $this->json('PUT', "/counter/1", $updatedCounterData, ['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure([
                "message",
                "success"
            ]);
    }
    

}
