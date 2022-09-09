// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import Home from "./Pages/index/Home";
import Contact from './Pages/index/Contact';
import About from './Pages/index/About';
import MainMenu from './Pages/index/MainMenu';
import ArrayMenu from './Pages/index/ArrayMenu';
import ArrayQ1 from './Pages/Array/ArrayQ1';
import ArrayQ2 from './Pages/Array/ArrayQ2';
import ArrayQ3 from './Pages/Array/ArrayQ3';
import { useState } from "react";



function App() {

  const [activeMainMenuItem, setActiveMainMenuItem] = useState("");
  console.log("activeMainMenuItem", activeMainMenuItem);

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
              setMainMenuActivityArray={() => setMainMenuActivity("Array")}
              setMainMenuActivityString={() => setMainMenuActivity("String")}
              setMainMenuActivityObject={() => setMainMenuActivity("Object")}
            />
          }
        />
        <Route
          path="/array-menu"
          element={<ArrayMenu active={activeMainMenuItem} />}
        />
        <Route
          path="/arrayQ1"
          element={<ArrayQ1 active={activeMainMenuItem} />}
        />
        <Route
          path="/arrayQ2"
          element={<ArrayQ2 active={activeMainMenuItem} />}
        />
        <Route
          path="/arrayQ3"
          element={<ArrayQ3 active={activeMainMenuItem} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
