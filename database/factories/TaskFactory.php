<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $taskStatus = ['todo', 'in-progress', 'blocked', 'completed'];
        $randomIndex = array_rand($taskStatus);

        return [
            'title' => fake()->sentence(rand(1, 5)),
            'description' => fake()->sentences(3, true),
            'status' => $taskStatus[$randomIndex],
            'user_id' => User::inRandomOrder()->first()
        ];
    }
}