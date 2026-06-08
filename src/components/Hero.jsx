const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="container-narrow pt-20 pb-12">
        <span className="chip">Communication infrastructure for Africa</span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-6xl">
          Reach <span className="italic">eve</span>
          <br />
          Everywhere on the continent.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-600">
          Wavi Africa is the single place to send SMS, Email and soon WhatsApp to customers across Africa. One API, one dashboard, one wallet.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-brand-950 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">Talk to us</a>
          <a href="/products" className="inline-flex items-center gap-3 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 hover:border-brand-300">See products</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;