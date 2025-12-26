import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MoreAboutUs({ dictionary }: { dictionary: any }) {
  const { label, heading, description, details } = dictionary.moreAboutUs;

  return (
    <section className="relative py-20 px-4 md:px-8 font-sans overflow-hidden">
      {/* Watermark 'S' - Positioned behind text content */}
      {/* <span className="absolute top-20 right-0 lg:right-20 text-[400px] leading-none font-bold text-teal-900/5 select-none z-0 pointer-events-none">
        S
      </span> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
        {/* Left Column: Single Tall Image */}
        <div className="relative h-[500px] lg:h-[900px] w-full rounded-[40px] overflow-hidden shadow-xl">
          <Image
            src="/images/Rectangle 19.svg" // Placeholder for Blue Hallway
            alt="Hospital Hallway"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          {/* Header Section */}
          <div className="mb-10">
            <h3 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-4">
              {label}
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              {heading}
            </h2>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Inner Content Row: Image + Text Details */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
            {/* Inner Image */}
            <div className="relative h-64 md:h-full min-h-[250px] w-full lg:w-[440px] rounded-[30px] overflow-hidden shadow-2xl lg:-ml-55 z-20">
              <Image
                src="/images/Rectangle 20.svg" // Placeholder for Corridor/Window
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Detail Texts */}
            <div className="flex flex-col gap-3 text-gray-500 text-sm leading-relaxed">
              {details.map((detail: string, index: number) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
