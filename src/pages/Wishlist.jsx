import { useWishlist } from "../../context/WishlistContext";
import WishlistCard from "../../components/wishlist/WishlistCard";

export default function Wishlist() {
  const { wishlistItems } = useWishlist();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-2">Your wishlist is empty.</p>
            <p className="text-slate-400 dark:text-slate-500">Start adding products you love!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <WishlistCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
