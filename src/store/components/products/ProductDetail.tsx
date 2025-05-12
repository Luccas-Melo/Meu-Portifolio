import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBackClick: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackClick }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
      <button className="mb-4 text-purple-500 hover:underline" onClick={onBackClick}>Voltar</button>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-64 h-64 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-purple-500 font-semibold text-xl mb-2">R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600" onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
