import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-12">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            New season just dropped
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Clean. Minimal. Effortless.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover everyday essentials designed for modern life. Sustainable materials, timeless
            silhouettes, and quality you can feel.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
              Shop new arrivals <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#collections" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-200 text-slate-900 hover:border-slate-300">
              Explore collections
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Rated 4.9/5 by 2k+ customers
            </div>
            <div>Free shipping over $50</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8 shadow-sm border border-slate-100">
            <div className="h-full w-full rounded-xl overflow-hidden bg-white grid place-items-center">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                alt="Featured product"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
