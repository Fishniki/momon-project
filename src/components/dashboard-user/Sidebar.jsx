/* eslint-disable react/prop-types */
import { BiGridAlt } from 'react-icons/bi';
import { FaCalculator } from 'react-icons/fa';
import { IoIosContact, IoMdAdd, IoMdSettings } from 'react-icons/io';

export const SidebarAdmin = ({ button, value }) => {
    const menu = [
        { name: "Tambah", icon: <IoMdAdd className={`${value ? 'text-red-500' : ''} text-green-500 text-xl`} />, onclick: button },
        { name: "Account", icon: <BiGridAlt /> },
        { name: "Card", icon: <BiGridAlt /> },
        { name: "Contact", icon: <IoIosContact /> },
        { name: "Loan Calculator", icon: <FaCalculator /> },
        { name: "Setting", icon: <IoMdSettings /> }
    ];

    return (
        <div className='h-screen border-r border-gray-200 w-64 px-9'>
            <div className='flex justify-center p-4 text-3xl'>
                Dashboard
            </div>
            <div className='space-y-20 py-10'>
                <div>
                    <div className='mb-4'>Menu</div>
                    <ul>
                        {menu.map((val, index) => (
                            <li
                                className='mb-4 flex items-center gap-x-2 cursor-pointer hover:bg-slate-200 p-3'
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
                    <summary
                        className='cursor-pointer mb-2'
                        onClick={button} // Attach onclick handler here
                    >
                        Scheduled Payments
                    </summary>
                    <div className={`${value ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} transition-all overflow-hidden`}>
                        <ul>
                            <li className='list-none p-2 w-full bg-red-200 mb-1 rounded-md'>Pengeluaran</li>
                            <li className='list-none p-2 w-full bg-green-200 mb-1 rounded-md'>Pemasukan</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
}
