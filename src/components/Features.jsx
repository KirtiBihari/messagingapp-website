import { FaRocket, FaLock, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16">
      <div className="container-narrow">
        <h2 className="text-3xl font-display mb-8">Why teams pick Wavi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-left">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaRocket className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Fast & reliable</h3>
                <p className="mt-2 text-sm text-slate-600">Low-latency delivery across regional carriers with SLA-backed uptime.</p>
              </div>
            </div>
          </div>

          <div className="card text-left">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaLock className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Secure & compliant</h3>
                <p className="mt-2 text-sm text-slate-600">Best-practice deliverability, sender registration and privacy controls.</p>
              </div>
            </div>
          </div>

          <div className="card text-left">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-slate-950 p-3">
                <FaHeadset className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold">Local support</h3>
                <p className="mt-2 text-sm text-slate-600">Regionally-based support teams available for setup and ongoing ops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;