import Header from '../components/Header';
import Footer from '../components/Footer';

const Docs = () => {
  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Documentation</h1>
          <p className="text-lg text-center mb-8">API documentation and integration guides.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">SMS API</h2>
              <p className="text-gray-600 mb-4">Learn how to send SMS messages.</p>
              <a href="#" className="text-blue-600 hover:underline">View Docs</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Email API</h2>
              <p className="text-gray-600 mb-4">Integrate email sending.</p>
              <a href="#" className="text-blue-600 hover:underline">View Docs</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Docs;