# Task Management Application (MERN)

A simple task management application built using the MERN stack that allows users to securely log in using hardcoded credentials and perform CRUD operations on their tasks.

## 📋 Objective

This project enables users to:
- Log in with hardcoded credentials.
- Create, Read, Update, and Delete (CRUD) their tasks.
- Securely access tasks tied to their session.

## 🛠️ Specifications

### 1. **User Authentication**
- **Credentials**: `username: admin` and `password: admin123`.
- Only logged-in users can access task features.

### 2. **Task Management Features**
- **Create**: Add tasks with a name, description, and due date.
- **Read**: View a list of tasks specific to the logged-in user.
- **Update**: Edit existing tasks.
- **Delete**: Remove tasks.

### 3. **Secure Access**
- CRUD operations are restricted to the tasks belonging to the logged-in user.

## 🖥️ Tech Stack

### Frontend:
- **React.js**: For building the user interface.
- **CSS**: For styling the application.

### Backend:
- **Node.js** and **Express.js**: For handling the server-side logic.
- **MongoDB**: For storing task data.

## 🚀 Features

- **User Authentication**: Simple login form with hardcoded credentials.
- **Task Management**: Fully functional CRUD operations.
- **Clean UI**: User-friendly interface for managing tasks.
- **Secure Access**: Ensures users can only access their tasks.

## 📦 Setup and Installation

1. Clone the repository.
2. Install dependencies:
- Backend:
  cd backend
  npm install
- Frontend:
  cd frontend
  npm install
3. Start the application:
- Backend:
  npm start
- Frontend:
  npm start
4. Open the app in your browser at http://localhost:3000.

## 📁 Folder Structure
```
task-management-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
```

## 💡 Future Improvements
- Implement dynamic user authentication and registration.
- Add role-based access controls.
- Improve UI/UX design with advanced styling frameworks.
- Deploy the app to a cloud service (e.g., Heroku, Vercel).
