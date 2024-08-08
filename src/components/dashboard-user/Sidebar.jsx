/* eslint-disable react/prop-types */
import { BiGridAlt } from 'react-icons/bi';
import { CgLogOut } from 'react-icons/cg';
import { FaCalculator } from 'react-icons/fa';
import { IoIosContact, IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
export const SidebarAdmin = ({ button, value }) => {

    const navigate = useNavigate()
    const LogoutButton = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        alert("Apakah anda yakin ingin logout?")
        navigate('/login'); // Navigate to the login page
      }; 

    const menu = [
        { name: "Tambah", icon: <IoMdAdd className={` text-green-500 text-xl`} />, onclick: button },
        { name: "Account", icon: <BiGridAlt /> },
        { name: "Card", icon: <BiGridAlt /> },
        { name: "Contact", icon: <IoIosContact /> },
        { name: "Loan Calculator", icon: <FaCalculator /> },
        { name: "Logout", icon: <CgLogOut size={20} className='text-red-500' />, onclick: LogoutButton}
    ];

    

    return (
        <div className='h-screen border-r border-gray-200 bg-sky-100 w-64 px-9'>
            <div className='flex justify-center p-4 text-3xl'>
                Dashboard
            </div>
            <div className='space-y-16 py-10'>
                <div>
                    <div className='mb-4'>Menu</div>
                    <ul>
                        {menu.map((val, index) => (
                            <li
                                className='mb-4 flex items-center gap-x-2 cursor-pointer hover:bg-blue-200 rounded-md p-3'
                                key={index}
                                onClick={val.onclick} // Attach onclick handler here
                            >
                                <div className='text-xl font-thin'>{val.icon}</div>
                                <div>{val.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <details className='outline-none gap-3'>
                    <summary className='cursor-pointer'>
                        Scheduled Payments
                    </summary>
                    <div className={`transition-all overflow-hidden`}>
                        <ul>
                            <li className='list-none p-2 w-full bg-red-200 mb-1 rounded-md cursor-pointer '>Pengeluaran</li>
                            <li className='list-none p-2 w-full bg-green-200 mb-1 rounded-md cursor-pointer'>Pemasukan</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
}
