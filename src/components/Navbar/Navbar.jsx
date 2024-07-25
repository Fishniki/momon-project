import React from 'react'

export const Navbar = ({onClick, nama}) => {
  return (
    <div>
        <div className='flex justify-between px-7 py-5 bg-red-300 items-center'>
            <div>
                <h1 className='text-2xl font-semibold text-black'>Money Monitor</h1>
            </div>
            <ul className='flex gap-6 text-xl text-black font-serif'>
                <li>Home</li>
                <li>Abou</li>
                <li>Profil</li>
            </ul>
            <div className='flex items-center gap-2'>
                <div className='text-[20px] font-semibold text-black'>{nama}</div>
                <button onClick={onClick} className='px-5 py-2 bg-red-500'>Logout</button>
            </div>
        </div>
    </div>
  )
}
