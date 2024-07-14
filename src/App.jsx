// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/auth/Login';
import RegisterPage from './components/auth/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/Home' element={<Home/>}/>     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
