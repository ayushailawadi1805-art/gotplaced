import ReactGA from "react-ga4";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/index.css';
ReactGA.initialize("G-WLFBVJBCZ8");
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </>
);