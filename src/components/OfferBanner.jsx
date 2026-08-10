import { ShoppingBag } from "lucide-react";

export default function OfferBanner({ onAddToCart }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-700 p-8 text-center sm:p-12">
        <h2 className="heading-font text-3xl font-bold text-white">
          Bundle & Save 20%
        </h2>

        <p className="mt-4 text-emerald-100">
          Pick any 3 products and use code ARISAN20 at checkout.
          Limited time offer!
        </p>

        <button
          onClick={() => onAddToCart("Bundle Pack")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-emerald-800 shadow-lg transition hover:scale-105"
        >
          <ShoppingBag size={18} />

          Shop the Bundle
        </button>
      </div>
    </section>
  );
}