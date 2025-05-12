import React from 'react';
import { CartItem as CartItemType } from '../../types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleDecrease = () => {
    updateQuantity(product.id, quantity - 1);
  };
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">R$ {product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <button
          onClick={handleDecrease}
          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="mx-2 text-gray-900 w-8 text-center">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      <div className="ml-4 text-right">
        <p className="text-base font-medium text-gray-900">
          R$ {(product.price * quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="mt-1 text-sm text-red-500 hover:text-red-700 flex items-center"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;