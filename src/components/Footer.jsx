import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><Link to="/products#sms" className="hover:text-blue-400">SMS</Link></li>
              <li><Link to="/products#voice" className="hover:text-blue-400">Voice</Link></li>
              <li><Link to="/products#whatsapp" className="hover:text-blue-400">WhatsApp</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#x" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#instagram" className="hover:text-blue-400"><FaInstagram size={24} /></a>
              <a href="#youtube" className="hover:text-blue-400"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2026 Messaging App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;