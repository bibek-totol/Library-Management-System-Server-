# React + TypeScript + Vite

# 📚 Minimal Library Management System

A minimal yet fully functional library management system built using **React**, **TypeScript**, **Redux Toolkit Query**, and **Node.js/Express** with **MongoDB**. This project demonstrates core CRUD operations, borrowing functionality, and proper API state management—all without user authentication.

> ⚠️ No payment gateways, user login, or category filters are included. This system focuses purely on book and borrow functionality for demonstration or internal use.

---

## 🧾 Table of Contents

- [📚 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🔧 Configuration](#-configuration)
- [📦 API Integration](#-api-integration)
- [📄 Available Routes](#-available-routes)
- [🖼️ UI/UX Highlights](#️-uiux-highlights)
- [📊 Bonus Features](#-bonus-features)
- [📁 Folder Structure](#-folder-structure)
- [🧪 Examples & Screenshots](#-examples--screenshots)
- [🐛 Troubleshooting](#-troubleshooting)
- [👨‍💻 Contributors](#-contributors)
- [📄 License](#-license)

---

## 📚 Project Overview

This client-side application allows users to:

- View a list of all available books.
- Perform CRUD operations (create, read, update, delete).
- Borrow books and manage borrow history.
- See a borrow summary aggregated by title and ISBN.

Built to showcase clean architecture, RTK Query integration, responsive UI, and scalable frontend-backend interaction.

---

## ✨ Features

### ✅ Public Routes

- Fully accessible without login.
- Minimalist and clean UI for public access.

### 📘 Book Management

- **Book Table View**: Title, Author, Genre, ISBN, Copies, Availability, Actions.
- **Edit Book**: Pre-filled form with real-time updates.
- **Delete Book**: Confirmation dialog included.
- **Add New Book**: Easy form submission with redirection.
- **Availability Logic**: Automatically marks unavailable when copies reach 0.

### 🔄 Borrowing System

- Borrow form with validation (quantity & due date).
- Prevents borrowing more than available.
- Auto-updates availability.
- Redirects to summary on success.

### 📈 Borrow Summary

- Aggregated view: Title, ISBN, and total borrowed quantity.
- Pulled via aggregation API.

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Frontend     | React + TypeScript             |
| State Mgmt   | Redux Toolkit + RTK Query      |
| Styling      | Tailwind CSS or Plain CSS      |
| Backend      | Node.js + Express.js           |
| Database     | MongoDB + Mongoose             |

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js ≥ 18.x
- MongoDB instance (local or Atlas)
- Package manager: `npm` or `yarn`

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### ▶️ Run the App

```bash
# Run backend (from /server)
npm run dev

# Run frontend (from /client)
npm run dev
```

---

## 🔧 Configuration

Create a `.env` file inside the `/server` directory with the following:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/libraryDB
```

---

## 📦 API Integration

- Handled via **Redux Toolkit Query (RTK Query)**.
- All endpoints are strongly typed.
- Auto-cached and invalidated on mutations.
- Error handling integrated via toast messages or alerts.

---

## 📄 Available Routes

### 🔹 Client-side Routes

| Path                | Description                       |
|---------------------|-----------------------------------|
| `/books`            | List all books                    |
| `/create-book`      | Form to add a new book            |
| `/books/:id`        | View book details                 |
| `/edit-book/:id`    | Edit book information             |
| `/borrow/:bookId`   | Borrow a selected book            |
| `/borrow-summary`   | View borrow summary               |

### 🔸 Server-side Routes

| Endpoint                | Method | Description                      |
|--------------------------|--------|----------------------------------|
| `/api/books`            | GET    | Fetch all books (supports pagination) |
| `/api/books`            | POST   | Add a new book                   |
| `/api/books/:id`        | PUT    | Update a book                    |
| `/api/books/:id`        | DELETE | Delete a book                    |
| `/api/borrow`           | POST   | Borrow a book                    |
| `/api/borrow-summary`   | GET    | View borrow summary              |

---

## 🖼️ UI/UX Highlights

- 🧼 Minimalist layout with intuitive navigation.
- ⚡ Fast, responsive design using Tailwind CSS.
- 📱 Mobile-first and adaptive to tablets and desktops.
- 🪄 Clean animations, consistent theming, and icon support.

---

## 📊 Bonus Features

| Feature                 | Status       | Points |
|--------------------------|--------------|--------|
| Optimistic UI Updates    | ✅ Implemented | +2     |
| Toast Notifications      | ✅ Implemented | +2     |
| Responsive Layout        | ✅ Implemented | +4     |
| Type-Safe Forms          | ✅ Implemented | +2     |

---

## 📁 Folder Structure

```plaintext
📁 client
├── 📁 components
├── 📁 pages
├── 📁 features (RTK Query slices)
├── 📁 assets
└── 📄 router

📁 server
├── 📁 controllers
├── 📁 models
├── 📁 routes
├── 📁 config
└── 📄 server.js
```

---

## 🧪 Examples & Screenshots

> _You may add GIFs, UI screenshots, or walkthrough videos here._

---

## 🐛 Troubleshooting

- **MongoDB not connecting?**  
  Check if your `MONGODB_URI` is correct and MongoDB is running locally or remotely.

- **RTK Query not fetching data?**  
  Ensure the backend is running and CORS is properly configured.

- **Form validations not working?**  
  Ensure correct types and constraints are used in the form fields.

---

## 👨‍💻 Contributors

> You can list team members or contributors here.

- [Your Name](https://github.com/yourusername) — Fullstack Developer

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more info.

---

## 🌐 References (for Inspiration Only)

- https://booklovers.ancorathemes.com/
- https://preview.themeforest.net/item/printpress-book-publishing-wordpress-theme

---

> 🎯 _Built for learning, prototyping, and internal use. Not production-ready without further enhancements (authentication, validation, access control)._
    


  
