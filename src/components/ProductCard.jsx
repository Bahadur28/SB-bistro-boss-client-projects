import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500">{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-3 block w-full bg-yellow-500 text-white py-2 rounded text-center hover:bg-yellow-600 transition"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

