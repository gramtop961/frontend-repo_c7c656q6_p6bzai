import React, { useEffect, useMemo, useState } from 'react'
import { Star, Plus } from 'lucide-react'
import { useCart } from './CartContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || (typeof window !== 'undefined' ? window.location.origin.replace(':3000', ':8000') : '')

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
      <div className="aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-slate-900">{product.title}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />
              ))}
              <span className="ml-2 text-xs text-slate-500">In {product.category}</span>
            </div>
          </div>
          <span className="text-slate-900 font-semibold">${product.price}</span>
        </div>
        <button onClick={onAdd} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          <Plus className="w-4 h-4" /> Add to cart
        </button>
      </div>
    </div>
  )
}

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { addToCart, loading: cartLoading } = useCart()

  const fetchProducts = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/products`)
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data)
      } else {
        // Seed and refetch
        await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
        const res2 = await fetch(`${API_BASE}/api/products`)
        const data2 = await res2.json()
        setProducts(Array.isArray(data2) ? data2 : [])
      }
    } catch (e) {
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="aspect-square bg-slate-100" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-slate-100 rounded w-2/3" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
                <div className="h-9 bg-slate-100 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      )
    }
    if (error) {
      return <div className="text-sm text-red-600">{error}</div>
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id || p._id} product={p} onAdd={() => addToCart(p.id || p._id)} />
        ))}
      </div>
    )
  }, [loading, error, products, addToCart])

  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Featured products</h2>
            <p className="mt-1 text-slate-600">Handpicked essentials from our latest release.</p>
          </div>
          <button onClick={fetchProducts} className="text-sm text-slate-900 hover:underline disabled:opacity-50" disabled={loading || cartLoading}>
            Refresh
          </button>
        </div>
        {content}
      </div>
    </section>
  )
}

export default ProductGrid
