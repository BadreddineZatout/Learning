import {Route, Routes} from 'react-router-dom';
import Create from '../Components/blogs/Create';
import Blog from '../Components/blogs/Show';
import CakeContainer from '../Components/cakeShop/CakeContainer';
import HooksCakeContainer from '../Components/cakeShop/HooksCakeContainer';
import Home from '../Components/Home';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import Profile from '../Components/Profile';
import UserContainer from '../Components/UserContainer';
import Welcome from '../Components/Welcome';

const Web = () => {
    return ( 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/create' element={<Create />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="cake-shop" element={<CakeContainer />} />
          <Route path="cake-shop" element={<HooksCakeContainer />} />
          <Route path="users" element={<UserContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
     );
}
 
export default Web;