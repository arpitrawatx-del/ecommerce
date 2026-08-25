import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Your Cart</h1>
          <h2 className="text-slate-500 dark:text-slate-400 mb-8 text-lg">Your cart is empty.</h2>

          <Link
            to="/Product"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-5">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Your Cart</h1>

          <button
            onClick={clearCart}
            className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3 w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-slate-800 dark:text-white text-lg">{item.title}</h2>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      } else {
                        alert("GAREEB");
                      }
                    }}
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold transition-colors"
                  >
                    -
                  </button>

                  <span className="w-8 text-center font-semibold text-slate-800 dark:text-white">{item.quantity}</span>

                  <button
                    onClick={() => {
                      if (item.quantity < 5) {
                        updateQuantity(item.id, item.quantity + 1);
                      } else {
                        alert("BS HOGYA IS SE JAYDA NHI ");
                      }
                    }}
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <b className="text-slate-800 dark:text-white text-lg">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </b>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 sticky top-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Total Items:</span>
                  <b className="text-slate-800 dark:text-white">
                    {cartItems.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    )}
                  </b>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-slate-800 dark:text-white">Total Price:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/Checkout"
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center p-3.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}