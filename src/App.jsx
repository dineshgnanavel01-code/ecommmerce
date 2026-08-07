import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { useCart } from "./context/CartContext";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { clearCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCat = category === "All" || item.category === category;
      return matchesSearch && matchesCat;
    });
  }, [search, category]);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderSubmit = () => {
    clearCart();
    setCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient from-slate-50 via-slate-100 to-violet-50 text-slate-900 flex flex-col justify-between antialiased">
      <div>
        <Navbar onOpenCart={() => setCartOpen(true)} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl font-black text-slate-900">Products</h1>
            <div className="w-full sm:w-72">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>
          <CategoryFilter category={category} setCategory={setCategory} />
          <ProductGrid products={filteredProducts} />
        </main>
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onPlaceOrder={handleOrderSubmit}
      />

      <Footer />
    </div>
  );
}

export default App;