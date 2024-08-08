import { SidebarAdmin } from './Sidebar'
import { RightConten } from './conten/right-conten'
import ContentLeft from './conten/left-content'
import { useState } from 'react'



function DashboardUser (){

  const[button, setButton] = useState(true)
  const handleClick = () => {
    setButton(!button)
  }

  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
        <SidebarAdmin button={handleClick} value={button}/>
        <ContentLeft button={handleClick} value={button}/>
        <RightConten/>
    </div>
  )
}

export default DashboardUser
