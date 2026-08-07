import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">Dina E-Shop</h2>
          <p className="mt-4 text-sm">
            Your trusted online shopping destination for quality products.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400">Products</a></li>
            <li><a href="#" className="hover:text-indigo-400">Categories</a></li>
            <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              support@dinaeshop.com
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              +91 98765 43210
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Salem, India
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <a href="#" className="text-2xl hover:text-blue-500">
              <FaFacebookF />
            </a>

            <a href="#" className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>

            <a href="#" className="text-2xl hover:text-sky-500">
              <FaXTwitter />
            </a>

            <a href="#" className="text-2xl hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm">
        © 2026 Dina E-Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;