import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1234/login', { email, password }, { withCredentials: true });
      localStorage.setItem('token', response.data.token);
      // alert(`Anda login sebagai ${response.data.nama} dengan email ${response.data.email} dengan id ${response.data.id}`);
      
      const token = response.data.tokens
      console.log(token)
      
      const emailParts = response.data.email.split('@')
      const userName = emailParts[0];

      alert(`Username anda adalah ${userName}`)

      if (userName === "admin") {
        navigate('/dashboard')
      }else{
        navigate('/home');
      }

      setEmail('');
      setPassword('');
    } catch (e) {
      console.error(e);
      alert('ada error bos');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="w-[250px] sm:w-[300px] md:w-[350px] bg-sky-100 shadow-lg border rounded-xl">
        <div className="px-4 py-4">
          <h1 className="text-center text-2xl mb-4">Login</h1>
          <form className="flex flex-col" onSubmit={handleLogin} method="POST">
            <label htmlFor="email" className="mb-2">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan email anda" id="email" className="border rounded-lg mb-4 p-2 outline-none" />
            <label htmlFor="password" className="mb-2">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan password" id="password" className="border rounded-lg mb-4 p-2 outline-none" />
            <div className="flex justify-center">
              <button type="submit" className="px-4 w-[100px] py-2 font-semibold hover:bg-sky-500 bg-blue-500 text-white rounded-md">Login</button>
            </div>
            <p className="text-[10px] sm:text-sm text-center mt-7">Anda belum memiliki akun 
              <span className="text-sky-600 font-semibold">
                <Link to="/register"> Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login