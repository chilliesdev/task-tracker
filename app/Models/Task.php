<?php

namespace App\Models;

use App\Enums\TaskStatusEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'status',
        'user_id'
    ];

    protected $casts = [
        'status' => TaskStatusEnum::class
    ];

    /**
     * Get the user associated with the task.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}