import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import HomePage from "./Component/NavComponent/HomePage";
import About from "./Component/About";
import Contect from "./Component/Contect";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <div className="">
<Header/>    
<NavBar/>

<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contect' element={<Contect/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/Login' element={<Login/>}/>
</Routes>



<Footer/>

  </div>
  );
}

export default App;
