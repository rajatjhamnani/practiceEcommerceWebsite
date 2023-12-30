import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <ul className="left">
        <li>
          <a href="">Buy Buddy Store</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="">
            <span className="shoppingCart">
              <button>Cart</button>
            </span>
            <span className="cartCount">0</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
