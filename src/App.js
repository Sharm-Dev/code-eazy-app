// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import Home from "./Pages/index/Home";
import Contact from './Pages/index/Contact';
import About from './Pages/index/About';
import MainMenu from './Pages/index/MainMenu';
import ArrayMenu from './Pages/Array/ArrayMenu';
import ArrayNumbers from './Pages/Array/ArrayNumbers'
import { useState } from "react";


function App() {
  //A State Variable
  const [activeMainMenuItem, setActiveMainMenuItem] = useState("");
  console.log("activeMainMenuItem", activeMainMenuItem);
  //Function with item inside and then state is called inside with the same item name
  function setMainMenuActivity(item) {
    setActiveMainMenuItem(item)
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/main-menu"
          element={
            <MainMenu
              //For the Mainmenu page, I have given main menu page access to a variable/container that holds the function called setMainMenuActivity with an item that I have declared in the called functions below
              setMainMenuActivityArray={() => setMainMenuActivity("Array")}
              setMainMenuActivityString={() => setMainMenuActivity("String")}
              setMainMenuActivityObject={() => setMainMenuActivity("Object")}
            />
          }
        />
        <Route
          //Change pathname
          path="/Array-menu"
          //For the ArrayMenu page I made a container compenent called active and gave it access to the function
          element={<ArrayMenu active={activeMainMenuItem} />}
        />
        <Route path="/array-numbers/:arrayId" element={<ArrayNumbers />} />
      </Routes>
    </Router>
  );
}

export default App;
