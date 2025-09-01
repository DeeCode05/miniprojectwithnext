import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#262626] text-white">
      <div className="text-2xl font-bold">UrbanSetGo</div>
      <ul className="flex space-x-6">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ].map((item) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.href}
              className="inline-block relative pb-1 text-white"
            >
              {item.name}
              <span
                className="absolute bottom-0 h-[2px] w-0 left-1/2 bg-[#e61717] 
                           transition-all duration-300 ease-in-out 
                           group-hover:w-full group-hover:left-0"
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
