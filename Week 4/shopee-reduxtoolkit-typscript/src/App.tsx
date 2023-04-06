import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/index.scss";

import { Suspense, lazy } from "react";


const Home = lazy(() => import("./pages/Home"))
const Cart = lazy(() => import("./pages/Cart"))
const DetailProduct = lazy(() => import("./pages/DetailProduct"))
const Purchase = lazy(() => import("./pages/Purchase"))
const SuccessPage = lazy(() => import("./pages/SuccessPage"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Order = lazy(() => import("./pages/Order"))

const Admin = lazy(() => import("./pages/Admin"))


const Test = lazy(() => import("./components/TestComponent"))

function App() {
  return (
    <>
      {/* <a href="" data-testid="mylink">Đăng kí</a> */}
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
            <Route path="/login/user/order" element={<Order />} />
            <Route path="/login/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />

            {/* testing */}
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>


  );
}

export default App;
