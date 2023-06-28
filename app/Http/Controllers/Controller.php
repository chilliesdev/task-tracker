<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\JsonResponse;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * Send a successful response.
     *
     * @param string $message The message describing the response.
     * @param mixed $result The data to be included in the response.
     * @param int $statusCode The HTTP status code for the response (default: 200).
     * @return \Illuminate\Http\JsonResponse The JSON response containing the success status, data, and message.
     */
    public function sendResponse(string $message, $data = null, $statusCode = 200)
    {
        $response = [
            'success' => true,
            'data' => $data,
            'message' => $message,
        ];

        return response()->json($response, $statusCode);
    }

    /**
     * Send an error response.
     *
     * @param string $error The error message.
     * @param array $errorMessages Additional error messages or data (default: []).
     * @param int $code The HTTP status code for the error (default: 404).
     * @return \Illuminate\Http\JsonResponse The JSON response containing the error status, message, and data (if provided).
     */
    public function sendError($error, $errorMessages = [], $code = 400)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }


    /**
     * Responds with a JSON object containing a response message, data, and an access token.
     *
     * @param string $responseMessage The response message to include in the JSON object.
     * @param mixed $data The data to include in the JSON object.
     * @return \Illuminate\Http\JsonResponse The JSON response object containing the response message, data, and access token.
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function responseWithToken(string $responseMessage, mixed $data): JsonResponse
    {
        // Create an access token for the authenticated user
        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return \response()->json([
            "success" => true,
            "message" => $responseMessage,
            "data" => $data,
            // The data returned by the function.
            "token" => $accessToken,
            // The access token generated for the authenticated user.
            "token_type" => "bearer", // The type of token (e.g., bearer).
        ], 200);
    }

}