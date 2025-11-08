import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-600">SB Bistro Boss Restaurant</div>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link to="/cart" className="text-gray-700 hover:text-yellow-600">
            Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

