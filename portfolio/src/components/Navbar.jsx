import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-8 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/10">
      <div className="text-xl font-bold text-purple-400">
        SG
      </div>
      <div className="hidden sm:flex space-x-8">
        <a href="home" className="relative group">
          <span className="text-white">Home</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="about" className="relative group">
          <span className="text-white">About</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="projects" className="relative group">
          <span className="text-white ">Projects</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="contact" className="relative group">
          <span className="text-white ">Contact Me</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="sm:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-2/6 pl-7 max-w-xs mr-1 rounded-md backdrop-blur-md bg-white/20 shadow-md flex flex-col items-center pr-6 space-y-4 py-6 z-50 sm:hidden">
          {[
            { label: "Home", href: "home" },
            { label: "About", href: "about" },
            { label: "Projects", href: "projects" },
            { label: "Contact", href: "contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="relative group text-white text-lg font-medium text-right"
            >
              {item.label}
              <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Navbar;
