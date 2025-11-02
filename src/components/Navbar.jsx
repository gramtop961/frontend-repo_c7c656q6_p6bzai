import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="inline-flex lg:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block w-8 h-8 rounded-lg bg-slate-900 text-white grid place-items-center">C</span>
              <span className="text-lg">CleanCommerce</span>
            </a>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-sm text-slate-700">
            <li><a href="#products" className="hover:text-slate-900">Shop</a></li>
            <li><a href="#collections" className="hover:text-slate-900">Collections</a></li>
            <li><a href="#about" className="hover:text-slate-900">About</a></li>
            <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center px-3 py-2 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <Search className="w-4 h-4" />
              <input
                className="ml-2 bg-transparent outline-none placeholder:text-slate-500 text-sm w-48"
                placeholder="Search products"
                aria-label="Search"
              />
            </div>
            <button className="p-2 rounded-md hover:bg-slate-100" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 rounded-md hover:bg-slate-100" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-slate-900 text-white rounded-full px-1.5 py-0.5">2</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
