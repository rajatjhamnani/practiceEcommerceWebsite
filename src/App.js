import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact Component={Products} />
            <Route path="/cart" exact Component={Cart} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
