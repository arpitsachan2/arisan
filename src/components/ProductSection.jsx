import ProductCard from "./ProductCard";

export default function ProductSection({
  products,
  onAddToCart,
}) {
  return (
    <section id="products" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-font mb-4 text-center text-3xl font-bold text-emerald-900">
          Our Collection
        </h2>

        <p className="mx-auto mb-14 max-w-xl text-center text-gray-500">
          Powerful cleaning that's gentle on your home and the planet.
        </p>

        {products.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white px-6 py-16 text-center">
            <p className="text-gray-500">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}