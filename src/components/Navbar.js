import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
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
            <span className="cartCount">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
