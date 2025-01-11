import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import HomePage from "./Component/NavComponent/HomePage";
import About from "./Component/About";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import { Route, Routes } from "react-router-dom";
import Allproduct from "./Component/NavComponent/Allproduct";
import { useState } from "react";
import ProductDetails from "./Component/NavComponent/ProductDetails";
import ProductDetails2 from "./Component/NavComponent/ProductDetails2";
import Contectsection from "./Component/NavComponent/Contectsection";
import Cart from "./Component/Cart";

function App() {
  const [IsLogin, setIsLogin] = useState(false)
  const [cart, setCart] = useState([]);


  return (
  <div className="">
<Header/>    
<NavBar IsLogin ={IsLogin} />

<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/products' element={<Allproduct/>}/>
<Route path='/contect' element={<Contectsection/>}/>
<Route path='/SignUp' element={<SignUp   setIsLogin={setIsLogin} />}/>
<Route path='/Login'  element={<Login  setIsLogin={setIsLogin} />}/>
<Route path='/product/:id'  element={<ProductDetails cart={cart} setCart={setCart}/>}/>
<Route path='/products/:id'  element={<ProductDetails2 />}/>
<Route path='/cart'  element={<Cart cart={cart} />}/>

</Routes>

<Footer/>

  </div>
  );
}

export default App;
