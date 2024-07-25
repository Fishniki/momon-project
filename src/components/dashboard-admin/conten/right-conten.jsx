import React from 'react'
import { BiUser } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import profil from '../../../assets/image.png'
import visa from '../../../assets/visa.png'
import { useNavigate } from 'react-router-dom'


export const RightConten = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/'); // Navigate to the login page
      }; 

  return (
    <section className='w-64 bg-slate-200 rounded-tl-[70px] overflow-hidden'>
    <div className='pt-12 flex justify-end gap-3 items-center px-2'>
        <GrNotification size={20}/>
        <BiUser size={20}/>
        <img src={profil}
        alt="pp"
        className='w-9 h-9 rounded-full object-cover'
        />
        <button className='px-3 py-2 rounded-md bg-red-400 text-white font-semibold' onClick={handleLogout}>Logout</button>
    </div>
    <div className="card mt-9 container">
        <div className="relative p-5 text-white">
        <div className="text-lg">John Smithsss</div>
        <div className="mt-10 space-y-2 ">
            <div>Amazon Platinum</div>
            <div>4756 ... ... 9018</div>
            <div className="flex justify-between relative">
            <span>$3.469.52</span>
            <img src={visa} alt="visa" className="h-4" />
            </div>
        </div>
    </div>
</div>
</section>
  )
}
