import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductsOverview from '../components/ProductsOverview';
import WhyWavi from '../components/WhyWavi';
import Features from '../components/Features';
import ReadySection from '../components/ReadySection';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductsOverview />
      <WhyWavi />
      <Features />
      <ReadySection />
      <Footer />
    </div>
  );
};

export default Home;