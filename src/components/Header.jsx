import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-slate-900">Messaging App</Link>

        <nav className="hidden xl:flex items-center gap-10 text-sm font-medium text-slate-700">
          <Link to="/products" className="hover:text-slate-900 transition">Products</Link>
          <Link to="/about" className="hover:text-slate-900 transition">About</Link>
          <Link to="/blog" className="hover:text-slate-900 transition">Blog</Link>
          <Link to="/contact" className="hover:text-slate-900 transition">Contact</Link>
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a href="#login" className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">Sign in</a>
          <Link to="/contact" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Get started</Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="xl:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-5">
          <div className="space-y-3 text-slate-800">
            <Link to="/products" className="block rounded-2xl px-4 py-3 hover:bg-slate-50">Products</Link>
            <Link to="/about" className="block rounded-2xl px-4 py-3 hover:bg-slate-50">About</Link>
            <Link to="/blog" className="block rounded-2xl px-4 py-3 hover:bg-slate-50">Blog</Link>
            <Link to="/contact" className="block rounded-2xl px-4 py-3 hover:bg-slate-50">Contact</Link>
            <a href="#login" className="block rounded-2xl bg-slate-900 px-4 py-3 text-center text-white hover:bg-slate-800 transition">Sign in</a>
            <Link to="/contact" className="block rounded-2xl border border-slate-300 px-4 py-3 text-center text-slate-900 hover:bg-slate-50 transition">Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;