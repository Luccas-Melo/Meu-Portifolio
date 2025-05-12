import React from 'react';
import Button from '../ui/Button';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">Promoção de Verão!</h2>
            <p className="text-amber-100 text-lg">
              Até 50% de desconto em produtos selecionados. Oferta por tempo limitado.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="primary" className="bg-white text-amber-600 hover:bg-gray-100">
              Aproveitar Promoção
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;