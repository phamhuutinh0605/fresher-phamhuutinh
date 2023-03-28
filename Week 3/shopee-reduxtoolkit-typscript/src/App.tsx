import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './components/Cart';
import "./scss/components/index.scss";
import Purchase from './components/Purchase';
import SuccessPage from "components/SuccessPage";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/successpage" element={<SuccessPage />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
