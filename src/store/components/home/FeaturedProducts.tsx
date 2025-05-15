import React from 'react';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick: (id: number) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onProductClick }) => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-purple-600">Destaques</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="card-section overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => onProductClick(product.id)}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-purple-500 font-semibold text-xl mb-2">R$ {product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
