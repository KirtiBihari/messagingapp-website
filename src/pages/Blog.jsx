import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Sample Blog Post 1</h2>
              <p className="text-gray-600 mb-4">Excerpt of the blog post...</p>
              <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
            {/* Add more posts */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;