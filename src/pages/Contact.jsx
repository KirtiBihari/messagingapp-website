import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  const [channels, setChannels] = useState(['sms']);
  const [useCase, setUseCase] = useState('Transactional');

  const toggleChannel = (c) => {
    setChannels((prev) => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const onContinue = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const onBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const onSubmit = (data) => {
    const payload = { step, channels, useCase, ...data };
    console.log('submit', payload);
    alert('Thanks — we will get back to you within one business day.');
    setStep(1);
  };

  return (
    <div>
      <Header />

      <section className="bg-slate-50 py-24">
        <div className="container-narrow grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
          <div>
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Contact</span>
            <h1 className="mt-6 text-5xl font-display">Let's <span className="italic">talk.</span></h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">Tell us a little about what you want to send and where. We'll come back with pricing, routes and a plan to go live within one business day.</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 font-semibold text-slate-900">hello@waviafrica.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm text-slate-500">Web</p>
                  <p className="mt-1 font-semibold text-slate-900">waviafrica.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm">
                  <FaPhone />
                </span>
                <div>
                  <p className="text-sm text-slate-500">Sales</p>
                  <p className="mt-1 font-semibold text-slate-900">Reply in under one business day</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[1rem] bg-white p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step===1? 'bg-slate-900 text-white':'bg-slate-100 text-slate-500'}`}>1</div>
                  <div className="text-sm text-slate-500">Project</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step===2? 'bg-slate-900 text-white':'bg-slate-100 text-slate-500'}`}>2</div>
                  <div className="text-sm text-slate-500">You</div>
                </div>
              </div>

              <form onSubmit={step === 1 ? onContinue : handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">What do you want to send?</h3>

                    <div className="flex gap-3 mb-4">
                      <button type="button" onClick={() => toggleChannel('sms')} className={`rounded-full px-4 py-2 border ${channels.includes('sms')? 'bg-slate-900 text-white border-slate-900':'bg-transparent text-slate-700 border-slate-200'}`}>SMS</button>
                      <button type="button" onClick={() => toggleChannel('email')} className={`rounded-full px-4 py-2 border ${channels.includes('email')? 'bg-slate-900 text-white border-slate-900':'bg-transparent text-slate-700 border-slate-200'}`}>Email</button>
                      <button type="button" onClick={() => toggleChannel('whatsapp')} className={`rounded-full px-4 py-2 border ${channels.includes('whatsapp')? 'bg-slate-900 text-white border-slate-900':'bg-transparent text-slate-700 border-slate-200'}`}>WhatsApp</button>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-slate-500 mb-2">Use case</p>
                      <div className="flex flex-wrap gap-3">
                        {['Transactional','OTP / 2FA','Notifications','Marketing','Other'].map(u => (
                          <button key={u} type="button" onClick={() => setUseCase(u)} className={`rounded-full px-3 py-2 border ${useCase===u? 'bg-slate-900 text-white border-slate-900':'bg-transparent text-slate-700 border-slate-200'}`}>{u}</button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input {...register('volume')} placeholder="e.g. 50k SMS / 500k emails" className="rounded-3xl border border-slate-200 px-4 py-3" />
                      <input {...register('country')} placeholder="Primary country" className="rounded-3xl border border-slate-200 px-4 py-3" />
                    </div>

                    <div className="mt-6">
                      <button type="submit" className="w-full rounded-full bg-slate-900 text-white px-6 py-3">Continue →</button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tell us about you</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-600">Full name</label>
                        <input {...register('name',{required:true})} className="w-full rounded-3xl border border-slate-200 px-4 py-3" placeholder="Jane Mukasa" />
                        {errors.name && <p className="text-sm text-red-500">This field is required</p>}
                      </div>
                      <div>
                        <label className="text-sm text-slate-600">Work email</label>
                        <input {...register('email',{required:true})} type="email" className="w-full rounded-3xl border border-slate-200 px-4 py-3" placeholder="jane@company.com" />
                        {errors.email && <p className="text-sm text-red-500">This field is required</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-600">Company</label>
                        <input {...register('company')} className="w-full rounded-3xl border border-slate-200 px-4 py-3" placeholder="Acme Ltd" />
                      </div>
                      <div>
                        <label className="text-sm text-slate-600">Phone</label>
                        <input {...register('phone')} className="w-full rounded-3xl border border-slate-200 px-4 py-3" placeholder="+256 ..." />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-slate-600">Tell us about your project</label>
                      <textarea {...register('project',{required:true})} rows="4" className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="What are you sending, to which countries, and when do you want to go live?"></textarea>
                      {errors.project && <p className="text-sm text-red-500">This field is required</p>}
                    </div>

                    <div className="flex items-center gap-3">
                      <input {...register('agree')} type="checkbox" className="h-4 w-4" />
                      <label className="text-sm text-slate-500">I agree to be contacted by Wavi Africa about my inquiry. We'll never share your details.</label>
                    </div>

                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setStep(1)} className="rounded-full border border-slate-200 px-6 py-2">Back</button>
                      <button type="submit" className="ml-auto rounded-full bg-black text-white px-6 py-2">Send message →</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-narrow grid gap-6 md:grid-cols-3">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <h4 className="font-semibold mb-2">Direct support</h4>
            <p className="text-sm text-slate-600">Need help with your integration or campaign setup? Our product specialists will guide you through every step.</p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <h4 className="font-semibold mb-2">Volume pricing</h4>
            <p className="text-sm text-slate-600">Get custom pricing and SLA options for high-volume messaging and enterprise workflows.</p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <h4 className="font-semibold mb-2">Technical onboarding</h4>
            <p className="text-sm text-slate-600">We provide tailored onboarding, API documentation, and launch support to get your service live quickly.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
