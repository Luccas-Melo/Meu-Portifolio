import React from 'react';
import { useCart } from '../../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, getTotalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <aside className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-lg">Carrinho</h2>
        <button onClick={onClose} className="text-purple-500 hover:underline">Fechar</button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500">Seu carrinho estu00e1 vazio.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.product.id} className="flex items-center gap-4 border-b pb-2">
                <img src={item.product.image} alt={item.product.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.product.id)} className="text-red-500">Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span>Total:</span>
          <span className="font-bold">R$ {getTotalPrice().toFixed(2)}</span>
        </div>
        <button onClick={clearCart} className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">Limpar Carrinho</button>
      </div>
    </aside>
  );
};

export default CartSidebar;
