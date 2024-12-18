import { Link } from "react-router-dom";
import logo from "../assets/logo-msm.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Logo" className="" />
            <h3 className="text-lg font-semibold my-4">MSM Proptech</h3>
            <p className="text-gray-400">
              Your Trusted Real Estate Partner in India
            </p>
          </div>
          <div></div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={"#home"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to={"about"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"privacy"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policies
                </Link>
              </li>

              <li>
                <Link
                  to={"terms"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">
                Phone : 6362341626
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Email : msmproptech@gmail.com
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Address : Visalakshi Prakruthi office, Thanisandra Main Road
                Bangalore
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MSM Proptech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
