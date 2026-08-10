import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  product,
  onAddToCart,
}) {
  return (
    <article className="product-card flex flex-col overflow-hidden rounded-3xl bg-white">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-amber-400">
          <span>
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>

          <span className="ml-1 text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Product name */}
        <h3 className="heading-font mt-2 text-lg font-bold text-emerald-900">
          {product.name}
        </h3>

        {/* Benefits */}
        <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
          {product.benefits}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-emerald-600">
            ₹{product.price}
          </p>

          <button
            onClick={() => onAddToCart(product.name)}
            className="flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
          >
            <ShoppingCart size={16} />

            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  );
}