import './App.css'
// import Data from './pages/Data';
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Typo from './pages/Typo';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route  path = "/"
            element = {<Home/>}/>
          <Route path="/home"
            element = {<Home/>}/>    
        <Route
            path = "/fa"
            element = {<Typo/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
