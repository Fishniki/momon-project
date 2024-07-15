// Home.js
import Sidebar from '../Navbar/Sidebar';
import Page1 from './Page1';

export const Home = () => {
  return (
    <div>
      <Sidebar props={null} />  
      <Page1/>
    </div>
  );
}

export default Home;
