import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="mb-4">
            At MSM Reality, we are committed to protecting your privacy and
            ensuring the security of your personal information.
          </p>
          <p className="mb-4">
            This privacy policy outlines how we collect, use, and safeguard your
            data when you use our website and services.
          </p>
          <p className="mb-4">
            We only collect information that is necessary for providing our real
            estate services and improving your experience with MSM Reality.
          </p>
          <p className="mb-4">
            Your data is handled with utmost care and in compliance with
            applicable data protection laws.
          </p>
          <p>
            For more detailed information about our privacy practices or to
            exercise your rights regarding your personal data, please contact us
            at msmReality@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
