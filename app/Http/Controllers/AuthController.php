<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthLoginRequest;
use App\Http\Requests\AuthRegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param \App\Http\Requests\AuthRegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(AuthRegisterRequest $request): JsonResponse
    {
        // Validate the request data.
        $validated = $request->validated();

        // Only allow the name, email, and password fields to be passed in.
        $validated = $request->safe()->only(['name', 'email', 'password']);

        // Hash the password.
        $validated['password'] = Hash::make($validated['password']);

        // Create the user.
        User::create($validated);

        // Return a success message.
        return $this->sendResponse("Registration Successful");
    }


    /**
     * @param \App\Http\Requests\AuthLoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     *
     * This function logins a user by validating their email and password.
     * If the user does not exist, an error is returned.
     * If the credentials are invalid, an error is returned.
     * If the login is successful, a JSON response is returned with the user's token.
     */
    public function login(AuthLoginRequest $request): JsonResponse
    {
        // Retrieve credentials from the request
        $credentials = $request->validated();
        $credentials = $request->safe()->only(["email", "password"]);

        // Get the user by email
        $user = User::where('email', $credentials['email'])->first();

        // If the user does not exist, return an error
        if (!$user) {
            return $this->sendError("Sorry, this user does not exist", [], 422);
        }

        // Attempt to log the user in
        if (!auth()->attempt($credentials)) {
            return $this->sendError("Invalid username or password");
        }

        // Return a JSON response with the user's token
        return $this->responseWithToken("Login Successful", auth()->user());
    }


    /**
     * Retrieve the get the current user.
     * @return \Illuminate\Http\JsonResponse
     */
    public function user(): JsonResponse
    {
        // Get the user from the authentication guard.
        $user = auth('api')->user();

        // Return a JSON response with the user profile.
        return $this->sendResponse("user profile", $user);
    }

    /**
     * This function logs out the user from the API.
     * Logout the user and revoke the authentication token.
     * @return \Illuminate\Http\JsonResponse
     * */
    public function logout()
    {
        // Revoke the user's token.
        auth("api")->user()->token()->revoke();

        // Return a success message.
        return $this->sendResponse("successfully logged out");
    }
}