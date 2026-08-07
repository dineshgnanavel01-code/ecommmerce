import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";

const initialForm = {
  name: "",
  email: "",
  address: "",
  paymentMethod: "Cash on Delivery",
};

const CheckoutModal = ({ open, onClose, onPlaceOrder }) => {
  const [formData, setFormData] = useState(initialForm);
  const { cart, totalPrice } = useCart();
  const subtotal = totalPrice;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  useEffect(() => {
    if (!open) {
      setFormData(initialForm);
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPlaceOrder?.(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-xl z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-black text-slate-900">Checkout</h3>
            <p className="text-sm text-slate-500">Enter your shipping details to complete the order.</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Tax</span>
              <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Total</span>
              <span className="text-indigo-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>PayPal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;