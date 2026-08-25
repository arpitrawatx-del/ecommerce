import products from "../../services/api";

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function searchProducts(query) {
  if (!query) return products;
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
}

export default { getProducts, getProductById, getProductsByCategory, searchProducts };
