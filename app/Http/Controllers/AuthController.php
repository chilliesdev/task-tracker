<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class AuthController extends Controller
{
    /**
     * Registers a new user.
     *
     * @param Request $request The request object.
     * @return JsonResponse The response object.
     * @throws \Illuminate\Validation\ValidationException If the request is invalid.
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 400);
        }

        // insert into the database
        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        return $this->sendResponse("Registration Successful");
    }

    /**
     * Log in a user.
     *
     * @param \Illuminate\Http\Request $request The HTTP request object.
     * @return \Illuminate\Http\JsonResponse The JSON response.
     */
    public function login(Request $request): JsonResponse
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->messages()->toArray());
        }

        // Retrieve credentials from the request
        $credentials = $request->only(["email", "password"]);

        // Find the user by email
        $user = User::where('email', $credentials['email'])->first();

        // Check if user exists
        if (!$user)
            return $this->sendError("Sorry, this user does not exist");

        // Attempt to authenticate the user
        if (!auth()->attempt($credentials))
            return $this->sendError("Invalid username or password");

        // Return the JSON response with the access token and user details
        return $this->responseWithToken("Login Successful", auth()->user());
    }

    /**
     * Retrieve the user's profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user(): JsonResponse
    {
        // Get the currently authenticated user.
        $user = auth('api')->user();

        return $this->sendResponse("user profile", $user);
    }

    /**
     * Logout the user and revoke the authentication token.
     * @return \Illuminate\Http\JsonResponse
     * */
    public function logout()
    {
        auth("api")->user()->token()->revoke();

        return $this->sendResponse("successfully logged out");
    }
}