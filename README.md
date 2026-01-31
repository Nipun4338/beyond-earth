# 🚀 Beyond Earth

**Beyond Earth** is an immersive, real-time space exploration dashboard built with React. It provides users with a stunning window into the cosmos, featuring live data from NASA, upcoming rocket launches, space news, and interactive solar system visualizations.

![Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-17.0.2-blue)
![License](https://img.shields.io/badge/License-MIT-purple)

## ✨ Key Features

- **🌌 Dynamic Space Facts**:

  - **Daily Discoveries**: Fetches the "Astronomy Picture of the Day" (APOD) directly from NASA.
  - **Asteroid Watch**: Real-time tracking of Near-Earth Objects (NEOs) passing by our planet.
  - **Curated Trivia**: A rotating collection of mind-blowing space facts.

- **🚀 Launch Center**:

  - **Upcoming Launches**: Live countdowns and details for the next 10 scheduled rocket launches worldwide.
  - **Mission History**: Archive of recent successful missions with video links and manifest details.
  - **Data Source**: Powered by _The Space Devs_ API.

- **📰 Space News Feed**:

  - Stay updated with the latest headlines from _Spaceflight News API_.
  - Read full articles on recent discoveries, commercial spaceflight, and astronomy.

- **🪐 Solar System Insights**:

  - Interactive cards displaying real-time known counts of planets, moons, comets, and asteroids.
  - Detailed "Planet Cards" with physical characteristics (mass, volume, gravity).
  - **Age Calculator**: Calculate your age on different planets!

- **📸 Mars Rover Gallery**:

  - View high-definition images from the **Curiosity** rover.
  - Interactive modal for detailed photo inspection.

- **🧑‍🚀 People in Space**:
  - Live tracker of who is currently in orbit and which craft they are aboard (ISS, Tiangong, etc.).

## 🎨 UI/UX Highlights

- **Immersive Design**: Deep space theme with a custom starry background and nebula effects.
- **Glassmorphism**: Modern, frosted-glass distinct headers and cards.
- **Interactive Elements**:
  - Hover-responsive cards with subtle glowing borders and lift effects.
  - Animated counters and smooth transitions.
  - Custom "Sci-Fi" scrollbars and typography (Montserrat).

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**:
  - CSS3 (Custom Animations)
  - Material UI (MUI)
  - React Bootstrap
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Routing**: React Router v6
- **APIs Integrated**:
  - NASA APOD API
  - NASA NEO (Near Earth Object) API
  - The Space Devs (Launch Library 2)
  - Spaceflight News API
  - Open Notify (Astronauts)
  - Solar System OpenData

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/beyond-earth.git
    cd beyond-earth
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

    _(Note: This project uses legacy peer dependencies due to some specific UI libraries. If you encounter errors, try `npm install --legacy-peer-deps`)_

3.  **Start the Application**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4.  **(Optional) Start the Backend Server**
    If the project includes a local backend proxy/server for caching:
    ```bash
    # In a separate terminal
    cd beyond-earth-server
    npm install
    node server.js
    ```

## 🔧 Build & Deployment

To build the app for production:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Nipun4338/beyond-earth/issues).

---

_Designed with 💙 for Space Explorers everywhere._
