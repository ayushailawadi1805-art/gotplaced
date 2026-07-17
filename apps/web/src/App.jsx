import React from 'react';
import LoginPage from "./pages/LoginPage";
import ProgramsPage from "./pages/ProgramsPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import AdminPage from "./pages/AdminPage";

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CareersPage from '@/pages/CareersPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';



function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster />
     
    </div>
  );
}

export default App;
const apiUrl = import.meta.env.VITE_API_URL;
const envName = import.meta.env.VITE_ENV_NAME;

console.log(`Current Environment: ${envName}`);
console.log(`API Target URL: ${apiUrl}`);