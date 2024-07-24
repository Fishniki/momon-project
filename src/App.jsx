import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './components/auth/Register';
import Login from './components/auth/Login';
import ProtectedRoute from './components/Home/protectroute';
import { HomeUser } from './components/Home/HomeUser';




function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute element={HomeUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
