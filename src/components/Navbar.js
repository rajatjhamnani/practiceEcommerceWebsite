import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

const Navbar = (props) => {
  const { qty } = useContext(CartContext);

  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Buy Buddy Store</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="cart">
            <span className="shoppingCart">
              <button>Cart</button>
            </span>
            <span className="cartCount">{qty}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
