// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Dashboard';
import { Login } from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import { useEffect, useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:1234/api/check-auth', { withCredentials: true });
        setIsAuthenticated(response.data.authenticated === "true");
      } catch (error) {
            setIsAuthenticated(false);
      } finally {
            setLoading(false);
      }
    }
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/Home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
