import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import Banner from "./Banner";

const Products = (props) => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container">
      <Banner />
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt="Image" />
            </div>
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}.00</div>
            </div>

            <div className="add-to-cart">Add to Cart</div>
            {product.status === "Hot" ? <div className="hot">Hot</div> : ""}
            {product.status === "New" ? <div className="new">New</div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
