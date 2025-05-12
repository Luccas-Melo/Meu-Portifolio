import React from 'react';

const Testimonials: React.FC = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-purple-600">Depoimentos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-purple-50 rounded-lg p-6 shadow">
          <p className="mb-2">u201cu00d3timo atendimento e entrega super ru00e1pida. Recomendo muito!u201d</p>
          <span className="font-bold text-purple-700">u2014 Cliente Satisfeito</span>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 shadow">
          <p className="mb-2">u201cProdutos de altu00edssima qualidade, voltarei a comprar!u201d</p>
          <span className="font-bold text-purple-700">u2014 Comprador Feliz</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
