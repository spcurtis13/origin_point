# tRPC API Documentation for student/mentor router pages

Overview

This documentation provides detailed information on the student router and mentorRouter API, which is built using tRPC for managing student and mentor records. Each endpoint allows for creating, updating, deleting, and fetching corresponding records. The first section is for student router and the second is for mentor router.

Endpoints

Create a Student
Creates a new student record in the database.

Endpoint: 'create'

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

Endpoint: 'update'

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

Endpoint: 'delete'

Input:

    {
    "email": "string (valid email format)"
    }

Response:

Returns the deleted student object.
Get All Students
Fetches all student records from the database.

Endpoint: 'getAll'

Response:

Returns an array of student objects.
Get Latest Student
Fetches the latest created student record from the database.

Endpoint: 'getLatest'

Response:

Returns the most recently created student object.

Example Requests

Create a Student
Request:

    const response = await trpc.studentRouter.create.mutate({
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    major: "Computer Science"
    });

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

    const response = await trpc.studentRouter.update.mutate({
    email: "jane.doe@example.com",
    firstName: "Janet",
    major: "Data Science"
    });

Response:

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

    const response = await trpc.studentRouter.delete.mutate({
    email: "jane.doe@example.com"
    });

Response:

    {
    "email": "jane.doe@example.com",
    "firstName": "Janet",
    "lastName": "Doe",
    "major": "Data Science",
    "createdAt": "2024-05-28T12:34:56.789Z",
    "updatedAt": "2024-05-28T12:45:00.123Z"
    }

Endpoints

Create a Mentor
Creates a new mentor record in the database.

Endpoint: 'create'

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

Endpoint: 'update'

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

Endpoint: 'delete'

Input:

    {
    "email": "string (valid email format)"
    }

Response:

Returns the deleted mentor object.
Get All Mentors
Fetches all mentor records from the database.

Endpoint: getAll

Response:

Returns an array of mentor objects.
Get Latest Mentor
Fetches the latest created mentor record from the database.

Endpoint: getLatest

Response:

Returns the most recently created mentor object.
Example Requests
Create a Mentor

Request:

    const response = await trpc.mentorRouter.create.mutate({
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    industry: "Software Development",
    role: "Senior Developer",
    available: true
    });

Response:

    {
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "industry": "Software Development",
    "role": "Senior Developer",
    "available": true,
    "createdAt": "2024-05-28T12:34:56.789Z",
    "updatedAt": "2024-05-28T12:34:56.789Z"
    }

Update a Mentor

Request:

    const response = await trpc.mentorRouter.update.mutate({
    email: "john.doe@example.com",
    firstName: "Johnny",
    available: false
    });

    {
    "email": "john.doe@example.com",
    "firstName": "Johnny",
    "lastName": "Doe",
    "industry": "Software Development",
    "role": "Senior Developer",
    "available": false,
    "createdAt": "2024-05-28T12:34:56.789Z",
    "updatedAt": "2024-05-28T12:45:00.123Z"
    }

Delete a Mentor

Request:

    const response = await trpc.mentorRouter.delete.mutate({
    email: "john.doe@example.com"
    });

Response:

    {
    "email": "john.doe@example.com",
    "firstName": "Johnny",
    "lastName": "Doe",
    "industry": "Software Development",
    "role": "Senior Developer",
    "available": false,
    "createdAt": "2024-05-28T12:34:56.789Z",
    "updatedAt": "2024-05-28T12:45:00.123Z"
    }

Get All Mentors

Request:

const response = await trpc.mentorRouter.getAll.query();

Response:

    [
    {
        "email": "john.doe@example.com",
        "firstName": "Johnny",
        "lastName": "Doe",
        "industry": "Software Development",
        "role": "Senior Developer",
        "available": false,
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

