import React from 'react';
import { Product } from '../../types';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: number) => void;
}

const categoryLabels: Record<string, string> = {
  electronics: 'Eletrônicos',
  clothing: 'Roupas',
  home: 'Casa',
  accessories: 'Acessórios',
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();
  const { id, name, price, originalPrice, image, rating, featured, category } = product;
  
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <div 
      className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => onProductClick(id)}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <Badge variant="success" className="absolute top-2 left-2">
            Destaque
          </Badge>
        )}
        {discount > 0 && (
          <Badge variant="error" className="absolute top-2 right-2">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
  <h3 className="font-medium text-gray-900 text-lg truncate">{name}</h3>
  {category && (
    <Badge variant="outline" className="capitalize">
      {categoryLabels[category] || category}
    </Badge>
  )}
</div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">R${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                R${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;