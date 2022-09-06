// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";
import Home from "./Pages/index/Home";
import Contact from './Pages/index/Contact';
import About from './Pages/index/About';
import MainMenu from './Pages/index/MainMenu';
import ArrayMenu from './Pages/Array/ArrayMenu';
import ArrayNumbers from './Pages/Array/ArrayNumbers'


function App() {
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
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/array-menu" element={<ArrayMenu />} />
        <Route path="/array-numbers/:arrayId" element={<ArrayNumbers />} />
      </Routes>
    </Router>
  );
}

export default App;
