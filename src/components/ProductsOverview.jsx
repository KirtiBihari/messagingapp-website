import { FaSms, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ProductsOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">One platform, three channels.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <FaSms className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">SMS</h3>
            </div>
            <p className="text-gray-600 mb-4 font-medium">DIRECT CARRIER ROUTES</p>
            <p className="text-gray-700 mb-6">Looking for direct connectivity of Bulk SMS Service Provider, here we provide promotional, transactional, OTP API sms message service in india, Bulk SMS (short message service) marketing is a type of mobile marketing that involves sending text messages to a group of customers or potential customers.</p>
            <a href="/products#sms" className="text-blue-600 font-semibold hover:underline">Learn more →</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <FaPhone className="text-blue-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">Voice</h3>
            </div>
            <p className="text-gray-600 mb-4 font-medium">IVR & CALL ROUTING</p>
            <p className="text-gray-700 mb-6">{`Handling lot’s of client through different different numbers, so hard, try IVR solution with dedicated support number for all employees and add multiple department at the moment.`}</p>
            <a href="/products#voice" className="text-blue-600 font-semibold hover:underline">Learn more →</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <FaWhatsapp className="text-green-600 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">WhatsApp</h3>
            </div>
            <span className="bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">COMING SOON</span>
            <p className="text-gray-700 mb-6">Official WhatsApp Business API templates, two-way conversations and automations. Join the early access list.</p>
            <a href="/contact" className="text-blue-600 font-semibold hover:underline">Join waitlist →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;