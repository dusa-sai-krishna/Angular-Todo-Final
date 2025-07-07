# 📝 Angular Todo Management Tool

> A modern, responsive todo management application built with Angular 20 and PrimeNG

## 🚀 Live Demo
**[View Live Application](https://ng-deployments.firebaseapp.com/)** 🌐

---

## ✨ Features

- 🌓 **Dual Theme Support** - Seamless dark/light mode switching
- 👥 **Multi-User Management** - Organize tasks by different users
- ➕ **Dynamic Task Creation** - Add tasks with custom validation
- 📅 **Date Management** - Due date tracking with future date validation
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- 🔄 **Real-time Updates** - Instant task completion and removal

---

## 🛠️ Tech Stack

### Core Framework
- ![Angular](https://img.shields.io/badge/Angular-20.0.5-red?style=flat&logo=angular) **Angular 20** - Latest version with standalone components
- ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat&logo=typescript) **TypeScript** - Type-safe development

### UI & Styling
- ![PrimeNG](https://img.shields.io/badge/PrimeNG-Latest-orange?style=flat) **PrimeNG** - Rich UI component library
- ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=flat&logo=tailwind-css) **Tailwind CSS** - Utility-first CSS framework
- 🎨 **Custom Theme Preset** - Indigo-based color scheme

### Backend & Deployment
- ![Firebase](https://img.shields.io/badge/Firebase-Latest-yellow?style=flat&logo=firebase) **Firebase** - Authentication & Firestore database
- 🔥 **Firebase Hosting** - Fast, secure web hosting

---

## 🏗️ Architecture & Concepts

### 🔧 Angular Features Implemented

| Feature | Implementation | Purpose |
|---------|---------------|---------|
| 📡 **Signals** | `signal()`, `computed()` | Reactive state management |
| 🛣️ **Routing** | Nested routes with parameters | Multi-user navigation |
| 📋 **Reactive Forms** | `FormGroup`, `FormControl` | Type-safe form handling |
| ✅ **Custom Validators** | Future date validation | Enhanced form validation |
| 🎭 **Dynamic Styling** | Theme-based class binding | Dual theme support |
| 🔄 **Dependency Injection** | Service-based architecture | Clean separation of concerns |

### 📁 Project Structure

```
src/
├── 🎨 theme/
│   ├── myPreset.theme.ts     # Custom PrimeNG theme
│   └── theme.service.ts      # Theme management service
├── 📱 app/
│   ├── header/               # Navigation header
│   ├── users/                # User management
│   │   └── user/            # Individual user component
│   └── tasks/               # Task management
│       ├── new-task/        # Task creation form
│       ├── task/            # Individual task component
│       ├── tasks/           # Task list display
│       └── no-tasks/        # Empty state component
```

---

## 🎯 Key Implementations

### 🌓 Theme System
```typescript
// Automatic theme detection with localStorage persistence
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("my-app-dark");
}
```

### 📝 Form Validation
```typescript
// Custom future date validator
function isFutureDate(control: AbstractControl) {
  let dueDate = new Date(control.value);
  let now = new Date();
  return dueDate <= now ? {NotaFutureDate: true} : null;
}
```

### 🔄 Signal-Based State
```typescript
private _tasks = signal<Task[]>([...]);
allTasks = this._tasks.asReadonly();

// Computed derived state
userTasks = computed(() => 
  this._tasksService.allTasks().filter(task => task.userId === this.userId())
);
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Angular CLI 20+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
ng serve
```

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | 🏃‍♂️ Start development server |
| `ng build` | 🏗️ Build for production |
| `ng test` | 🧪 Run unit tests |

---

## 🎨 UI Components Used

- 🔘 **Buttons** - Primary actions and navigation
- 📝 **Form Controls** - Input fields, textareas, date pickers
- 🖼️ **Avatars** - User profile images
- 📜 **Scroll Panels** - Smooth scrolling task lists
- 🏷️ **Float Labels** - Modern form field labels

---

## 🌟 Highlights

- ⚡ **Performance** - Standalone components for optimal bundle size
- 🎯 **Type Safety** - Full TypeScript implementation
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - ARIA-compliant components
- 🔒 **Secure** - Firebase authentication integration

---

## 📈 Future Enhancements

- [ ] 🔔 Push notifications for due dates
- [ ] 📊 Task analytics dashboard
- [ ] 🏷️ Task categories and tags
- [ ] 👥 Collaborative task sharing
- [ ] 📱 Progressive Web App features

---

**Built with ❤️ using Angular & PrimeNG**