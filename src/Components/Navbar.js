import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for open/close (install: npm install lucide-react)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Recipes", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">MyFoodie</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-6 py-4 text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block hover:text-yellow-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
