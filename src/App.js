//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./body/home/Home";

function App() {
  return (
    <div className="App">
      Hello World!
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
