import Image from "next/image";

export default function MoreAboutUs() {
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
              MORE ABOUT US
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              We Are An Ayurvedic Hospital, Providing Hope & Healing Through
              Ayurveda
            </h2>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg">
              We are a dedicated Ayurvedic Cancer Care Hospital committed to
              providing natural, holistic, and personalized healing to patients
              battling cancer. Our approach blends ancient Ayurvedic wisdom with
              modern medical insights, ensuring compassionate and effective
              treatment for every individual.
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
              <p>
                We focus on restoring balance in the body through herbal
                medicines, Panchakarma therapies, dietary guidance, and
                lifestyle changes — promoting healing from within and enhancing
                overall well-being.
              </p>
              <p>
                We embrace ongoing research and innovation in Ayurvedic
                oncology, striving to bring safe, sustainable, and
                result-oriented care to all our patients.
              </p>
              <p>
                Together, our team of experienced Ayurvedic doctors and
                therapists bring decades of expertise, ensuring each patient
                receives a customized treatment plan designed for long-term
                recovery, rejuvenation, and improved quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
