import { Home, Wallet, User, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: <Home />, label: "Home" },
    { icon: <Wallet />, label: "Earnings" },
    { icon: <User />, label: "Profile" },
    { icon: <Settings />, label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-[#111111] p-6 border-r border-gray-800 hidden md:flex flex-col justify-between">
      <div>
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-300 mb-6 cursor-pointer hover:text-red-400 transition"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-gray-400 cursor-pointer hover:text-red-400">
        <LogOut /> Logout
      </div>
    </aside>
  );
}
