import "./style/responsive.css"
import Navbar from './layouts/navbar'
import Pages from './layouts/page';
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Navbar/> 
        <Pages/>
      </BrowserRouter>
  );
}

export default App;