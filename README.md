# 🎬 React Movies App

A high-performance, visually stunning movie discovery web application built with **React 19**, **Tailwind CSS v4**, and **Vite**. 

This application offers users an immersive, smooth, and responsive experience to search, browse, and explore trending and popular movies in real-time, fetching live data directly from the **TMDB (The Movie Database) API**.

---

## 🚀 Key Features

*   🔍 **Real-Time Debounced Search**: Dynamic search functionality powered by `react-use` hooks to avoid redundant API hits and deliver a snappy user experience.
*   📊 **Interactive Pagination**: Seamlessly navigate through pages of movie listings with a responsive controls interface.
*   📱 **Responsive Mobile-First Design**: Optimized layouts for mobile, tablet, and desktop screens with a sleek modern dark mode.
*   ⚡ **Lightning-Fast Builds**: Built on top of the next-generation bundler, Vite, for instant Hot Module Replacement (HMR).
*   🎨 **Modern Design & Micro-interactions**: Features a custom dark-themed UI with glassmorphism effects, gradient headings, interactive hover effects, and sleek loading animations.
*   🛡️ **Modern React Architecture**: Demonstrates clean, modular components, functional state management, and reliable error boundary messaging.

---

## 🎨 Preview & Screenshots

### Desktop View
![App Showcase](./screenshots/screencapture%201.png)

### Search & Filtering
![Search Results](./screenshots/screencapture%202.png)

---

## 🛠️ Technology Stack

| Technology | Purpose | Key Details |
| :--- | :--- | :--- |
| **React 19** | Frontend Framework | Latest concurrent features, functional components, hooks |
| **Vite 8** | Dev Server & Bundler | Native ESM, lightning-fast builds |
| **Tailwind CSS v4** | CSS Styling | Next-gen compiler, utility-first CSS |
| **TMDB API** | Data Source | Real-time movie database queries |
| **react-use** | Utilities | Debounced custom input handlers (`useDebounce`) |

---

## ⚙️ Setup & Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-movies.git
cd react-movies
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Obtain a TMDB API Access Token
1. Sign up or log in to [The Movie Database (TMDB)](https://www.themoviedb.org/).
2. Navigate to your Account Settings -> **API** section.
3. Generate a new API Key if you haven't already.
4. Copy the **API Read Access Token** (Bearer Token, which is the long JWT token).

### 4. Configure Environment Variables
Create a file named `.env.local` in the root directory of the project and add your TMDB Access Token:
```env
VITE_TMDB_API_KEY=your_tmdb_read_access_token_here
```

### 5. Run the Application
Start the development server locally:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📂 Project Structure

```text
movie-app/
├── screenshots/          # Application preview images
├── public/               # Static assets (icons, images)
│   ├── star.svg          # Rating star icon
│   └── no-movie.png      # Fallback movie poster
└── src/
    ├── assets/           # Local styling assets/images
    ├── components/       # Reusable React components
    │   ├── MovieCard.jsx # Card displaying individual movie details
    │   ├── Search.jsx    # Movie search bar component
    │   └── Spinner.jsx   # Tailwind CSS-animated spinner
    ├── App.jsx           # Main application state and fetch logic
    ├── App.css           # Local component-specific styles
    ├── index.css         # Tailwind directives and design tokens
    └── main.jsx          # React DOM entry point
```

---

## 📋 Available Commands

In the project directory, you can run the following scripts:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR. |
| `npm run build` | Builds the application for production to the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have feature suggestions, please feel free to open an issue or create a pull request.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
