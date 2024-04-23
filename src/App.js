import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Homepage/>}></Route>
          <Route path = "/Login" element = {<Login/>}></Route>
          <Route path = "/Register" element = {<Register/>}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
