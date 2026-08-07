import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={product.image || "/src/assets/tee.jpg"}
          alt={product.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "/src/assets/tee.jpg";
          }}
        />
      </div>

      <div className="p-5 flex min-h-210px flex-col justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-700">
            {product.category}
          </span>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            {product.name}
          </h3>

          <Rating rating={product.rating} />
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;