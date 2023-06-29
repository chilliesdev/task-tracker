<?php

namespace App\Http\Controllers;

use App\Enums\TaskStatusEnum;
use App\Http\Requests\TaskStoreRequest;
use App\Http\Requests\TaskUpdateRequest;
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Validator;

class TaskController extends Controller
{
    /**
     * Get all tasks and related user.
     * @return JsonResponse
     * @param array $tasks The list of tasks.
     * @throws \Exception When an error occurs.
     */
    public function index(): JsonResponse
    {
        // get all tasks and related user
        $tasks = Task::with('user')->get();

        return $this->sendResponse('success', $tasks);
    }

    /**
     * Stores a new task.
     * The task will be created by the authenticated user.
     * @param TaskStoreRequest $request The validated request object.
     * @return JsonResponse The response object.
     */
    public function store(TaskStoreRequest $request): JsonResponse
    {
        // Validate the request data.
        $validated = $request->validated();

        // Only allow the title, description, and status fields to be passed in.
        $validated = $request->safe()->only(['title', 'description', 'status']);

        $task = Task::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'status' => $validated['status'],
            'user_id' => auth()->user()->id
        ]);

        return $this->sendResponse('success', $task, 201);
    }

    /**
     * Returns a task and related user by ID.
     *
     * @param string $id The ID of the task to show.
     * @return JsonResponse The task data as a JSON object.
     * @throws NotFoundHttpException If the task is not found.
     */
    public function show(string $id): JsonResponse
    {
        // get task and related user
        $task = Task::with('user')->find($id);

        if (!$task) {
            return $this->sendError("Task not found", [], 404);
        }

        return $this->sendResponse('success', $task);
    }

    /**
     * Updates a task.
     *
     * @param TaskUpdateRequest $request The request object containing the validated updated task data.
     * @param string $id The ID of the task to update.
     *
     * @return JsonResponse The task data as a JSON object.
     * @throws NotFoundHttpException If the task could not be found or updated.
     */
    public function update(TaskUpdateRequest $request, string $id): JsonResponse
    {
        // Validate the request data.
        $validated = $request->validated();

        // Only allow the title, description, and status fields to be passed in.
        $validated = $request->safe()->only(['title', 'description', 'status']);

        // Find the task.
        $task = Task::find($id);

        if (!$task)
            return $this->sendError("Task not found", [], 404);

        // Update the task.
        $task = $task->update($validated);

        // Return the updated task.
        return $this->sendResponse('success', $task);
    }

    /**
     * Deletes a task by its ID.
     *
     * @param string $id The ID of the task to delete.
     *
     * @return JsonResponse
     *
     * @throws NotFoundHttpException If the task could not be destroyed.
     */
    public function destroy(string $id): JsonResponse
    {
        // Check if the task exists.
        if (!Task::exists($id))
            return $this->sendError("Task not found", [], 404);

        // Check if the task exists.
        Task::destroy($id);

        return $this->sendResponse('success');
    }
}