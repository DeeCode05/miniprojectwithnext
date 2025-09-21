// pages/index.tsx
import Head from "next/head";

type Category = {
  name: string;
  icon: string;
};

const categories: Category[] = [
  { name: "Electrician", icon: "/icons/electrician.png" },
  { name: "Plumber", icon: "/icons/plumber.png" },
  { name: "Maid", icon: "/icons/maid.png" },
  { name: "Carpenter", icon: "/icons/carpenter.png" },
  { name: "AC Repair", icon: "/icons/ac repair.png" },
  { name: "Painter", icon: "/icons/painter.png" },
  { name: "Technician", icon: "/icons/technician.png" },
  { name: "Mechanic", icon: "/icons/mechanic.png" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>RepairMap - Book Local Repair Services</title>
        <meta name="description" content="Find trusted workers in your area" />
      </Head>

      <main className="min-h-screen bg-white text-black">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 shadow-md">
          <h1 className="text-2xl font-bold">RepairMap</h1>
          <div className="space-x-4">
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
            <a href="#" className="hover:text-orange-500">
              About
            </a>
            <a href="#" className="hover:text-orange-500">
              Login
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-orange-100 via-white to-green-100">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Book Trusted Local Repair Services
            </h2>
            <p className="text-lg mb-6">
              Electricians, plumbers, maids, carpenters — just one tap away!
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition">
              Book Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/repair-illustration.svg"
              alt="Repair Services"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="px-8 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-4 border rounded-xl hover:shadow-md text-center cursor-pointer"
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="mx-auto h-16 mb-2"
                />
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-4 mt-12">
          <p>&copy; 2025 RepairMap. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
