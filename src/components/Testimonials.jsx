const testimonials = [
  {
    text: "Arisan's floor cleaner leaves my marble floors gleaming without any sticky residue. Switched from my old brand and never looking back!",
    author: "Priya S., Mumbai",
  },
  {
    text: "The detergent powder is incredible — my whites are actually white again. And the fragrance lasts so long on clothes!",
    author: "Rahul M., Delhi",
  },
  {
    text: "Finally a hand wash that doesn't dry out my skin. The aloe formula is perfect for my kids too. We use it in every bathroom now.",
    author: "Anjali K., Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="heading-font mb-14 text-center text-3xl font-bold text-emerald-900">
          Loved by Thousands
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.author}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-3 text-lg text-amber-400">
                ★★★★★
              </div>

              <p className="italic leading-7 text-gray-700">
                "{review.text}"
              </p>

              <p className="mt-4 font-semibold text-emerald-800">
                — {review.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}