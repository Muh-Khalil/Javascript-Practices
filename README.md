# 🚀 JavaScript Projects & Mini Applications Collection

A comprehensive portfolio collection of JavaScript web applications, interactive UI components, utilities, and backend integrations. This repository showcases hands-on problem solving, DOM manipulation, asynchronous programming, REST/API consumption, and full-stack CRUD capabilities.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Projects Directory & Breakdown](#-projects-directory--breakdown)
  - [1. Full-Stack / Backend](#1-full-stack--backend)
  - [2. Productivity & Utilities](#2-productivity--utilities)
  - [3. Media & Interactive UI](#3-media--interactive-ui)
  - [4. Coding Activities & Exercises](#4-coding-activities--exercises)
- [Tech Stack & Tools](#-tech-stack--tools)
- [Getting Started](#-getting-started)
- [How to Run Individual Projects](#-how-to-run-individual-projects)
- [Author](#-author)

---

## 📖 Overview

This repository houses multiple standalone projects built with vanilla JavaScript, modern CSS, HTML5. each project is self-contained with modular source code.

---

## 📂 Projects Directory & Breakdown

```
JavaScript Project/
├── Activity/                     # Mini practice modules & API tasks
│   ├── Random_color/             # Dynamic RGB/Hex random color generator
│   ├── Searching_API/            # Real-time search with third-party API integration
│   ├── Text_counter/             # Live word, character, and text metric counter
│   └── Text_Editor/              # Interactive rich text styling & editor tool
├── Age  calculator/              # Precise birthdate & age calculation utility
├── Drop_down_menu/               # Accessible, animated navigation drop-down menu
├── image_gallery/                # Responsive photo showcase with interactive lightbox/preview
├── image_searching/              # Dynamic image search application via API
├── mini_calendar/                # Interactive visual calendar widget
├── Music player/                 # Custom audio player with playlist controls & playback UI
├── openEndedLab/                 # Full-stack Node.js + Express + MySQL CRUD application
├── Todo game_console/            # Console/interactive gamified task tracker
├── Todo_App/                     # Modern To-Do task manager with dynamic backgrounds
├── practices.js                  # Core JavaScript algorithmic practices & reference snippets
└── index.html & prac.css         # Quick overview workbench & testbed
```

---

### 1. Full-Stack / Backend

#### 🗄️ [openEndedLab](./openEndedLab) — MySQL Backend CRUD Application
- **Description:** A complete relational database backend system managing student and course enrollment records.
- **Key Features:**
  - Full CRUD operations (Create, Read, Update, Delete) via Express routes.
  - Server-side rendering using **EJS** templates (`views/`).
  - Structured modular architecture: `Routes/`, `config/database.js`, and `sqlCode.sql` schema scripts.
- **Technologies:** Node.js, Express.js, MySQL, EJS, HTML5, CSS3.

---

### 2. Productivity & Utilities

#### ✅ [Todo_App](./Todo_App) — Dynamic To-Do Manager
- **Description:** Sleek daily task manager with an interactive workflow and dynamic visual backgrounds.
- **Features:** Quick task creation, completion toggles, intuitive removals, and responsive mobile-first styling.
- **Technologies:** HTML5, CSS3, Vanilla JavaScript.

#### 🎮 [Todo game_console](./Todo%20game_console) — Console & Gamified Task Tracker
- **Description:** A unique task-tracking application blending command/console-style inputs with interactive task handling.
- **Technologies:** HTML5, JavaScript.

#### 🎂 [Age  calculator](./Age%20%20calculator) — Precision Age Calculator
- **Description:** Calculates exact years, months, and days based on user date inputs, accounting for leap years and month lengths.
- **Technologies:** HTML5, CSS3, JavaScript Date API.

#### 📅 [mini_calendar](./mini_calendar) — Real-Time Mini Calendar
- **Description:** Clean, minimalist date display showing day, month, year, and weekday with automatic real-time updates.
- **Technologies:** HTML5, CSS3, JavaScript.

---

### 3. Media & Interactive UI

#### 🎵 [Music player](./Music%20player) — Audio Streaming Player
- **Description:** Custom music and audio player with album art display, track selection, play/pause controls, and volume handling.
- **Technologies:** HTML5 Audio API, CSS3, JavaScript.

#### 🖼️ [image_gallery](./image_gallery) — Responsive Image Gallery
- **Description:** Responsive grid layout showcasing image collections with smooth hover effects and previews.
- **Technologies:** HTML5, Modern CSS Grid/Flexbox, JavaScript.

#### 🔍 [image_searching](./image_searching) — Image Search Engine
- **Description:** Search application fetching and displaying image query results dynamically via web services.
- **Technologies:** JavaScript Fetch API, Promises, HTML5, CSS3.

#### 🔽 [Drop_down_menu](./Drop_down_menu) — Social & Nav Dropdown Component
- **Description:** Smoothly animated dropdown navigation with social media links and custom iconography.
- **Technologies:** HTML5, CSS animations, JavaScript DOM events.

---

### 4. Coding Activities & Exercises

Inside the [`Activity/`](./Activity) folder:

| Activity | Description |
| :--- | :--- |
| **Random_color** | Generates dynamic RGB/Hex color combinations on user interaction. |
| **Searching_API** | Real-time query search handling asynchronous data fetching from public APIs. |
| **Text_counter** | Real-time text analysis tool tracking character counts, words, and reading metrics. |
| **Text_Editor** | In-browser WYSIWYG rich text formatting and styling playground. |

---

## 🛠️ Tech Stack & Tools

- **Languages:** JavaScript (ES6+), HTML5, CSS3, SQL
- **Runtime & Backend:** Node.js, Express.js
- **Database:** MySQL
- **Templating:** EJS
- **APIs & Concepts:** Fetch API, Async/Await, DOM Manipulation, Event Handling, LocalStorage, Audio API, Date Object

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Firefox, Microsoft Edge, Brave, etc.)
- [Node.js](https://nodejs.org/) (v16.x or higher) & [npm](https://www.npmjs.com/) (for backend/openEndedLab)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) (for MySQL CRUD lab)
- [Git](https://git-scm.com/) installed on your machine

### Cloning the Repository

```bash
git clone <YOUR_NEW_GITHUB_REPO_URL>
cd "JavaScript Project"
```

---

## 💻 How to Run Individual Projects

### Frontend Projects (Vanilla JS)
For any frontend project (e.g., `Todo_App`, `Music player`, `Age  calculator`, `image_gallery`, or `Activity/*`):
1. Navigate into the target project folder.
2. Open `index.html` directly in your browser, or run a local server:
   ```bash
   # Using VS Code Live Server extension, OR via npx serve:
   npx serve .
   ```

### Backend Project (`openEndedLab`)
1. Open terminal inside the project directory:
   ```bash
   cd openEndedLab
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your database:
   - Import `config/sqlCode.sql` into your MySQL instance.
   - Update database credentials in `config/database.js` or your `.env` file.
4. Launch the application:
   ```bash
   node index.js
   # Or using nodemon if installed:
   npx nodemon index.js
   ```
5. Visit `http://localhost:3000` (or specified port) in your web browser.

---

## 📄 License & Attribution

This project is created for educational and portfolio demonstration purposes. Feel free to use, inspect, and modify the code for learning!
