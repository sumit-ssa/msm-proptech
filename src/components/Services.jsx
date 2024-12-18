import { Home, Key, TrendingUp, Scale } from "lucide-react";

const services = [
  {
    title: "Residential & Commercial Sales",
    description:
      "Expert guidance in buying and selling properties for homes and businesses.",
    icon: Home,
  },
  {
    title: "Rentals & Leasing",
    description:
      "Comprehensive support for property rentals and lease agreements.",
    icon: Key,
  },
  {
    title: "Property Investment Advice",
    description:
      "Strategic counsel to maximize your real estate investment returns.",
    icon: TrendingUp,
  },
  {
    title: "Legal & Financial Consultation",
    description:
      "Professional advice on legal and financial aspects of real estate transactions.",
    icon: Scale,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-100"
      id="services"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-primary mb-4">
                <service.icon size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
