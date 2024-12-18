import { Users, Shield, Network, UserCheck } from "lucide-react";

const Choose = () => {
  const reasons = [
    {
      title: "Experienced Team",
      description:
        "Market experts with years of proven success in real estate.",
      icon: Users,
    },
    {
      title: "Customer-Focused Approach",
      description:
        "Transparent communication and dedication to your satisfaction.",
      icon: Shield,
    },
    {
      title: "Extensive Property Network",
      description: "Access to a wide range of properties to suit every need.",
      icon: Network,
    },
    {
      title: "Personalized Solutions",
      description:
        "Tailored strategies to meet each client's unique requirements.",
      icon: UserCheck,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="whyus"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us?
          {/* <div className="mt-12 text-center"> */}
          <p className="text-xl font-medium max-w-2xl mx-auto mt-4">
            With our expertise and commitment, we ensure a smooth and successful
            real estate experience for every client.
          </p>
        </h2>
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
