# 🔐 Secure File Sharing System

A modern and secure full-stack file sharing application that allows users to upload, manage, download, delete, and securely share files using unique shareable links.

## 🌐 Live Demo

🚀 Frontend (Vercel)

https://secure-file-sharing-system-five.vercel.app/

---

## 📌 Features

- 🔐 JWT Authentication (Login & Signup)
- 👤 User Registration & Login
- 📂 Secure File Upload
- 📥 File Download
- 🔗 Share Files using Public Links
- 📋 Copy Share Link
- 🟢 Share via WhatsApp
- 📧 Share via Email
- 🗑 Delete Uploaded Files
- 🔍 Search Uploaded Files
- 📊 Dashboard with File Statistics
- 🎨 Modern Responsive UI
- ☁️ Cloud Deployment

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📁 Project Structure

```
Secure-File-Sharing-System
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/rajat9473/secure-file-sharing-system.git
```

### Move into Project

```bash
cd secure-file-sharing-system
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Start Server

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
```

Create a `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Files

| Method | Endpoint |
|---------|----------|
| POST | /api/files/upload |
| GET | /api/files/my-files |
| DELETE | /api/files/:id |
| GET | /api/files/share/:id |

---

## Screenshots

### Home Page

<img width="100%" alt="Home" src="https://via.placeholder.com/1200x700?text=Home+Page">

---

### Dashboard

<img width="100%" alt="Dashboard" src="https://via.placeholder.com/1200x700?text=Dashboard">

---

## Security Features

- JWT Authentication
- Protected Routes
- Secure File Upload
- User-wise File Management
- Shareable Download Links
- MongoDB Atlas Cloud Database
- Password Encryption using bcrypt
- CORS Protection

---

## Future Enhancements

- Password Protected Share Links
- File Expiry Links
- Email Verification
- Forgot Password
- Download Analytics
- Cloud Storage (AWS S3 / Cloudinary)
- Drag & Drop Upload
- Upload Progress Bar
- File Preview

---

## Author

### Rajat Chitransh

GitHub

https://github.com/rajat9473

LinkedIn

https://www.linkedin.com/in/rajat-chitransh95/

---

## Repository

https://github.com/rajat9473/secure-file-sharing-system

---

## License

This project is licensed under the MIT License.

---

## ⭐ If you like this project

Please consider giving it a **Star ⭐** on GitHub.

It helps and motivates me to build more open-source projects.
