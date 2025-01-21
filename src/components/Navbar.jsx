import { Link } from "react-router-dom";
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
            <a
              href={"#services"}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
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
