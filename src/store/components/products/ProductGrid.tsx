import React from 'react';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (id: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => (
  <div className="grid md:grid-cols-4 gap-8">
    {products.map(product => (
      <div key={product.id} className="card-section overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => onProductClick(product.id)}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="text-purple-500 font-semibold text-xl mb-2">R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProductGrid;
