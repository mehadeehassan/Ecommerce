![React Shops Frontend](src/assets/download.png)
# React Shops

A modern React-based e-commerce/shopping web application, built with Vite and using Redux Toolkit for state management.

## 🚀 Tech Stack

### Core
- **React 19** — UI library
- **Vite 8** — Build tool and dev server
- **React Router DOM 7** — Routing

### State Management
- **Redux Toolkit** — Global state management
- **React Redux** — React bindings for Redux

### Styling
- **Tailwind CSS 4** — Utility-first CSS framework
- **@tailwindcss/vite** — Tailwind plugin for Vite

### UI/UX
- **Lucide React** & **React Icons** — Icon libraries
- **React Slick** & **Slick Carousel** — Carousel/slider component
- **React Hot Toast** — Toast notifications
- **SweetAlert2** — Alerts and confirmation modals

### Networking & Utilities
- **Axios** — HTTP requests
- **js-cookie** — Cookie management

### Code Quality
- **ESLint 9** — Code linting (with react-hooks and react-refresh plugins)

## 📦 Installation

After cloning the project, install the required dependencies:

```bash
npm install
```

## 🛠️ Usage

### Start the development server
```bash
npm run dev
```
This starts the local dev server (default: `http://localhost:5173`).

### Create a production build
```bash
npm run build
```
Build output will be generated in the `dist/` folder.

### Preview the production build
```bash
npm run preview
```

### Lint the code
```bash
npm run lint
```

## 📁 Project Structure (suggested)

```
react-shops/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   ├── routes/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✨ Features (suggested)

- Product browsing and search
- Category-based filtering
- Shopping cart management (via Redux Toolkit)
- User authentication (cookie-based)
- Responsive design (Tailwind CSS)
- Product carousel/slider
- Toast notifications and confirmation alerts

## 📝 License

This project is private (`"private": true`).

## 🤝 Contributing

Issues and pull requests are welcome.
