import "./style/responsive.css"
import Navbar from './layouts/navbar'
import Pages from './layouts/page';
import {BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
      <Router>
        <Navbar/> 
        <Pages/>
      </Router>
  );
}

export default App;