import { FaGlobeAsia, FaCode, FaShieldAlt } from 'react-icons/fa';

const WhyWavi = () => {
  return (
    <section className="py-16">
      <div className="container-narrow">
        <h2 className="text-4xl font-display mb-4">The fastest way to talk to the continent.</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl">We run the routes, the SMTP and the support — so you only manage one API key and one invoice.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-left">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaGlobeAsia className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Built for Africa</h3>
                <p className="mt-2 text-sm text-slate-600">Local routes, regional carriers and local support for reliable delivery.</p>
              </div>
            </div>
          </div>

          <div className="card text-left">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaCode className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">One API, one dashboard</h3>
                <p className="mt-2 text-sm text-slate-600">Send SMS, Email and WhatsApp without integrating multiple vendors.</p>
              </div>
            </div>
          </div>

          <div className="card text-left">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Compliance-ready</h3>
                <p className="mt-2 text-sm text-slate-600">Sender registration, opt-outs and deliverability best-practices handled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWavi;