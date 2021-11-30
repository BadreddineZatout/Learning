import {Route, Routes} from 'react-router-dom';
import Create from '../Components/blogs/Create';
import Blog from '../Components/blogs/Show';
import Home from '../Components/Home';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import Profile from '../Components/Profile';
const Web = () => {
    return ( 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/blogs/:id' element={<Blog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
     );
}
 
export default Web;