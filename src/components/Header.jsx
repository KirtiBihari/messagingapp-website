import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import AppIcon from './AppIcon';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-200/60 bg-gray-50/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight text-brand-950 flex items-center gap-2">
          <AppIcon className="w-6 h-6" />
          Messaging App
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-brand-700">
          <Link to="/" className="hover:text-brand-950 transition">Home</Link>
          <Link to="/products" className="hover:text-brand-950 transition">Products</Link>
          <Link to="/blog" className="hover:text-brand-950 transition">Blog</Link>
          <Link to="/about" className="hover:text-brand-950 transition">About</Link>
          <Link to="/contact" className="hover:text-brand-950 transition">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/signin" className="rounded-full border border-brand-300 bg-white px-5 py-2 text-sm font-semibold text-brand-900 transition hover:border-brand-400 hover:text-brand-950">Sign in</Link>
          <Link to="/contact" className="rounded-full bg-brand-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-800">Get started</Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-brand-200/60 bg-white p-2 text-brand-900 transition hover:bg-brand-100"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-brand-200/60 bg-white px-4 py-5">
          <div className="space-y-3 text-brand-900">
            <Link to="/" className="block rounded-2xl px-4 py-3 hover:bg-brand-100">Home</Link>
            <Link to="/products" className="block rounded-2xl px-4 py-3 hover:bg-brand-100">Products</Link>
            <Link to="/blog" className="block rounded-2xl px-4 py-3 hover:bg-brand-100">Blog</Link>
            <Link to="/about" className="block rounded-2xl px-4 py-3 hover:bg-brand-100">About</Link>
            <Link to="/contact" className="block rounded-2xl px-4 py-3 hover:bg-brand-100">Contact</Link>
            <Link to="/signin" className="block rounded-2xl bg-brand-950 px-4 py-3 text-center text-white hover:bg-brand-800 transition">Sign in</Link>
            <Link to="/contact" className="block rounded-2xl border border-brand-200/60 px-4 py-3 text-center text-brand-950 hover:bg-brand-100 transition">Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;