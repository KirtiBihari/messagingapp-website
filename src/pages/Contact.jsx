import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert('Thanks! We will get back to you soon.');
  };

  return (
    <div>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 mb-5">
              Contact us
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Let’s build your next messaging workflow together.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Reach out to discuss product integration, volume pricing, or custom automation. Our India-based team is available for every stage of your messaging project.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Email</p>
              <p className="mt-4 text-lg font-semibold">support@messagingapp.com</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Phone</p>
              <p className="mt-4 text-lg font-semibold">+91 98765 43210</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Office</p>
              <p className="mt-4 text-lg font-semibold">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="rounded-[2rem] bg-white p-10 shadow-xl border border-slate-200">
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Send a message
                </span>
                <h2 className="mt-6 text-3xl font-bold text-slate-900">We’re ready to help.</h2>
                <p className="mt-4 text-slate-600 max-w-2xl">
                  Share your requirements and one of our specialists will get back with a tailored solution.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    {...register('name', { required: true })}
                    placeholder="Your full name"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500">This field is required.</p>}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Work email</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="hello@company.com"
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">This field is required.</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                    <input
                      {...register('company')}
                      placeholder="Company name"
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    {...register('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows="6"
                    placeholder="Tell us about your use case"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-500">This field is required.</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  Send request
                </button>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 rounded-2xl bg-blue-600/10 p-3 text-blue-600">
                      <FaEnvelope />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="mt-1 font-semibold text-slate-900">support@messagingapp.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-1 rounded-2xl bg-blue-600/10 p-3 text-blue-600">
                      <FaPhone />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="mt-1 font-semibold text-slate-900">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="mt-1 rounded-2xl bg-blue-600/10 p-3 text-blue-600">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">Office</p>
                      <p className="mt-1 font-semibold text-slate-900">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-blue-600 p-8 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-white/10 p-3 text-white">
                    <FaRegClock />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-blue-100">Support hours</p>
                    <p className="mt-2 text-xl font-semibold">Mon - Sun, 24/7</p>
                  </div>
                </div>
                <p className="mt-6 text-slate-100 leading-relaxed">
                  Our team is ready to support critical deployments and urgent campaigns anytime.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Direct support</h3>
              <p className="text-slate-600">Need help with your integration or campaign setup? Our product specialists will guide you through every step.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Volume pricing</h3>
              <p className="text-slate-600">Get custom pricing and SLA options for high-volume messaging, IVR routing, and enterprise workflows.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical onboarding</h3>
              <p className="text-slate-600">We provide tailored onboarding, API documentation, and launch support to get your service live quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
