import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center">C</span>
              CleanCommerce
            </div>
            <p className="mt-3 text-slate-600 max-w-xs">Timeless essentials for everyday life. Designed with care, made to last.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Shop</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">New arrivals</a></li>
              <li><a href="#" className="hover:text-slate-900">Best sellers</a></li>
              <li><a href="#" className="hover:text-slate-900">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-3">Follow us</h4>
            <div className="flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-slate-100"><Twitter className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-slate-100"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-slate-100"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CleanCommerce. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-slate-800">Privacy policy</a>
            <a href="#" className="hover:text-slate-800">Terms of service</a>
            <a href="#" className="hover:text-slate-800">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
