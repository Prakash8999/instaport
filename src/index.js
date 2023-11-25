import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const server = 'https://insta-port-backend-api.vercel.app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Toaster richColors position="top-center"/> */}
  </React.StrictMode>
);

