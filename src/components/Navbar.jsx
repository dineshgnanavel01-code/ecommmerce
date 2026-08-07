import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = ({ onOpenCart }) => {
  const { totalItems } = useCart();

  return (
    <header className="bg-violet-400 to-indigo-100 shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
      
          <h1 className="text-xl font-bold text-slate-800">
            Agent Store
          </h1>
        </div>

        <button
          onClick={onOpenCart}
          className="relative p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
          aria-label="Open Cart">
          <ShoppingBag size={20} />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;