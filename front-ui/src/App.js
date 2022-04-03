import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar';
import PageRoutes from './containers/PageRoutes'

function App() {
  return (
    <div className="container mt-4">
      
      <Router>
        <div className='container mt-4'>
          <Navbar />
          <hr/>
          <PageRoutes />
        </div>
      </Router>
      
    </div>
  );
}

export default App;
