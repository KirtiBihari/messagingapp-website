import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSms, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Products = () => {
  return (
    <div>
      <Header />
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-500">Products</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">Every channel your customers actually use.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">MessagingApp is one API, one dashboard and one wallet for SMS, Voice and WhatsApp. Here's what's live and what's next.</p>
          </div>

          <div className="space-y-10">
            <article id="sms" className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <FaSms className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-950">SMS</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-500">Direct carrier routes</p>
                  </div>
                </div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-800">Available now</span>
              </div>

              <div className="mt-8 space-y-8">
                <p className="text-base leading-8 text-slate-700">Transactional, marketing and OTP SMS across Africa. Built on direct SMPP routes and real delivery receipts - not a reseller of a reseller.</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Direct carrier connections in major African markets</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Real-time delivery receipts (DLRs) and webhooks</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>OTP-grade routes with sub-second latency</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Sender ID registration and compliance handled</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>REST API, SMPP and a self-serve dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Per-destination pricing, no hidden fees</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
                    Start sending
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>

            <article id="voice" className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <FaPhone className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-950">Voice</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-500">IVR & Call Routing</p>
                  </div>
                </div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-800">Available now</span>
              </div>

              <div className="mt-8 space-y-8">
                <p className="text-base leading-8 text-slate-700">IVR, call routing and dedicated support numbers for teams.</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>IVR system with multi-level menu routing</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Dedicated support numbers for departments</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Call recording and analytics</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Voicemail and message handling</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Integration with CRM systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>24/7 availability with automated responses</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
                    Start sending
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>

            <article id="whatsapp" className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 text-white">
                    <FaWhatsapp className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold text-slate-950">WhatsApp</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-500">Official Business API</p>
                  </div>
                </div>
                <span className="inline-flex rounded-full bg-accent-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-800">Coming soon</span>
              </div>

              <div className="mt-8 space-y-8">
                <p className="text-base leading-8 text-slate-700">Two-way conversations, template messages and notifications through the official WhatsApp Business API. Early access opens this year.</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Template messages and notifications</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Two-way conversations with webhook routing</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Media messages (images, PDFs, documents)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Unified with SMS and Voice in one dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>Shared billing and wallet across channels</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
                    Join the waitlist
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;