import { FaRocket, FaLock, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why choose Messaging App?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Fast & Reliable</h3>
            <p className="text-gray-600 text-lg">High-speed delivery with 99.9% uptime across all Indian carriers.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLock className="text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Secure & Compliant</h3>
            <p className="text-gray-600 text-lg">End-to-end encryption and full compliance with local regulations.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeadset className="text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600 text-lg">Local support team available around the clock for all your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;