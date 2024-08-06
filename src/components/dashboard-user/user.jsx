import { SidebarAdmin } from './Sidebar'
import { RightConten } from './conten/right-conten'
import ContentLeft from './conten/left-content'



function DashboardUser (){
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
        <SidebarAdmin/>
        <ContentLeft/>
        <RightConten/>
    </div>
  )
}

export default DashboardUser
