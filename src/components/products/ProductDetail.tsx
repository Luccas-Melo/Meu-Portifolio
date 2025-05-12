import React, { useState } from 'react';
import { Product } from '../../types';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Star, Minus, Plus, ShoppingCart, ArrowLeft, Package, RefreshCw, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBackClick: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackClick }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const { name, price, originalPrice, description, image, rating, stockCount, category } = product;
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < stockCount) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        onClick={onBackClick}
        className="m-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-auto object-cover"
          />
          {discount > 0 && (
            <Badge variant="error" className="absolute top-4 right-4">
              {discount}% OFF
            </Badge>
          )}
        </div>
        
        <div>
          <div className="mb-2">
            <Badge variant="outline" className="capitalize">
              {category}
            </Badge>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-1 text-lg">{rating.toFixed(1)}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600">
              {stockCount > 10 ? 'In stock' : stockCount > 0 ? `Only ${stockCount} left` : 'Out of stock'}
            </span>
          </div>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-3 text-xl text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{description}</p>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="inline-flex items-center border border-gray-300 rounded-md">
              <button 
                className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 text-gray-900">{quantity}</span>
              <button 
                className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                onClick={increaseQuantity}
                disabled={quantity >= stockCount}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <Button onClick={handleAddToCart} disabled={stockCount === 0}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
          
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center text-gray-700">
              <Truck className="w-5 h-5 mr-3 text-gray-500" />
              <span>Free shipping on orders over $75</span>
            </div>
            <div className="flex items-center text-gray-700">
              <RefreshCw className="w-5 h-5 mr-3 text-gray-500" />
              <span>30-day easy returns</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Package className="w-5 h-5 mr-3 text-gray-500" />
              <span>Secured packaging</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;