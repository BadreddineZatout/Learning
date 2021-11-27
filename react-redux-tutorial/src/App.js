import "./Styles/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from './Components/blogs/Create'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from "./Components/NotFound";
import Blog from "./Components/blogs/Show";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<Blog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
