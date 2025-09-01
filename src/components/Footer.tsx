export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#e61717]">UrbanSetGo</h3>
          <p className="text-gray-400">
            Making local services accessible, reliable and affordable for
            everyone. Connect with skilled workers at your fingertips.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#2B6CB0]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#e61717] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#e61717] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-[#e61717] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#e61717] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p className="text-gray-400">Email: urbansetgo22@gmail.com</p>
          <p className="text-gray-400">Phone: 123456789</p>
          <p className="text-gray-400">Address: Prayagraj</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 UrbanSetGo. All rights reserved.
      </div>
    </footer>
  );
}
