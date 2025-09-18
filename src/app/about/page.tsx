"use client";

import HowItWorks from "./HowItWorks";
import MissionSection from "./MissionSection";
import TypewriterComponent from "@/components/typewriter";

export default function About() {
  return (
    <div className="min-h-100vh bg-[#f5f6f2] text-[#1A1A1A]">
      <section className="text-center py-5">
        <h1 className="text-4xl font-bold mb-4">About UrbanSetGo</h1>
        <p className="text-lg text-[#6B7280] max-w-5xl mx-auto">
          At UrbanSetGo, we connect you with trusted professionals for all your
          home and lifestyle needs. From electricians to carpenters, we make
          booking local services quick, eliable and stress-free.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center md:px-5 shadow-lg">
        <div className="  scale-80 grid sm:grid-cols-2 grid-rows-2 rounded-4xl">
          <img
            src="/image/abtplumber.jpg"
            alt=""
            className="p-0.5 rounded-4xl w-full h-full object-cover max-w-sm shadow-lg col-span-1 row-span-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
          <img
            src="/image/abtelec.jpg"
            alt=""
            className="p-0.5 rounded-4xl w-full h-48 object-cover shadow transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
          <img
            src="/image/abtdance.jpg"
            alt=""
            className="p-0.5 rounded-4xl w-full h-full object-cover max-w-sm shadow-lg col-span-1 row-span-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
          <img
            src="/image/abtclean.jpg"
            alt=""
            className="p-0.5 rounded-4xl w-full h-48 object-cover shadow transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
        </div>

        <div className="text-2xl font-semibold mb- text-[#2b6cb0]">
          <div className="text-[#2b406c] mb-4 font-bold text-3xl">
            <TypewriterComponent />
          </div>
          <p className="text-[#6B7280] mb-4">
            We're more than just a service booking platform.Our goal is to bring
            convenience, trust and quality into your everyday life.
          </p>

          <ul className="space-y-1">
            <li className="flex items-center">
              <span className="text-[#e61717] mr-2">
                • Verified Professionals
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-[#e61717] mr-2">
                • Affordable and transparent pricing
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-[#e61717] mr-2">
                • Quick and reliable services
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-5 bg-[#f5f6f2] overflow-x-auto">
        <h2 className="text-4xl font-bold text-center mb-5">Our Mission</h2>
        <p className="text-lg text-[#6B7280] max-w-5xl mx-auto">
          Your time matters. That’s why UrbanSetGo brings trusted services to
          your fingertips — fast bookings, live tracking, and hassle-free
          results. Choose a service, book in seconds, track with ease, and relax
          once the job is done.
        </p>
      </section>
      <MissionSection />

      <HowItWorks />

      {/* <section className="max-w-6xl mx-auto">
        <div className="text-center py-5">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-[#6B7280] max-w-5xl mx-auto">
            Our mission is to bridge the gap between urban households and
            skilled local workers by providing a simple, reliable, and
            accessible platform. We aim to empower users from every
            corner—especially Tier 2 and Tier 3 cities—by making essential
            services like repairs, cleaning, and maintenance just a click away.
          </p>

          <div className="text-2xl font-semibold mb-4 text-[#2B6CB0] space-y-4">
            <h3 className="text-[#2b406c] mb-2 font-sans">
              At UrbanSetGO, we are committed to:
            </h3>
            <ul>
              <li>
                Convenience: Making it easy for anyone to find and book trusted
                service providers.
              </li>
              <li>
                Trust & Transparency: Ensuring safe, verified, and fairly priced
                services.
              </li>
              <li>
                Empowerment: Supporting local workers by giving them digital
                visibility and more opportunities.
              </li>
              <li>
                Innovation: Continuously improving with technology to provide a
                smooth and user-friendly experience.
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
}
