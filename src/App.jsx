import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './components/auth/Register';
import Login from './components/auth/Login';
import ProtectedRoute from './components/Home/protectroute';
import { HomeUser } from './components/Home/HomeUser';
import { Home } from './components/Home/Dashboard';





function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute element={HomeUser} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={Home} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
