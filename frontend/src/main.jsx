import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n.js";

// This finds the <div id="root"> in your index.html
//const root = ReactDOM.createRoot(document.getElementById("root"));

createRoot(document.getElementById("root")).render(
//root.render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </StrictMode>
);
