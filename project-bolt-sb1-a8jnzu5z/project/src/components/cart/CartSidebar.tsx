import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from '../ui/Button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, getTotalPrice, clearCart } = useCart();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Carrinho de Compras</h2>
                  <button
                    onClick={onClose}
                    className="ml-3 flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-8">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Seu carrinho está vazio</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={onClose}
                      >
                        Continuar Comprando
                      </Button>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map(item => (
                          <li key={item.product.id} className="py-2">
                            <CartItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {cart.length > 0 && (
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                    <p>Subtotal</p>
                    <p>R$ {getTotalPrice().toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Frete e impostos calculados no checkout.
                  </p>
                  <Button fullWidth size="lg" className="mb-3">
                    Finalizar Compra
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    size="lg"
                    onClick={clearCart}
                  >
                    Limpar Carrinho
                  </Button>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{' '}
                      <button
                        type="button"
                        className="font-medium text-blue-600 hover:text-blue-500"
                        onClick={onClose}
                      >
                        Continuar Comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;