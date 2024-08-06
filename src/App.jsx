import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/auth/Register';
import Login from './components/auth/Login';
import ProtectedRoute from './components/Home/protectroute';
import { DashboardAdmin } from './components/dashboard-admin/admin';
import DashboardUser from './components/dashboard-user/user';





function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute element={DashboardAdmin}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<ProtectedRoute element={DashboardUser} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={DashboardAdmin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
