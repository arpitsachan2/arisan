import {
  ShieldCheck,
  Truck,
  Leaf,
  Star,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    text: "Lab Tested Formulas",
  },
  {
    icon: Truck,
    text: "Free Delivery ₹499+",
  },
  {
    icon: Leaf,
    text: "100% Biodegradable",
  },
  {
    icon: Star,
    text: "50,000+ Happy Homes",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-emerald-50 px-6 py-5">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-center sm:gap-8">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-medium text-emerald-800"
            >
              <Icon size={18} />

              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}