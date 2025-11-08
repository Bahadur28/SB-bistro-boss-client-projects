import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";
import StripeCheckout from "../components/StripeCheckout";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return acc + priceNumber * item.quantity;
  }, 0);

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col">
        <div className="max-w-4xl mx-auto px-4 py-8 flex-grow">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <p>Cart is empty!</p>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img src={product.img} alt={product.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>{product.price} x {product.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>

        <div className="mt-6 flex justify-between items-center">
  <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
  <StripeCheckout total={totalPrice} />
</div>


      </div>
      <Footer />
    </div>
  );
}

export default Cart;
