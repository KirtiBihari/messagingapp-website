import { FaGlobeAsia, FaCode, FaShieldAlt } from 'react-icons/fa';

const WhyWavi = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">The fastest way to talk to the continent.</h2>
        <p className="text-center text-xl mb-16 max-w-2xl mx-auto text-gray-600">We run the routes, we run the SMTP, and we run the support - so you only deal with one API key and one invoice.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
              <FaGlobeAsia className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Built for India</h3>
            <p className="text-gray-600 text-lg">Local routes, local carriers, local support - not a US platform with Indian SKUs.</p>
          </div>
          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
              <FaCode className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">One API, one dashboard</h3>
            <p className="text-gray-600 text-lg">Switch between SMS, Email and WhatsApp without integrating three vendors.</p>
          </div>
          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
              <FaShieldAlt className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Compliance-ready</h3>
            <p className="text-gray-600 text-lg">SPF, DKIM, DMARC, opt-outs, and sender registration handled end-to-end.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWavi;