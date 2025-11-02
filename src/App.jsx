import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
