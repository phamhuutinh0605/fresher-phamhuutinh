import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/components/index.scss";

import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"))
const Cart = lazy(() => import("./components/Cart"))
const DetailProduct = lazy(() => import("./pages/DetailProduct"))
const Purchase = lazy(() => import("./components/Purchase"))
const SuccessPage = lazy(() => import("./components/SuccessPage"))
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail-product/cart" element={<Cart />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/successpage" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>


  );
}

export default App;
