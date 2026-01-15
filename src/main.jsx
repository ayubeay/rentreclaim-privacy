import React from 'react';
import ReactDOM from 'react-dom/client';
import StealthLaunch from './StealthLaunch.jsx';
import Learn from "./Learn.jsx";
import PrivacyHub from "./PrivacyHub.jsx";
import RadrDemo from "./RadrDemo.jsx";
import PrivacyCashDemo from "./PrivacyCashDemo.jsx";
import IncoDemo from "./IncoDemo.jsx";
import ArciumDemo from "./ArciumDemo.jsx";

// Polyfills for Solana - MUST be before any Solana imports
import { Buffer } from 'buffer';
window.Buffer = Buffer;
globalThis.Buffer = Buffer;

// Now import components
import App from './App.jsx';
import Landing from './Landing.jsx';
import Destiny from './Destiny.jsx';
import PrivateSend from './PrivateSend.jsx';
import DecryptTool from './DecryptTool.jsx';

// Simple routing based on path OR hash (works offline with file://)
function Router() {
  const path = (window.location.hash?.slice(1) || window.location.pathname) || '/';
  
  if (path === '/app') return <App />;
  if (path === '/destiny') return <Destiny />;
  if (path === '/send') return <PrivateSend />;
  if (path === '/decrypt') return <DecryptTool />;
  if (path === '/launch') return <StealthLaunch />;
  if (path === "/learn") return <Learn />;
  if (path === "/privacy") return <PrivacyHub />;
  if (path === "/radr") return <RadrDemo />;
  if (path === "/privacycash") return <PrivacyCashDemo />;
  if (path === "/inco") return <IncoDemo />;
  if (path === "/arcium") return <ArciumDemo />;

  
  return <Landing />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
