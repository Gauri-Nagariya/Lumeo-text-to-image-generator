 <h1>AI-Powered Text to Image Generator</h1>

        <h2>Project Overview</h2>
        <p>Our AI-powered Text-to-Image Generator is a cutting-edge tool that transforms your imagination into reality. Simply describe your vision in words, and our intelligent engine instantly transforms it into a high-quality, visually stunning image.</p>
        <p>This application is perfect for designers, creators, or anyone looking to explore their creativity. It requires no design skills—just type your idea, watch the magic happen, and download or share your masterpiece in seconds.</p>

        <hr class="section-divider">

        <h2>Technology Stack</h2>
        <p>This project is built using a modern and robust technology stack, separating the frontend and backend for a scalable and maintainable architecture.</p>

        <h3>Frontend</h3>
        <ul>
            <li><strong>React:</strong> A powerful JavaScript library for building the user interface.</li>
            <li><strong>React Router DOM:</strong> Manages navigation and routing within the application.</li>
            <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid and consistent styling.</li>
            <li><strong>Vite:</strong> A fast build tool that provides a rapid development environment.</li>
            <li><strong>Axios:</strong> A promise-based HTTP client for making API requests to the backend.</li>
            <li><strong>Motion:</strong> A library for creating smooth, production-ready animations.</li>
            <li><strong>React Toastify:</strong> Provides an easy way to add toast notifications to the application.</li>
        </ul>

        <h3>Backend</h3>
        <ul>
            <li><strong>Node.js & Express:</strong> The foundation of the server, providing a fast and unopinionated web framework.</li>
            <li><strong>MongoDB & Mongoose:</strong> A flexible NoSQL database and an elegant object data modeling (ODM) library for managing data.</li>
            <li><strong>Bcrypt:</strong> A library used for hashing passwords to ensure user security.</li>
            <li><strong>JWT (JSON Web Token):</strong> Used for secure user authentication and authorization.</li>
            <li><strong>CORS:</strong> Enables Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.</li>
            <li><strong>Nodemon:</strong> Automatically restarts the server during development, improving workflow efficiency.</li>
            <li><strong>Razorpay:</strong> A secure payment gateway for handling transactions.</li>
            <li><strong>Dotenv:</strong> Manages environment variables, keeping sensitive information secure.</li>
        </ul>

        <hr class="section-divider">

        <h2>Getting Started</h2>
        <p>To run this project locally, follow these steps.</p>

        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js installed on your machine.</li>
            <li>MongoDB instance running (local or cloud-based).</li>
        </ul>

        <h3>Installation</h3>
        <p>1. <strong>Clone the repository:</strong></p>
        <pre><code>git clone &lt;repository_url&gt;</code></pre>

        <p>2. <strong>Navigate to the client directory and install dependencies:</strong></p>
        <pre><code>cd client<br>npm install</code></pre>

        <p>3. <strong>Navigate to the server directory and install dependencies:</strong></p>
        <pre><code>cd ../server<br>npm install</code></pre>

        <h3>Running the Application</h3>
        <p>1. <strong>Start the backend server:</strong></p>
        <pre><code>cd server<br>npm run server</code></pre>
        <p>The server will run on <code>http://localhost:5000</code> (or the port specified in your <code>.env</code> file).</p>

        <p>2. <strong>Open a new terminal, navigate to the client directory, and start the frontend:</strong></p>
        <pre><code>cd client<br>npm run dev</code></pre>
        <p>The frontend will be accessible at <code>http://localhost:5173</code> (or the port specified by Vite).</p>
