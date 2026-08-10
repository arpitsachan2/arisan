import { categories } from "../data/products";

export default function CategoryNav({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="sticky top-0 z-20 border-b border-gray-100 bg-white shadow-sm">
      <div className="cat-scroll mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4">
        {categories.map((category) => {
          const active = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`cat-pill whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}