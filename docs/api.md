# API Documentation

Base URL for API endpoints is 'api/mentor' or 'api/student'

Endpoints

Endpoint: POST /create

Input:

    {
        "email": "string (valid email format)",
        "firstName": "string (minimum 1 character)",
        "lastName": "string (minimum 1 character)",
        "industry": "string (minimum 1 character)",
        "role": "string (minimum 1 character)",
        "available": "boolean"
    }

Response:

Returns the created mentor object.
Update a Mentor
Updates an existing mentor record in the database.

Endpoint: POST /update

Input:

{
    "email": "string (valid email format)",
    "firstName": "string (minimum 1 character, optional)",
    "lastName": "string (minimum 1 character, optional)",
    "industry": "string (minimum 1 character, optional)",
    "role": "string (minimum 1 character, optional)",
    "available": "boolean (optional)"
}

Response:

Returns the updated mentor object.
Delete a Mentor
Deletes a mentor record from the database.

Endpoint: POST /delete

Input:

{
  "email": "string (valid email format)"
}

Response:

Returns the deleted mentor object.
Get All Mentors
Fetches all mentor records from the database.

Endpoint: GET /getAll

Response:

Returns an array of mentor objects.
Get Latest Mentor
Fetches the latest created mentor record from the database.

Endpoint: GET /getLatest

Response:

Returns the most recently created mentor object.

Get All Mentors

Request:

GET /getAll

Response:

All mentor objects

# Student API

Base URL
The base URL for all API endpoints is /api/student.

Endpoints
Create a Student
Creates a new student record in the database.

Endpoint: POST /create

Input:

{
  "email": "string (valid email format)",
  "firstName": "string (minimum 1 character)",
  "lastName": "string (minimum 1 character)",
  "major": "string (minimum 1 character)"
}

Response:

Returns the created student object.
Update a Student
Updates an existing student record in the database.

Endpoint: POST /update

Input:

{
  "email": "string (valid email format)",
  "firstName": "string (minimum 1 character, optional)",
  "lastName": "string (minimum 1 character, optional)",
  "major": "string (minimum 1 character, optional)"
}

Response:

Returns the updated student object.
Delete a Student
Deletes a student record from the database.

Endpoint: POST /delete

Input:

{
  "email": "string (valid email format)"
}

Response:

Returns the deleted student object.
Get All Students
Fetches all student records from the database.

Endpoint: GET /getAll

Response:

Returns an array of student objects.
Get Latest Student
Fetches the latest created student record from the database.

Endpoint: GET /getLatest

Response:

Returns the most recently created student object.

Example Requests

Create a Student

Request:

POST /create
{
  "email": "jane.doe@example.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "major": "Computer Science"
}

Response:

{
  "email": "jane.doe@example.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "major": "Computer Science",
  "createdAt": "2024-05-28T12:34:56.789Z",
  "updatedAt": "2024-05-28T12:34:56.789Z"
}

Update a Student

Request:

POST /update
{
  "email": "jane.doe@example.com",
  "firstName": "Janet",
  "major": "Data Science"
}

{
  "email": "jane.doe@example.com",
  "firstName": "Janet",
  "lastName": "Doe",
  "major": "Data Science",
  "createdAt": "2024-05-28T12:34:56.789Z",
  "updatedAt": "2024-05-28T12:45:00.123Z"
}

Delete a Student

Request:

POST /delete
{
  "email": "jane.doe@example.com"
}

Response:

{
  "email": "jane.doe@example.com",
  "firstName": "Janet",
  "lastName": "Doe",
  "major": "Data Science",
  "createdAt": "2024-05-28T12:34:56.789Z",
  "updatedAt": "2024-05-28T12:45:00.123Z"
}

Get All Students

Request:

GET /getAll

Response:

[
  {
    "email": "jane.doe@example.com",
    "firstName": "Janet",
    "lastName": "Doe",
    "major": "Data Science",
    "createdAt": "2024-05-28T12:34:56.789Z",
    "updatedAt": "2024-05-28T12:45:00.123Z"
  },
  ...
]


Error Handling

All endpoints return standard HTTP error codes. Example:

400 Bad Request: Invalid input.
404 Not Found: Student not found.
500 Internal Server Error: Server error.


