import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-indigo-600 rounded-2xl border border-slate-200">
        <p className="text-slate-500 font-medium text-sm">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;