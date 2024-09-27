import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const server = 'http://192.168.0.101:1000'
// export const server = 'https://instaport-backend-main.vercel.app'
// instaport-backend-main.vercel.app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Toaster richColors position="top-center"/> */}
  </React.StrictMode>
);
