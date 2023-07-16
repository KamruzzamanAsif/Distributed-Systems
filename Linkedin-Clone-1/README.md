# LinkedIn Backend: From Monolith to Microservices

## Goal
The goal of this project is to build a monolithic web-based system and then break it down into microservices following the microservice architecture.

## Architecture
The system will consist of a client, server, and database. The client will have a registration page, login page, home page, and notification page. The server will have APIs for registration, login, post creation and retrieval, and notification creation and retrieval. The database will be an object DB.

## Requirements
### Client Requirements
The client UI will have the following routes:
- Registration page
- Login page
- Home page: should show a vertical list of posts (texts/images)
- Notification page: should show notifications of recent posts

### Server requirements
The server should have the following endpoints:
- `/register` endpoint for creating new users. Users should register with email and password.
- `/login` endpoint for logging in (with JWT). Users should log in with email and password.
- `/post` endpoint for creating and retrieving posts. 
  - `GET`: Get latest posts of all users except logged in user.
  - `POST`: Create new posts for user.
- `/notification` endpoint for creating and retrieving notifications.
  - `GET`: Get notifications.
  - `POST`: Create notification against a post.

### Jobs
- Notification cleaner: A job should periodically check for old notifications and delete them.

### System Assumptions
- All users are friends/connected by default.
- The system needs no other services (e.g. chat, comments, reacts).

### Other Instructions
- Images uploaded for posts should be stored in an object store database (MinIO).
- You may use any programming language. However, Node.js or Python or Go is recommended.
- Frameworks/libraries can be used. However, using frameworks (like express/flask/fastapi/gin) will make the assignment easier.
- Using a framework on the frontend can be useful (angular/vue/react).
- You can use any database. Mongo recommended.
- Don’t implement extra features. Because, distributing them in multiple instances could turn out to be a problem later.