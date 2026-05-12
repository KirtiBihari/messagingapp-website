import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          <p className="text-lg">This is the privacy policy content...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;