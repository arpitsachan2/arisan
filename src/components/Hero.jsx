import { ShoppingCart } from "lucide-react";

export default function Hero({ cartCount }) {
  return (
    <header className="relative min-h-[560px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern kitchen interior"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-800/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <h2 className="heading-font text-[28px] font-black text-white">
          Arisan
        </h2>

        <button
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-lg transition hover:scale-105"
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <ShoppingCart size={18} />

          <span>{cartCount}</span>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
        <p className="fade-in text-sm uppercase tracking-[0.25em] text-emerald-300">
          Premium Home Care
        </p>

        <h1 className="heading-font fade-in-delay-1 mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-[52px]">
          Clean Spacesww, Clear Minds.
        </h1>

        <p className="fade-in-delay-2 mt-5 max-w-lg text-base leading-7 text-emerald-100 md:text-lg">
          India's fastest-growing cleaning brand. Trusted by 50,000+ households
          for powerful, eco-conscious formulas.
        </p>

        <a
          href="#products"
          className="fade-in-delay-3 mt-10 inline-block rounded-full bg-emerald-500 px-10 py-4 font-bold text-white shadow-xl transition hover:bg-emerald-400 hover:shadow-2xl"
        >
          Explore Products
        </a>
      </div>
    </header>
  );
}