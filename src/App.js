// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/index/Home";
import Contact from './Pages/index/Contact';
import About from './Pages/index/About';
import MainMenu from './Pages/index/MainMenu';
import ArrayMenu from './Pages/index/ArrayMenu';
import ArrayQ1 from './Pages/Array/ArrayQ1';
import ArrayQ2 from './Pages/Array/ArrayQ2';
import ArrayQ3 from './Pages/Array/ArrayQ3';
import StringMenu from './Pages/index/StringMenu';
import NotFound from "./Pages/index/NotFound";
import { useState } from "react";



function App() {

  // const [activeMainMenuItem, setActiveMainMenuItem] = useState("");
  // console.log("activeMainMenuItem", activeMainMenuItem);
 

  // function setMainMenuActivity(item) {

  //   //stuck on how to make this state work
  //   //Im calling props state on my buttons in Mainmenu
  //   //Then I thought I could write some kind of if statement to navigate to the route I want
  //   if (item === "Array") {
  //     return <Routes>
  //       <Route path='/array-menu' element={<ArrayMenu/> } /> 
  //     </Routes>
  //   } 

  //   setActiveMainMenuItem(item)

  // }

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
          //I put /* to make this dymanic, so in the url I can write /main-menu then /array-menu then I am taken to the ArrayMenu component
          path="/main-menu/*"
          element={<MainMenu />}
        />
        {/* //declared my Array file path in my route */}
        <Route path="/main-menu/array-menu" element={<ArrayMenu />} />
        <Route path="/main-menu/array-menu/arrayQ1" element={<ArrayQ1 />} />
        <Route path="/main-menu/array-menu/arrayQ2" element={<ArrayQ2 />} />
        <Route path="/main-menu/array-menu/arrayQ3" element={<ArrayQ3 />} />
        <Route path="/main-menu/string-menu" element={<StringMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
