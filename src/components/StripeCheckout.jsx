function StripeCheckout({ total }) {
  const handleCheckout = () => {
    alert(`Redirecting to Stripe Checkout for $${total.toFixed(2)}`);
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Pay ${total.toFixed(2)}
    </button>
  );
}

export default StripeCheckout;
