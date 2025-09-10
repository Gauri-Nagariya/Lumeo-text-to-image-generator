AI-Powered Text to Image Generator <br>
Project Overview
Our AI-powered Text-to-Image Generator is a cutting-edge tool that transforms your imagination into reality. Simply describe your vision in words, and our intelligent engine instantly transforms it into a high-quality, visually stunning image.

This application is perfect for designers, creators, or anyone looking to explore their creativity. It requires no design skills—just type your idea, watch the magic happen, and download or share your masterpiece in seconds.

Technology Stack
This project is built using a modern and robust technology stack, separating the frontend and backend for a scalable and maintainable architecture.

Frontend
React: A powerful JavaScript library for building the user interface.

React Router DOM: Manages navigation and routing within the application.

Tailwind CSS: A utility-first CSS framework for rapid and consistent styling.

Vite: A fast build tool that provides a rapid development environment.

Axios: A promise-based HTTP client for making API requests to the backend.

Motion: A library for creating smooth, production-ready animations.

React Toastify: Provides an easy way to add toast notifications to the application.

Backend
Node.js & Express: The foundation of the server, providing a fast and unopinionated web framework.

MongoDB & Mongoose: A flexible NoSQL database and an elegant object data modeling (ODM) library for managing data.

Bcrypt: A library used for hashing passwords to ensure user security.

JWT (JSON Web Token): Used for secure user authentication and authorization.

CORS: Enables Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.

Nodemon: Automatically restarts the server during development, improving workflow efficiency.

Razorpay: A secure payment gateway for handling transactions.

Dotenv: Manages environment variables, keeping sensitive information secure.

Getting Started
To run this project locally, follow these steps.

Prerequisites
Node.js installed on your machine.

MongoDB instance running (local or cloud-based).

Installation
Clone the repository:

Bash

git clone <repository_url>
Navigate to the client directory and install dependencies:

Bash

cd client
npm install
Navigate to the server directory and install dependencies:

Bash

cd ../server
npm install
Running the Application
Start the backend server:

Bash

cd server
npm run server
The server will run on http://localhost:5000 (or the port specified in your .env file).

Open a new terminal, navigate to the client directory, and start the frontend:

Bash

cd client
npm run dev
The frontend will be accessible at http://localhost:5173 (or the port specified by Vite).
