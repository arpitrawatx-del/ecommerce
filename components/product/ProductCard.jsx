import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import { formatCurrency } from "../../utils/currency";
import WishlistButton from "../wishlist/WishlistButton";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/ProductDetails/${product.id}`}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
    >
      <ProductImage src={product.image} alt={product.title} />
      <h2 className="text-lg font-semibold mt-3 text-gray-800">{product.title}</h2>
      <p className="text-green-600 font-medium">
        {formatCurrency(product.price)}
      </p>
      <p className="text-sm text-red-500">{product.category}</p>
      <WishlistButton product={product} />
    </Link>
  );
}
