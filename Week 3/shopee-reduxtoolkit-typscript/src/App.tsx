import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/components/index.scss";

import { Suspense, lazy } from "react";


const Home = lazy(() => import("./pages/Home"))
const Cart = lazy(() => import("./components/Cart"))
const DetailProduct = lazy(() => import("./pages/DetailProduct"))
const Purchase = lazy(() => import("./components/Purchase"))
const SuccessPage = lazy(() => import("./components/SuccessPage"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Order = lazy(() => import("./pages/Order"))
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail-product/cart" element={<Cart />} />
          <Route path="/login/order/cart" element={<Cart />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/successpage" element={<SuccessPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Suspense>


  );
}

export default App;
