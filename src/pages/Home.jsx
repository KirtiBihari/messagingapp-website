import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductsOverview from '../components/ProductsOverview';
import WhyMessagingApp from '../components/WhyMessagingApp';
import Features from '../components/Features';
import ReadySection from '../components/ReadySection';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductsOverview />
      <WhyMessagingApp />
      <Features />
      <ReadySection />
      <Footer />
    </div>
  );
};

export default Home;