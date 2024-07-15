import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true)
  const hanleOnclick = () => {
    setSidebar(!sidebar)
  }

  return (
    <>

    <div className={`${sidebar ? 'fixed' : 'fixed bg-red-200'} w-full transition-all duration-200`}>
      <div className='flex  justify-between p-5 px-6 items-center'>
        <div className='flex gap-2'>
            <button onClick={hanleOnclick}><RxHamburgerMenu className='text-xl md:hidden' /></button>
            <div className='text-2xl font-sans font-semibold text-green-500'>Dashboard</div>
        </div>
        {/* <ul className='md:flex hidden gap-5 font-semibold cursor-pointer'>
          <li className='hover:text-white'>Home</li>
          <li className='hover:text-white'>Pemasukan</li>
          <li className='hover:text-white'>Pemasukan</li>
          <li className='hover:text-white'>Pengeluaran</li>
          <li className='hover:text-white'>Foto</li>
        </ul> */}

        <div>
          <h1>Niki</h1>
        </div>
      </div>
    </div>

    {/* <div className={`${sidebar ? '-ml-[100%]' : ' mr-[100%] fixed'} w-60 bg-slate-200 h-screen transition-all duration-200 z-50`}>
      <div className="px-4 py-5">
        <div className='mb-5 flex gap-3'>
          <button onClick={hanleOnclick}><FaArrowLeft className='text-[15px] text-white' /></button>
          <div className='font-bold text-white text-xl font-sans'>Money Monitor</div>
        </div>
        <ul>
          <li className="mb-4 flex flex-row justify-between">
            <div>
              <h1 className="text-xl font-semibold text-white">Nama</h1>
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
    </div> */}
    </>
   
  );
};

export default Sidebar;
