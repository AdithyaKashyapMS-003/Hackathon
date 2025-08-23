import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import "./i18n.js";

import { AuthProvider } from "./context/AuthContext";


// This finds the <div id="root"> in your index.html
//const root = ReactDOM.createRoot(document.getElementById("root"));

createRoot(document.getElementById("root")).render(
//root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback="Loading...">
        <App />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

