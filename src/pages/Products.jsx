import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaSms, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Products = () => {
  return (
    <div>
      <Header />
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Every channel your customers actually use.</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">One API, one dashboard, and one wallet for SMS, Voice, and WhatsApp. Here's what's live and what's next.</p>
          </div>

          {/* SMS Product */}
          <div id="sms" className="mb-16 bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-16">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <FaSms className="text-blue-600 text-4xl" />
                <h2 className="text-4xl font-bold text-slate-900">SMS</h2>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm uppercase tracking-widest font-semibold text-slate-600">Direct Carrier Routes</span>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">Looking for direct connectivity of Bulk SMS Service Provider? We provide promotional, transactional, OTP API SMS message service in India with the highest delivery rates and transparent pricing. Bulk SMS marketing is a type of mobile marketing that involves sending text messages to a group of customers or potential customers.</p>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-700 mb-6">Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Direct carrier connections across Indian networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Real-time delivery receipts (DLRs) and webhooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">OTP-grade routes with sub-second latency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Sender ID registration and compliance handled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">REST API, SMPP and self-serve dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Per-destination pricing, no hidden fees</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition">Start sending →</a>
              </div>
            </div>
          </div>

          {/* Voice Product */}
          <div id="voice" className="mb-16 bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-16">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <FaPhone className="text-blue-600 text-4xl" />
                <h2 className="text-4xl font-bold text-slate-900">Voice</h2>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm uppercase tracking-widest font-semibold text-slate-600">IVR & Call Routing</span>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">Managing lots of clients through different numbers is hard. Try our IVR solution with dedicated support numbers for all employees and multiple department routing. Streamline customer interactions with intelligent voice automation.</p>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-700 mb-6">Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">IVR system with multi-level menu routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Dedicated support numbers for departments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Call recording and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Voicemail and message handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Integration with CRM systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">24/7 availability with automated responses</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition">Get started →</a>
              </div>
            </div>
          </div>

          {/* WhatsApp Product */}
          <div id="whatsapp" className="bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-16">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <FaWhatsapp className="text-green-600 text-4xl" />
                <h2 className="text-4xl font-bold text-slate-900">WhatsApp</h2>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">📅 Coming Soon</span>
                <span className="text-sm uppercase tracking-widest font-semibold text-slate-600">Official Business API</span>
              </div>
            </div>
            <p className="text-lg text-slate-600 mb-8">Two-way conversations, template messages and notifications through the official WhatsApp Business API. Unified with SMS and Voice in one dashboard with shared billing and wallet.</p>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-slate-700 mb-6">Coming Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Template messages and notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Two-way conversations with webhook routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Media messages (images, PDFs, documents)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Unified dashboard with SMS and Voice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">Shared billing and wallet across channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-slate-700">24/7 customer support</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition">Join the waitlist →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;