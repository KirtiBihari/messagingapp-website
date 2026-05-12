const ReadySection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ship your first message this week.</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Talk to us about your volumes, use case and compliance needs. We'll provision SMS and Email for you and put you on the WhatsApp waitlist.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">Contact sales</a>
          <a href="/products" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">See products</a>
        </div>
        {/* <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <blockquote className="text-lg italic mb-4">"Messaging App has transformed how we communicate with our customers across India. The local support and reliable delivery make all the difference."</blockquote>
          <cite className="font-semibold">- Sarah Johnson, CEO of Indian Tech Solutions</cite>
        </div> */}
      </div>
    </section>
  );
};

export default ReadySection;