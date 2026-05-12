const Hero = () => {
  return (
    <section className="bg-slate-50 text-slate-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Messaging infrastructure for India
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">Messaging App</p>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">Design. Deliver. Scale your customer communication.</h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">A premium messaging platform built for Indian businesses. Send SMS, Email, and WhatsApp through one dashboard, one API, and one wallet.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">Request a demo</a>
              <a href="/products" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition">Explore products</a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.15)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-blue-600">50+</p>
                  <p className="mt-3 text-sm text-slate-600">Carrier destinations</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-blue-600">99.9%</p>
                  <p className="mt-3 text-sm text-slate-600">Platform uptime</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-blue-600">24/7</p>
                  <p className="mt-3 text-sm text-slate-600">Local support</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-blue-600">One API</p>
                  <p className="mt-3 text-sm text-slate-600">SMS, Email, WhatsApp</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Choose your channel</h2>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">SMS</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">Direct carrier routes with transparent pricing.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Voice</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">IVR solution with dedicated support numbers and multi-department routing.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">WhatsApp</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">Official Business API templates and automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;