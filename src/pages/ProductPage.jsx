import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";


function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.img} alt={product.name} className="w-full md:w-1/2 rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Add to Cart
          </button>
          <div className="mt-4">
            <Link to="/" className="text-blue-500 hover:underline">
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
