import ProductCard from "./ProductCard";
import EmptyState from "../ui/EmptyState";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        message="Try adjusting your filters or search query."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
