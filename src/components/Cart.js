import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
const Cart = (props) => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((Cart) => (
              <div className="cart" key={Cart.id}>
                <span className="cart-image">
                  <img src={Cart.image} alt="Image" />
                </span>
                <span className="cart-product-name">{Cart.name}</span>
                <span className="cart-product-price">${Cart.price}.00</span>
                <span className="inc">+</span>
                <span className="product-quantity">{Cart.qty}</span>
                <span className="dec">-</span>
                <span className="product-total-price">500.00</span>
                <span className="delete-product">Delete</span>
              </div>
            ))
          : "your cart is empty"}
      </div>
    </div>
  );
};
export default Cart;
