import { useParams, Link } from "react-router-dom";
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
    description:
      "Latest iPhone with advanced features, stunning display, and powerful performance.",
  },
  {
    id: 2,
    title: "Samsung S24",
    price: 130000,
    category: "Mobile",
    image: samsungImage,
    description:
      "Latest Samsung with cutting-edge technology and premium design.",
  },
  {
    id: 3,
    title: "MacBook",
    price: 145000,
    category: "Laptop",
    image: macbookImage,
    description:
      "Latest MacBook with Apple silicon for incredible performance.",
  },
  {
    id: 4,
    title: "HP Laptop",
    price: 70000,
    category: "Laptop",
    image: hpImage,
    description:
      "Affordable HP laptop for everyday computing needs.",
  },
  {
    id: 5,
    title: "Nokia ",
    price: 70000,
    category: "Mobile",
    image: nokiaImage,
    description:
      "Affordable HP laptop for everyday computing needs.",
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

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold">Product not found</h1>

        <Link
          to="/Product"
          className="text-indigo-600 hover:text-indigo-700 mt-4 inline-block font-medium"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const item = cartItems.find((item) => item.id === product.id);
  const quantity = item ? item.quantity : 0;

  const handleAddToCart = () => {
    if (!item) {
      addToCart(product);
      alert(`${product.title} add to cart!`);
    } else if (quantity < 5) {
      addToCart(product);
      alert(`${product.title} added to cart!`);
    } else {
      alert("Already Added! Maximum quantity is 5.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-5">
      <div className="container mx-auto">
        <Link
          to="/Product"
          className="text-indigo-600 hover:text-indigo-700 mb-4 inline-flex items-center gap-2 font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md h-auto object-contain mx-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                {product.title}
              </h1>

              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-center"
                  disabled={quantity >= 5}
                >
                  {quantity >= 5 ? "Already Added" : "Add to Cart"}
                </button>

                <div className="sm:w-auto">
                  <WishlistButton product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}