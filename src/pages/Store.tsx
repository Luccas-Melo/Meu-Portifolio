import React, { useState, useEffect, useRef } from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import PromoBanner from '../components/home/PromoBanner';
import ProductGrid from '../components/products/ProductGrid';
import ProductDetail from '../components/products/ProductDetail';
import CartSidebar from '../components/cart/CartSidebar';
import { Category } from '../types';
import { getFeaturedProducts, getProductById, getProductsByCategory } from '../data/products';
import { Link } from 'react-router-dom';
import './store.css';

function Store() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  const featuredProducts = getFeaturedProducts();
  const filteredProducts = getProductsByCategory(activeCategory);
  const selectedProduct = selectedProductId ? getProductById(selectedProductId) : null;
  
  // Rola para o topo quando o componente for montado
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  
  // Efeito de spotlight seguindo o cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.left = `${mousePosition.x}px`;
      spotlightRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);
  
  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBackToProducts = () => {
    setSelectedProductId(null);
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen store-page spotlight-container">
        {/* Spotlight effect */}
        <div ref={spotlightRef} className="spotlight" />
        
        <Header 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          onCartClick={toggleCart}
        />
        
        <main className="flex-grow pt-20">
          {selectedProduct ? (
            <div className="container mx-auto px-4 py-8 fade-in">
              <ProductDetail 
                product={selectedProduct} 
                onBackClick={handleBackToProducts}
              />
            </div>
          ) : (
            <>
              <div className="fade-in">
                <HeroSection />
              </div>
              
              <div className="slide-up delay-100">
                <FeaturedProducts 
                  products={featuredProducts} 
                  onProductClick={handleProductClick}
                />
              </div>
              
              <div className="py-12 bg-white slide-up delay-200">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {activeCategory === 'all' ? 'All Products' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Browse our selection of high-quality products
                    </p>
                  </div>
                  
                  <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
                </div>
              </div>
              
              <div className="slide-up delay-300">
                <PromoBanner />
              </div>
              
              <div className="slide-up delay-400">
                <Testimonials />
              </div>
            </>
          )}
        </main>
        
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default Store;
