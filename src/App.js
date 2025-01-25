//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./body/home/Home";
import Logo from "./components/logo/logo";
import SideNav from "./body/sideNav/sidenav";
import About from "./body/About/About";
import Projects from "./body/Projects/Projects";
import Contact from "./body/Contact.jsx/Contact";
import Footer from "./body/Footer/Footer";

function App() {
  return (
    <div className="App h-screen overflow-hidden">
      {/* Hello World! */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="logo" element={<Logo/>} />
          <Route path="sideNav" element={<SideNav/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="footer" element={<Footer/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
