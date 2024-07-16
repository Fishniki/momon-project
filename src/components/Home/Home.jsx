// Home.js
import Sidebar from '../Navbar/Sidebar';
import Page1 from './Page1';
import { Page2 } from './Page2';

export const Home = () => {
  return (
    <div >
      <Sidebar props={null} />  
      <Page1/>
      <Page2/>

    </div>
  );
}

export default Home;
