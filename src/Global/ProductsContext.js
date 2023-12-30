import React, { createContext, useState } from "react";
import bag from "../assets/bag.jpg";
import camera from "../assets/camera.jpg";
import laptop from "../assets/laptop.jpg";
import lock from "../assets/lock.jpg";
import photoFrame from "../assets/photoFrame.jpg";
import ring from "../assets/ring.jpg";
import wallet from "../assets/wallet.jpg";
import watch from "../assets/watch.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const items = [
    { id: 1, name: "Bag", price: 200, image: bag, status: "Hot" },
    { id: 2, name: "Camera", price: 500, image: camera, status: "New" },
    { id: 3, name: "Laptop", price: 1000, image: laptop, status: "Hot" },
    { id: 4, name: "Lock", price: 20, image: lock, status: "New" },
    { id: 5, name: "Photo Frame", price: 30, image: photoFrame, status: "Hot" },
    { id: 6, name: "Ring", price: 2000, image: ring, status: "New" },
    { id: 7, name: "Wallet", price: 150, image: wallet, status: "Hot" },
    { id: 1, name: "Watch", price: 200, image: watch, status: "Hot" },
  ];
  const [products] = useState(items);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
