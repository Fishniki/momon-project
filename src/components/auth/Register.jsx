// src/components/LoginPage.jsx
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')  
   const [password, setPassword] = useState('')  
   const navigate = useNavigate()

   const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1234/register', { name, email, password });
      console.log(response.data);
      setName('')
      setEmail('')
      setPassword('')
      navigate("/login")
    }catch (error){
      console.error(error);
    }
   }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className='w-[350px] sm:w-[400px] bg-sky-100 shadow-lg border rounded-xl'>
        <div className="px-4 py-4">
          <h1 className="text-center text-2xl mb-4">Register</h1>  
          <form className="flex flex-col" onSubmit={handleRegister} method='POST'>
            <label htmlFor="nama" className="mb-2">Nama</label>
            <input type="text" name='name' placeholder='Masukan nama anda' id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg mb-4 p-2 outline-none" />
            <label htmlFor="email" className="mb-2">Email</label>
            <input type="email" name='email' placeholder='Masukan email anda' id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg mb-4 p-2 outline-none" />
            <label htmlFor="password" className="mb-2">Password</label>
            <input type="password" name='password' placeholder='Masukan password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg mb-4 p-2 outline-none" />

            <div className='flex justify-center'>
              <button type="submit" className="px-4 w-[100px] py-2 bg-blue-500
              hover:bg-sky-500 font-semibold text-white rounded-md">Register</button>
            </div>

            <p className='text-[12px] sm:text-sm text-center mt-7'>Anda sudah memiliki akun 
              <span className='text-sky-600 font-semibold'>
                <Link to='/'> Login</Link>
              </span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
