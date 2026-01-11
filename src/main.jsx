import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Landing from './Landing.jsx';
import Destiny from './Destiny.jsx';

// Polyfills for Solana
import { Buffer } from 'buffer';
window.Buffer = Buffer;

// Simple routing based on path
function Router() {
  const path = window.location.pathname;
  
  if (path === '/app') {
    return <App />;
  }
  
  if (path === '/destiny') {
    return <Destiny />;
  }
  
  // Default to Landing page
  return <Landing />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
