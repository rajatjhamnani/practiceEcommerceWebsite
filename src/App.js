import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <div className="container">
          <Products />
        </div>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
