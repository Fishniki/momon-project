// Home.js
import { useState } from 'react';
import Sidebar from '../Navbar/Sidebar';
import Page1 from './Page1';
import { Page2 } from './Page2';

export const Home = () => {

  const [keuangan, setSisebar] = useState(true)
  const handleSidebar = () => {
    setSisebar(!keuangan)
  }


  return (
    <div >
      <Sidebar keuangan={keuangan} onClick={handleSidebar}/>  
      <Page1/>
      <Page2/>

    </div>
  );
}

export default Home;
