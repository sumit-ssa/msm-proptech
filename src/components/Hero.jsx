import hero from "../assets/hero-image.jpg";
import {
  FaArrowRight,
  FaBuilding,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Transform Your <span className="text-blue-600">Real Estate</span>{" "}
              Experience
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              MSM Proptech brings cutting-edge technology to India&#39;s real
              estate market, offering unparalleled solutions for buyers,
              sellers, and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-lg font-semibold">
                Contact us <FaArrowRight className="ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">10K+</p>
                <p className="text-gray-600">Properties Listed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">5K+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-600">Cities Covered</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src={hero}
              alt="MSM Proptech Dashboard"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-4 hidden lg:block rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaChartLine className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Market Insights
                  </p>
                  <p className="text-sm text-gray-600">
                    Real-time property trends
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 bg-white p-4 hidden lg:block rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaHandshake className="text-green-600 text-2xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Expert Support
                  </p>
                  <p className="text-sm text-gray-600">
                    Personalized assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaBuilding className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Smart Property Search
            </h3>
            <p className="text-gray-600">
              Find your dream property with our AI-powered search engine.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaChartLine className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
            <p className="text-gray-600">
              Make informed decisions with our comprehensive market insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaHandshake className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Seamless Transactions
            </h3>
            <p className="text-gray-600">
              Experience hassle-free property transactions with our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
