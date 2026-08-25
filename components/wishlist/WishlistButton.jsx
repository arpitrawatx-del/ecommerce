import { useWishlist } from "../../context/WishlistContext";

export default function WishlistButton({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-2.5 px-4 rounded-xl font-medium transition-all ${
        inWishlist
          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 shadow-md"
          : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
      }`}
    >
      {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
}
