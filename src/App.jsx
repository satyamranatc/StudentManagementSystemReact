import React,{useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import Admin from "./Admin.jsx";
import Dashboard from "./Dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Header */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo/Title */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-800">
                  Project Manager
                </span>
              </div>
              
              {/* Navigation Links */}
              <div className="flex items-center space-x-4">
                <Link 
                  to="/" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;