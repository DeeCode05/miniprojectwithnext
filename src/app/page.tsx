import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-[#ffffff] text-center py-5 px-6">
      <section className="bg-[#a8c6d8] text-center py-10 px-6">
        <h1 className="text-5xl font-bold text-[#F5F5EF]">
          Welcome to <span className=" text-[#1f2839]">UrbanSetGo </span>
        </h1>
        <p className="mt-4 text-lg text-[#1f2839]">
          Your one-stop platform for booking workers.
        </p>

        <div className="mt-2 flex gap-4 justify-center">
          <Link href="/services">
            <button className="bg-[#000000] font-bold text-white px-6 py-3 rounded-lg shadow hover:bg-[#e61717] transition">
              Book Now
            </button>
          </Link>

          <Link href="/about">
            <button className="border-2 border-[#e61717] font-bold text-white px-6 py-3 rounded-lg hover:bg-[#e61717] hover:text-white transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-center text-[#1A1A1A]">
          Our Popular Services
        </h2>
        <p className="text-center text-[#6B7280] mt-2">
          Reliable workers for your everyday needs
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          <div className="bg-white border text-left  border-[#E5E7EB] rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/electrician.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-300" />
            <h3 className=" text-xl font-semibold text-[#1A1A1A]">
              Electrician
            </h3>
            <p className="italic text-gray-500 mt-1">
              “Switch On to Reliability.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Reliable electricians for safe repairs, quick installations, and
              bright solutions—powering your home and workplace with trust and
              care.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] text-left rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/plumber.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-600" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Plumbers</h3>
            <p className="italic text-gray-500 mt-1">
              “Keeping Water Running Smoothly.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Reliable plumbers for quick repairs, pipe installations, and
              leak-free homes—keeping your water flowing smoothly.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] text-left rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/maid.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-600" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Maids</h3>
            <p className="italic text-gray-500 mt-1">
              “Your Trusted Hand for a Spotless Home.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Professional maids providing reliable cleaning, organizing, and
              household care—keeping your home spotless and comfortable.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] text-left rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/carpenter.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-600" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Carpenters</h3>
            <p className="italic text-gray-500 mt-1">
              From Vision to Precision—We Build It Right.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Skilled carpenters delivering reliable, precise craftsmanship for
              custom furniture, repairs, and woodwork.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] text-left rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/dance.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-600" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Dance</h3>
            <p className="italic text-gray-500 mt-1">
              “Where Passion Meets Performance.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Learn, perform, and express yourself with passion—dance classes
              for every level.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] text-left rounded-xl p-6 shadow hover:shadow-lg transition">
            <img
              src="/image/ac.jpg"
              alt=""
              className="w-full h-40 object-cover rounded-xl"
            />
            <hr className=" mt-4 my-2 border-gray-600" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">
              AC Repairers
            </h3>
            <p className="italic text-gray-500 mt-1">
              “Expert Care for Your Cooling Needs.”
            </p>
            <p className="text-[#6B7280] mt-2">
              Expert AC repair and maintenance to keep your home and office cool
              and comfortable. Fast, reliable, and efficient service whenever
              you need it.
            </p>
          </div>
        </div>
      </section>

      <section className=" text-black py-8 text-center">
        <p className="text-lg font-medium">
          ✅ Trusted by over thousands of people for daily life solutions.
        </p>
      </section>
    </main>
  );
}
