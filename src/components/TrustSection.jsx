import {
  FlaskConical,
  Truck,
  Recycle,
} from "lucide-react";

const trustItems = [
  {
    icon: FlaskConical,
    title: "Lab Tested",
    text: "Every product passes 12-point quality checks before reaching your home.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    text: "On all orders above ₹499, delivered across India in 3–5 days.",
  },
  {
    icon: Recycle,
    title: "Eco Friendly",
    text: "Biodegradable formulas and fully recyclable packaging.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-emerald-50 px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-3">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Icon size={28} className="text-emerald-600" />
              </div>

              <h3 className="text-lg font-semibold text-emerald-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}