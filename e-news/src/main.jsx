import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import App.jsx
import './index.css';
import { AuthProvider } from "./Component/authContext.jsx"; // Correct relative path


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
