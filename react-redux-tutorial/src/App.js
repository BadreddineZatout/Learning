import "./Styles/App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Web from "./routes/route";
import Navbar from "./Components/Navbar";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Web />
        </div>
      </div>
    </Router>
  );
}

export default App;
