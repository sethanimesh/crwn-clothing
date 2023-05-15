import { Outlet } from 'react-router-dom';

import Menu from '../../Components/Menu/menu.component';

const Home = () => {
  return (
    <div>
    <Menu />
    <Outlet />
    </div>
  );
}

export default Home;