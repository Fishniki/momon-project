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

    const schdulePayment = ['Pengeluaran', "Pemasukan"]
    
    return (
        <div className='h-screen border-r border-gray-200 w-64 px-9'>
            <div className='flex justify-center p-4'>
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

                <div>
                    <div>Schduled Payments</div>
                    {schdulePayment.map((val, index) => {
                        return (
                            <div className='flex items-center space-x-2' key={index}>
                                <div className='w-4 h-4 rounded-full border border-gray-300'></div>
                                <div>{val}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
