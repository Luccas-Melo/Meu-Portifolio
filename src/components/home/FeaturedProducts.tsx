import React from 'react';
import ProductGrid from '../products/ProductGrid';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick: (productId: number) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onProductClick }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of this season's top products.
          </p>
        </div>
        
        <ProductGrid products={products} onProductClick={onProductClick} />
      </div>
    </div>
  );
};

export default FeaturedProducts;