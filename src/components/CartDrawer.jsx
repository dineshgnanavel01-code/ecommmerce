import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, onClose, onCheckout }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40">
      <button
        className="absolute inset-0"
        aria-label="Close cart"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Your Shopping Cart</h2>
            <p className="text-sm text-slate-500">{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 rounded-xl border border-slate-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500";
                  }}
                />

                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <h4 className="font-semibold text-sm text-slate-800">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <p className="text-indigo-600 font-bold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="text-sm font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-slate-200 p-5 space-y-3">
            <div className="flex justify-between font-bold text-slate-900">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;