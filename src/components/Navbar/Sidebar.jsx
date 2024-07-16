import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaArrowLeft } from 'react-icons/fa';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleOnClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="w-full bg-blue-600 transition-all duration-200">
        <div>
          <div className="flex justify-between p-5 px-6 items-center">
            <div className="flex gap-2">
              <button onClick={handleOnClick}>
                <RxHamburgerMenu className="text-xl text-white" />
              </button>
              <div className="text-2xl font-sans font-semibold text-white">Dashboard</div>
            </div>
            <div>
              <h1 className="text-white">Niki</h1>
            </div>
          </div>

          <div className={`${sidebar ? 'fixed' : '-ml-[100%]'} w-60 bg-blue-700 h-screen transition-all duration-200 z-50`}>
          <div className="px-4 py-5">
          <div className="mb-5">
            <div className="font-bold text-white text-xl font-sans">Money Monitor</div>
          </div>
          <ul>
            <li className="mb-4 flex flex-row justify-between">
              <div>
                <h1 className="text-xl font-semibold text-white">Nama</h1>
                <p className="text-white text-lg">email</p>
              </div>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-300 text-lg">Home</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-300 text-lg">Pemasukan</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white hover:text-gray-300 text-lg">Pengeluaran</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 text-lg">Foto</a>
            </li>
          </ul>
        </div>
        </div>
        </div>
       

          
      </div>

     
    </>
  );
};

export default Sidebar;
