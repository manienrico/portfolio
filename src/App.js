//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./body/home/Home";
import Logo from "./components/logo/logo";

function App() {
  return (
    <div className="App">
      Hello World!
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="logo" element={<Logo/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
