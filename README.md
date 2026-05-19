<div align="center">

# ✨ Lumeo — AI-Powered Text to Image Generator

### Type a prompt. Watch your imagination come to life.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-lumeo--text--to--image.vercel.app-black?style=for-the-badge)](https://lumeo-text-to-image-generator.vercel.app/)
[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 📌 Overview

**Lumeo** is an AI-powered Text-to-Image Generator that transforms text prompts into stunning, high-quality visuals in seconds. No design skills required — just describe your idea, and Lumeo brings it to life.

Built as a full-stack MERN application with JWT authentication, a React frontend powered by Vite, and a Node/Express backend that integrates an external AI image generation API.

---

## ✨ Features

- 🔐 **User Authentication** — Secure register & login with JWT + bcrypt password hashing
- 🎨 **AI Image Generation** — Enter any text prompt and generate a unique AI image instantly
- 📥 **Download Images** — Save any generated image directly to your device
- 🔔 **Toast Notifications** — Real-time feedback for all user actions
- 💫 **Smooth Animations** — Fluid transitions and UI interactions via Motion
- 📱 **Fully Responsive** — Works seamlessly across all screen sizes

---

## 🛠️ Tech Stack

**Frontend**

| Tech | Purpose |
|---|---|
| React 18 + Vite | UI framework & fast dev server |
| Tailwind CSS | Utility-first styling |
| React Router DOM | Client-side routing |
| Axios | API communication |
| Motion | Animations & transitions |
| React Toastify | Toast notifications |

**Backend**

| Tech | Purpose |
|---|---|
| Node.js + Express | Server & REST API |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication tokens |
| Bcrypt | Password hashing |
| Dotenv | Environment variable management |
| CORS | Cross-origin request handling |
| Nodemon | Dev auto-restart |

---

## 📂 Project Structure

```
Lumeo-text-to-image-generator/
│
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route-level pages
│   │   ├── context/            # Auth context / state
│   │   └── assets/             # Static assets
│   └── package.json
│
├── server/                     # Node.js + Express backend
│   ├── controllers/            # Route handler logic
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Auth middleware
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- An AI Image Generation API key (e.g. [ClipDrop](https://clipdrop.co/apis) / [Stability AI](https://stability.ai/) / [OpenAI DALL·E](https://platform.openai.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/Gauri-Nagariya/Lumeo-text-to-image-generator.git
cd Lumeo-text-to-image-generator
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIPDROP_API_KEY=your_ai_image_api_key
```

```bash
npm run server
```

Backend runs on [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file inside `/client`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

```bash
npm run dev
```

Frontend runs on [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Overview

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/user/register` | Register a new user |
| `POST` | `/api/user/login` | Login and receive JWT |
| `GET` | `/api/user/credits` | Get user's remaining credits |
| `POST` | `/api/image/generate-image` | Generate image from text prompt |

---

## 🔮 How It Works

```
User enters a text prompt
        ↓
Frontend sends prompt to Express backend via Axios
        ↓
Backend authenticates request (JWT middleware)
        ↓
Backend forwards prompt to AI Image Generation API
        ↓
API returns generated image URL
        ↓
Frontend displays the image — ready to download!
```

---

## 📬 Contact

**Gauri Nagariya** — Full-Stack / MERN Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Gauri%20Nagariya-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/gauri-nagariya/)
[![GitHub](https://img.shields.io/badge/GitHub-Gauri--Nagariya-181717?style=flat&logo=github)](https://github.com/Gauri-Nagariya)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-ff69b4?style=flat&logo=vercel)](https://gaurinagariyaportfolio.vercel.app/)

---

<div align="center">
  <sub>Built with ❤️ by Gauri Nagariya &nbsp;|&nbsp; ⭐ Star this repo if you like it!</sub>
</div>