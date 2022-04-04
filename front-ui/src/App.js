import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar';
import PageRoutes from './containers/PageRoutes'
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="container mt-4">

      <Router>
        <AuthProvider>
          <div className='container mt-4'>
            <Navbar />
            <hr />
            <PageRoutes />
          </div>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
