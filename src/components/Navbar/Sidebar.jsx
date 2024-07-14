import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true)
  const hanleOnclick = () => {
    setSidebar(!sidebar)
  }

  return (
    <>

    <div className={`${sidebar ? 'hidden' : ''} fixed p-5`}>
      <button onClick={hanleOnclick}><RxHamburgerMenu className='text-xl' /></button>
    </div>

    <div className={`${sidebar ? 'mr-[100%]' : '-ml-[100%]'} w-60 bg-slate-400 h-screen transition-all duration-200`}>
      <div className="px-4 py-5">
        <div className='mb-5'>
          <button onClick={hanleOnclick}><FaArrowLeft className='text-xl text-white' /></button>
        </div>
        <ul>
          <li className="mb-4 flex flex-row justify-between">
            <div>
              <h1 className="text-xl font-semibold text-white">Nama?</h1>
              <p className="text-white text-lg">email</p>
            </div>

          </li>
          <li className="mb-4">
            <a href="#" className="text-white hover:text-gray-600 text-lg">Home</a>
          </li>
          <li className="mb-4 relative">
            <div className='cursor-pointer text-white text-lg'>Pemasukan</div>
          </li>
          <li className="mb-4 relative">
           <div className='cursor-pointer text-white text-lg'>Pemasukan</div>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-600 text-lg">Foto</a>
          </li>
        </ul>
      </div>
    </div>
    </>
   
  );
};

export default Sidebar;
