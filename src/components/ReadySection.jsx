const ReadySection = () => {
  return (
    <section className="py-20">
      <div className="container-narrow">
        <div className="rounded-[2rem] bg-brand-950 p-10 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display mb-4">Ship your first message this week.</h2>
            <p className="text-lg text-accent-100 mb-6">Tell us your volumes, use case and compliance needs. We'll provision SMS and Email for you and add you to the WhatsApp early access list.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent-300 px-6 py-3 font-semibold text-brand-950">Contact sales</a>
              <a href="/products" className="inline-flex items-center gap-2 rounded-full border border-accent-100 px-6 py-3 font-semibold text-accent-100">See products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;