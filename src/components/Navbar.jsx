import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-msm.jpeg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to={""} className="flex items-center">
            <img src={logo} alt="Logo" className="" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to={""}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <NavLink
              to={"#services"}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </NavLink>
            <a
              href={"#whyus"}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Why us?
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:flex space-x-4">
            <a href="tel:+6362341626">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Contact
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 space-y-2">
            <Link
              to={""}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to={"/term"}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms & Confitions{" "}
            </Link>

            <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
