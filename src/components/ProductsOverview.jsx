import { FaSms, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ProductsOverview = () => {
  return (
    <section className="py-14 bg-transparent">
      <div className="container-narrow">
        <h2 className="text-4xl font-display mb-10">One platform, three channels.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card relative h-56 p-4">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-slate-950 p-3">
                <FaSms className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">SMS</h3>
                <p className="mt-2 text-sm text-slate-600">Direct carrier routes with transparent pricing and local delivery reporting.</p>
                <div class="absolute bottom-4 left-0 right-0 text-center">
                  <a href="/products#sms" className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card relative h-56 p-4">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-slate-950 p-3">
                <FaPhone className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Voice</h3>
                <p className="mt-2 text-sm text-slate-600">IVR, call routing and dedicated support numbers for teams.</p>
                <div class="absolute bottom-4 left-0 right-0 text-center">
                  <a href="/products#voice" className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card relative h-56 p-4">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-slate-950 p-3">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">WhatsApp</h3>
                <span className="inline-flex rounded-full bg-accent-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-800">COMING SOON</span>
                <p className="mt-2 text-sm text-slate-600">Official Business API templates and two-way conversations.</p>
                <div class="absolute bottom-4 left-0 right-0 text-center">
                  <a href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Join waitlist
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;