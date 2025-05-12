import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturedProducts from './components/home/FeaturedProducts';
import Testimonials from './components/home/Testimonials';
import PromoBanner from './components/home/PromoBanner';
import ProductGrid from './components/products/ProductGrid';
import ProductDetail from './components/products/ProductDetail';
import CartSidebar from './components/cart/CartSidebar';
import { Category } from './types';
import { getFeaturedProducts, getProductById, getProductsByCategory } from './data/products';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const featuredProducts = getFeaturedProducts();
  const filteredProducts = getProductsByCategory(activeCategory);
  const selectedProduct = selectedProductId ? getProductById(selectedProductId) : null;
  
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
      <div className="flex flex-col min-h-screen">
        <Header 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          onCartClick={toggleCart}
        />
        
        <main className="flex-grow pt-20">
          {selectedProduct ? (
            <div className="container mx-auto px-4 py-8">
              <ProductDetail 
                product={selectedProduct} 
                onBackClick={handleBackToProducts}
              />
            </div>
          ) : (
            <>
              <HeroSection />
              
              <FeaturedProducts 
                products={featuredProducts} 
                onProductClick={handleProductClick}
              />
              
              <div className="py-12 bg-white">
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
              
              <PromoBanner />
              
              <Testimonials />
            </>
          )}
        </main>
        
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;