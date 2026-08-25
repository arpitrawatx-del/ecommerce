import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import WishlistButton from "../../components/wishlist/WishlistButton";

import iphoneImage from "../assets/images/iphone.png";
import samsungImage from "../assets/images/samsung.png";
import macbookImage from "../assets/images/macbook.png";
import hpImage from "../assets/images/hp.png";
import nokiaImage from "../assets/images/nokia.png";
import chargerImage from "../assets/images/charger.png";
import cableImage from "../assets/images/cable.png";
import coverImage from "../assets/images/cover.png";

const products = [
  {
    id: 1,
    title: "iPhone",
    price: 70000,
    category: "Mobile",
    image: iphoneImage,
  },
  {
    id: 2,
    title: "Samsung S24",
    price: 130000,
    category: "Mobile",
    image: samsungImage,
  },
  {
    id: 3,
    title: "MacBook",
    price: 145000,
    category: "Laptop",
    image: macbookImage,
  },
  {
    id: 4,
    title: "HP Laptop",
    price: 70000,
    category: "Laptop",
    image: hpImage,
  },
  {
    id: 5,
    title: "NOKIA",
    price: 6000,
    category: "Mobile",
    image: nokiaImage,
  },
  {
    id: 6,
    title: "Charger",
    price: 600,
    category: "Mobile-accessories",
    image: chargerImage,
  },
  {
    id: 7,
    title: "Data Cable",
    price: 1000,
    category: "Mobile-accessories",
    image: cableImage,
  },
  {
    id: 8,
    title: "Mobile-Cover",
    price: 6000,
    category: "Mobile",
    image: coverImage,
  },

];

export default function Product() {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const item = cartItems.find((item) => item.id === product.id);

    if (!item) {
      addToCart(product);
      alert(`${product.title} add to cart!`);
    } else if (item.quantity < 5) {
      addToCart(product);
      alert(`${product.title} added to cart!`);
    } else {
      alert("Already Added! Maximum quantity is 5.");
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const item = cartItems.find((item) => item.id === product.id);
            const quantity = item ? item.quantity : 0;

            return (
              <Link
                to={`/ProductDetails/${product.id}`}
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-5 flex flex-col hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:-translate-y-1"
              >
                <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 mb-4 flex items-center justify-center h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-300"
                  />
                </div>

                <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                  {product.title}
                </h2>

                <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-2">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mb-4 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full w-fit">
                  {product.category}
                </p>

                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity >= 5}
                >
                  {quantity >= 5 ? "Already Added" : "Add to Cart"}
                </button>
                <div className="mt-3">
                  <WishlistButton product={product} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}