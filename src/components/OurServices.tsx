import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 14.svg", // Using existing placeholder
    link: "#",
  },
  {
    id: 2,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 15.svg", // Using existing placeholder
    link: "#",
  },
  {
    id: 3,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 18.svg", // Using existing placeholder
    link: "#",
  },
  {
    id: 4,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 19.svg", // Using existing placeholder
    link: "#",
  },
  {
    id: 5,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 20.svg", // Using existing placeholder
    link: "#",
  },
  {
    id: 6,
    title: "Services 1",
    description:
      "Nec tristiqu sed rutrum fringilla. it egestas fringilla condimentum purus.",
    image: "/images/Rectangle 14.svg", // Reusing placeholder
    link: "#",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            Our Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
            Our Ayurvedic Clinic Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-emerald-700 transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full flex justify-center">
                  <span className="bg-[#118B9A] text-white font-semibold py-2 px-8 rounded-md text-lg shadow-md whitespace-nowrap z-10">
                    {service.title}
                  </span>
                </div>
              </div>

              <div className="pt-12 pb-8 px-6 text-center flex flex-col items-center grow">
                <p className="text-gray-700 mb-6 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#118B9A] font-bold hover:text-[#0e5c66] transition-colors mt-auto uppercase text-sm"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
