<div align="center">
  <h1>🧑‍💼 Employee Management System - Frontend</h1>
  <p><strong>A modern, responsive UI for managing employees and tasks, built with React and Tailwind CSS.</strong></p>
</div>

<br />

This frontend application provides an intuitive dashboard for administrators and employees, offering real-time updates and seamless task management. It connects directly to the Node.js backend API.

🔗 **Backend Repository:** [EMS-Backend](https://github.com/dotsatya/EMS-Backend)

---

## 🚀 Features

### 🔐 Authentication
- 👨‍💼 **Admin & Employee Login:** Secure distinct access flows.
- 🔁 **Role-based Rendering:** Dashboards dynamically load based on user roles.
- ✅ **JWT Token Authentication:** Secure session management.
- 🔒 **Protected Routes:** Unauthorized users are redirected to login.

### 📋 Task Management
- ➕ **Admin Creation:** Create tasks with Title, Description, Category, Due Date, and Assignee.
- 🔄 **Status Flow:** `New` → `Active` → `Completed`. (Automated `Failed` states updated via backend cron).
- ▶️ **Employee Actions:** Start and complete tasks directly from the dashboard.

### 📊 Live Dashboard & Stats
- 📌 **Real-time Metrics:** See active counts of New, Active, Completed, and Failed tasks.
- ⚡ **Auto-Updating Counters:** Instant updates triggered via Socket.io events.

### 🧩 Component-Based Architecture
- ♻️ **Reusable Components:** Features like `TaskBoard`, `TaskCard`, and `CreateTask` ensure maintainability.
- 🧠 **Context API:** Global state management (e.g., `AuthContext.jsx`).

### 🌙 UI & UX
- 🌗 **Light / Dark Mode:** Seamless UI transitions.
- 📱 **Mobile Responsive:** Flexbox/Grid-based layouts for all devices.
- 🍞 **Toast Notifications:** Feedback popups on interactions via `react-toastify`.

### 🔌 Real-Time Functionality
This application uses **Socket.io** for live synchronization between users:
- **Instant Assignments:** Employees see new tasks without refreshing.
- **Admin Alerts:** Admins see real-time status updates from employees.
- **Live Updates:** Seamless deletion and modification synchronization.

---

## 🛠️ Tech Stack

- ⚛️ **React JS** (v19)
- ⚡ **Vite** (Build Tool)
- 🎨 **Tailwind CSS** (v4)
- 🛣️ **React Router DOM** (Routing)
- 📡 **Axios** (API Client)
- 🔌 **Socket.io-client** (WebSockets)
- 🔑 **jwt-decode** (Token Management)
- 🍞 **react-toastify** (Notifications)
- 🎯 **lucide-react & react-icons** (Iconography)

---

## 📁 Project Structure

```text
Employee Management System/
├── public/                  # Static assets
├── src/
│   ├── api/                 # Axios instance and API call modules
│   │   ├── api.js           # Core Axios configuration
│   │   ├── auth.js          # Authentication endpoints
│   │   └── tasks.js         # Task management endpoints
│   ├── components/          # Reusable UI components
│   │   ├── AdminDb/         # Admin dashboard components
│   │   ├── EmployeeDb/      # Employee dashboard components
│   │   ├── Dashboard/       # Shared dashboard UI
│   │   └── others/          # Headers, loaders, modals, etc.
│   ├── context/             # Global Context API providers
│   │   └── AuthContext.jsx
│   ├── pages/               # Main route views
│   │   ├── Home.jsx         
│   │   ├── Login.jsx        
│   │   └── Signup.jsx       
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Main React Component
│   ├── main.jsx             # React DOM injection
│   ├── socket.js            # Socket.io client setup
│   └── index.css            # Global Tailwind imports
├── .env                     # Environment variables (ignored in Git)
├── package.json             # NPM dependencies
└── vite.config.js           # Vite configuration
```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v16+)
- **Backend API Running** (See backend README)

### Setup Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd "Employee Management System"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:6969
   VITE_WEBSOCKET_URL=http://localhost:6969
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The app will automatically launch in your browser at `http://localhost:5173`.*

---

## 🔗 API Integration

The frontend uses an Axios interceptor to append the JWT token to all secured routes. 
- **Auth APIs:** `/api/auth/signup`, `/api/auth/login`
- **Task APIs:** `/api/tasks/create`, `/api/tasks/all`, `/api/tasks/employee`, `/api/tasks/status`

---

## 🐛 Troubleshooting

### Common Issues
1. **API Connection Failed:**
   - Ensure your backend server is running.
   - Verify `VITE_API_URL` exactly matches your backend URL.
2. **Authentication Loop / Immediate Logout:**
   - Check if your backend JWT token has expired.
   - Clear your browser's `localStorage` and try logging in again.
3. **Real-time Updates Failing:**
   - Check if `VITE_WEBSOCKET_URL` is set correctly.
   - Verify network connections for WebSocket protocols.

---

## 👨‍💻 Author

**Satya Sundar Dey**  
💻 Web Developer & 🎨 Graphics Designer  

✨ *A creative developer blending logic with design to craft meaningful digital experiences.*

---
⭐ If you like this project, don’t forget to **star the repo!!!**
