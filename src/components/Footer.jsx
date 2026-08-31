import { ShoppingBag } from "lucide-react";

export default function Footer({ onAddToCart }) {
  return (
    <footer className="bg-emerald-900 px-6 py-16 text-center">
      <h2 className="heading-font text-3xl font-bold text-white">
        Ready for a Cleaner Home?
      </h2>

      {/* <p className="mx-auto mt-4 max-w-md leading-7 text-emerald-200">
        Join 50,000+ Indian households who trust Arisan for a
        spotless, fresh-smelling home every day.
      </p> */}

      <button
        onClick={() => onAddToCart("Bundle Pack")}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-400 hover:scale-105"
      >
        <ShoppingBag size={18} />

        Shop Now
      </button>

      <p className="mt-10 text-sm text-emerald-200/60">
        © 2026 Arisan. All rights reserved.
      </p>
    </footer>
  );
}