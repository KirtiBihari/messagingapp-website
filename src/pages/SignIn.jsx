import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import AppIcon from '../components/AppIcon';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center py-20">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="mx-auto mb-6 w-28">
            <AppIcon className="w-full h-full" />
          </div>
          <div className="mb-2">
            <h2 className="text-base font-semibold text-brand-600">MessagingApp</h2>
          </div>
          <h1 className="text-2xl font-semibold">Sign in to your account</h1>
          <p className="text-sm text-slate-500 mt-2">Welcome back. Enter your details to continue.</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <label className="block text-sm text-slate-700">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-slate-200 px-4 py-3 mt-2 mb-4" />

          <div className="flex items-center justify-between">
            <label className="block text-sm text-slate-700">Password</label>
            <a href="#" className="text-sm text-slate-400">Forgot password?</a>
          </div>
          <input type="password" placeholder="••••••••" className="w-full rounded-3xl border border-slate-200 px-4 py-3 mt-2 mb-6" />

          <button className="w-full rounded-3xl bg-slate-900 px-6 py-3 text-white font-semibold">Sign in</button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <div className="text-sm text-slate-400">OR</div>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="space-y-3">
            <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 flex items-center justify-center gap-3">
              <FaGoogle className="text-red-500" /> Continue with Google
            </button>
            <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 flex items-center justify-center gap-3">
              <FaGithub /> Continue with GitHub
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">Don't have an account? <Link to="/contact" className="text-slate-900 font-semibold">Create one</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
