import React from 'react';
import { Star, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Everyday Runner',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Minimal Backpack',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Relaxed Tee',
    price: 29,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Classic Watch',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
      <div className="aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-slate-900">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                />
              ))}
              <span className="ml-2 text-xs text-slate-500">{product.rating}</span>
            </div>
          </div>
          <span className="text-slate-900 font-semibold">${product.price}</span>
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          <Plus className="w-4 h-4" /> Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Featured products</h2>
            <p className="mt-1 text-slate-600">Handpicked essentials from our latest release.</p>
          </div>
          <a href="#" className="text-sm text-slate-900 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
