import { useWishlist } from "../../context/WishlistContext";

export default function WishlistCard({ product }) {
  const { removeFromWishlist } = useWishlist();

  const handleRemove = () => {
    removeFromWishlist(product.id);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 flex flex-col hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:-translate-y-1">
      <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 mb-4 flex items-center justify-center h-48">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{product.title}</h2>
      <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-2">
        ₹{product.price.toLocaleString("en-IN")}
      </p>
      <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-4 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full w-fit">
        {product.category}
      </p>
      <button
        onClick={handleRemove}
        className="mt-auto bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2.5 rounded-xl font-medium hover:from-rose-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
      >
        Remove from Wishlist
      </button>
    </div>
  );
}
