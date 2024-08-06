import { useState } from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { FaCalculator } from 'react-icons/fa'
import { IoIosContact, IoIosHome, IoMdSettings } from 'react-icons/io'

export const SidebarAdmin = () => {
    const menu = [
        {name : "Home", icon: <IoIosHome />},
        {name : "Account", icon: <BiGridAlt />},
        {name : "Card", icon: <BiGridAlt />},
        {name : "Contact", icon: <IoIosContact />},
        {name : "Loan Calculator", icon: <FaCalculator/>},
        {name : "Setting", icon: <IoMdSettings/>}
    ]

    // const schdulePayment = ['Pengeluaran', "Pemasukan"]

    const[dropdowm, setDropdown] = useState(true)

    
    return (
        <div className='h-screen border-r border-gray-200 w-64 px-9'>
            <div className='flex justify-center p-4 text-3xl'>
                Dashboard
            </div>
            <div className='space-y-20 py-10'>
                <div>
                    <div className='mb-4'>Menu</div>
                    <ul>
                        {menu.map((val, index) => {
                            return <li className='mb-7 flex items-center gap-x-2' key={index}>
                                <div className='text-xl font-thin'>{val.icon}</div>
                                <div>{val.name}</div>
                            </li>
                        })}
                    </ul>
                </div>

                {/* <div>
                    <div className='text-xl'>Schduled Payments</div>
                    <select name="" id="" className='border-none outline-none w-full py-2 bg-sky-100 transition-transform duration-300 ease-in-out hover:bg-sky-200 focus:ring-2 focus:ring-sky-300'>
                        {schdulePayment.map((val, index) => {
                            return (
                            <option key={index} value={val} className='py-2 w-full  transition-all duration-200'>
                                {val}
                            </option>
                            )
                        })}
                    </select>
                </div> */}

                <div className='h-10 h- bg-red-50 cursor-pointer py-2'>
                    <div className='text-center' onClick={() => setDropdown(!dropdowm)}>Schduled Payments</div>
                    <ul className={`${dropdowm ? '-mt-96 hidden' : 'block mb-96 transition-all duration-200'}`}>
                        <li className='py-2 w-full bg-red-200  text-center'>Pengeluaran</li>
                        <li className='py-2 w-full bg-red-200  text-center'>Pemasukan</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
