import "./Styles/App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Web from "./routes/route";
import Navbar from "./Components/Navbar";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user';
import themeReducer from "./features/theme";
import { Provider } from "react-redux";

//redux store first methode

/* const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
}); */

//redux store second methode
import store from "./redux/store";

function App() {
  
  return (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Web />
        </div>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
