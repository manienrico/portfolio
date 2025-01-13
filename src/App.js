//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World!
      <BrowserRouter>
        <Routes>
          <Route path="/" element={{}} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
