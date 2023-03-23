// import "./App.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import Register from "./components/Register";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import { createContext, useState } from "react";
import Purchase from "./components/Purchase";
import SuccessPage from "./components/SuccessPage";
import Login from "./components/Login";

export const CartContext = createContext();
const App = () => {
  const [cart, setCart] = useState([]);
  console.log("app:", cart);
  return (
    <BrowserRouter>
      <CartContext.Provider value={setCart}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/purchase" element={<Purchase/>} />
          <Route path="/successpage" element={<SuccessPage/>} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
