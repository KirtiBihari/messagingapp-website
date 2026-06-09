import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import AppIcon from './AppIcon';

const Footer = () => {
  return (
    <footer className="border-t border-brand-200 bg-white/40">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-semibold text-brand-950 flex items-center gap-2">
                  <AppIcon className="w-6 h-6" />
                  Messaging App
                </h3>
              </div>
            <p className="max-w-xl text-sm leading-7 text-brand-600">
              Communication infrastructure for Indian businesses. SMS, Voice and WhatsApp - one platform, fair pricing, local support.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="newsletter" className="sr-only">Voice</label>
              <input
                id="newsletter"
                type="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-3xl border border-brand-200/60 bg-brand-50 px-4 py-3 text-sm text-brand-950 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-950/10"
              />
              <button className="inline-flex items-center justify-center rounded-3xl bg-brand-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Products</h4>
            <ul className="mt-6 space-y-3 text-sm text-brand-700">
              <li><Link to="/products#sms" className="transition hover:text-brand-950">SMS</Link></li>
              <li><Link to="/products#voice" className="transition hover:text-brand-950">Voice</Link></li>
              <li><Link to="/products#whatsapp" className="transition hover:text-brand-950">WhatsApp</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Company</h4>
            <ul className="mt-6 space-y-3 text-sm text-brand-700">
              <li><Link to="/about" className="transition hover:text-brand-950">About</Link></li>
              <li><Link to="/blog" className="transition hover:text-brand-950">Blog</Link></li>
              <li><Link to="/docs" className="transition hover:text-brand-950">Docs</Link></li>
              <li><Link to="/contact" className="transition hover:text-brand-950">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Legal</h4>
            <ul className="mt-6 space-y-3 text-sm text-brand-700">
              <li><Link to="/privacy" className="transition hover:text-brand-950">Privacy</Link></li>
              <li><Link to="/terms" className="transition hover:text-brand-950">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-200 pt-8 text-sm text-brand-600 md:flex-row md:items-center">
          <p>© 2026 Messaging App. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-brand-700">
            <a href="https://x.com/MessagingApp" className="transition hover:text-brand-950">X / Twitter</a>
            <a href="https://www.instagram.com/messagingapp/" className="transition hover:text-brand-950">Instagram</a>
            <a href="https://www.youtube.com/@MessagingApp" className="transition hover:text-brand-950">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;