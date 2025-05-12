import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Produtos Premium para<br />Seu Estilo de Vida
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Descubra produtos incríveis a preços imbatíveis. Qualidade para todos os gostos e orçamentos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              Comprar Agora
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Ver Ofertas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection