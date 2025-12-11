import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  parentPage?: string;
  currentPage: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  parentPage = "Home",
  currentPage,
}: HeroSectionProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-teal-900/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl font-light text-white/90 mb-6 max-w-2xl">
          {subtitle}
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm md:text-base text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            {parentPage}
          </Link>
          <span>/</span>
          <span className="font-semibold text-white">{currentPage}</span>
        </div>
      </div>
    </section>
  );
}
