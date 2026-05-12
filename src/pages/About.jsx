import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Messaging App</h1>
          <p className="text-lg text-center">We provide communication infrastructure for Indian businesses, focusing on local routes and support.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;