<h1>My Express Node.js API Documentation</h1>
Welcome to the documentation for the My Express Node.js API. This API provides CRUD functionality and user authentication using Express and Node.js. Below, you will find details on how to install, configure, and use this API effectively.

Table of Contents
- Introduction
- Installation
- Configuration
- Database
- Main Application File (app.js)
- Utils File
- Authentication Route (authRoutes.js)
- User Route (userRoutes.js)
- User Model (userModel.js)
- Authentication Middleware (authMiddleware.js)
- Authentication Controller (authController.js)
- User Controller (userControllers.js)
- Database Connection File (database.js)
- Usage Examples
- Error Handling
- Security Considerations
- Testing
- Contributing

<h2>Introduction</h2>
The My Express Node.js API is designed to provide a simple and secure way to perform CRUD operations on user data. It also includes user authentication features for secure access to the API.

<h2>Installation</h2>
To get started with the My Express Node.js API, follow these steps:

Clone the repository: git clone https://github.com/your-username/your-repo.git
Navigate to the project directory: cd your-repo
Install dependencies: npm install
Configuration
The API uses environment variables for configuration. Create a .env file in the root directory and define the following variables:

env
Copy code
PORT=3000
MONGO_URI=get-this-from-mongodb
JWT_SECRET=your-secret-key
Adjust the values based on your preferences and environment.

<h2>Database</h2>
The MongoDB database is utilized for storing user data. Ensure that you have MongoDB installed and running. The connection URI should be specified in the .env file.

<h2>Main Application File (app.js)</h2>
The app.js file serves as the entry point for the application. It sets up the Express server, middleware, and routes. Key functionalities include:

Parsing JSON and URL-encoded data.
Cookie parsing.
Routing for authentication and user operations.
Utils File
The utils.js file contains utility functions used throughout the application:

setJwtCookie: Sets a JWT token as an HTTP-only cookie.
handleServerError: Handles internal server errors and returns a standard response.
Authentication Route (authRoutes.js)
The authentication routes are defined in this file. Key endpoints include:

POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate and log in a user.
POST /api/auth/logout: Log out the authenticated user.
User Route (userRoutes.js)
The user routes handle CRUD operations for user data. Key endpoints include:

GET /api/users: Retrieve all users.
GET /api/users/:id: Retrieve a user by ID.
PATCH /api/users/:id: Update a user's information.
DELETE /api/users/:id: Delete a user.
User Model (userModel.js)
The User model defines the structure of user data in the database. Fields include:

email: User's email address (unique).
name: User's name.
password: Hashed user password.
Authentication Middleware (authMiddleware.js)
The authentication middleware (authMiddleware.js) ensures secure access to protected routes. It verifies the presence and validity of a JWT token.

Authentication Controller (authController.js)
The authentication controllers handle user registration, login, and logout:

register: Create a new user account.
login: Authenticate and log in a user.
logout: Log out the authenticated user.
User Controller (userControllers.js)
The user controllers handle CRUD operations for user data:

getUsers: Retrieve all users.
getUsersById: Retrieve a user by ID.
updateUser: Update a user's information.
deleteUser: Delete a user.
Database Connection File (database.js)
The database.js file establishes a connection to the MongoDB database. Ensure the correct URI is provided in the .env file.

Usage Examples
Use tools like curl or Postman to interact with the API. Below are some usage examples:

bash
Copy code
# Example: Register a new user
curl -X POST -H "Content-Type: application/json" -d '{"email": "user@example.com", "name": "John Doe", "password": "secretpassword"}' http://localhost:3000/api/auth/register
Error Handling
The API provides standardized error responses for common scenarios. HTTP status codes and meaningful error messages are used for clarity.

Security Considerations
The API implements secure practices, including password hashing and JWT-based authentication. Ensure sensitive information like secret keys is kept confidential.

Testing
Testing is crucial for maintaining a robust API. Consider implementing unit tests, integration tests, or using tools like Postman to ensure functionality and security.

Contributing
Contributions are welcome! Fork the repository, create a branch, make your changes, and submit a pull request. Please adhere to the project's coding standards.
