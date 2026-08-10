import { useMemo, useState } from "react";

import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import CategoryNav from "./components/CategoryNav";
import ProductSection from "./components/ProductSection";
import OfferBanner from "./components/OfferBanner";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";

import { products } from "./data/products";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [cartCount, setCartCount] = useState(0);

  const [toast, setToast] = useState("");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const addToCart = (productName) => {
    setCartCount((currentCount) => currentCount + 1);

    setToast(`${productName} added to cart!`);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#f9fbf9]">
      <Hero cartCount={cartCount} />

      <TrustStrip />

      <CategoryNav
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProductSection
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <OfferBanner onAddToCart={addToCart} />

      <Testimonials />

      <TrustSection />

      <Footer onAddToCart={addToCart} />

      {/* Toast */}
      {toast && (
        <div className="toast fixed bottom-6 right-6 z-50 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-2xl">
          ✓ {toast}
        </div>
      )}
    </div>
  );
}