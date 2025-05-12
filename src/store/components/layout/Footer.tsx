import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 py-6 text-center text-gray-500">
    <p>Exemplo de Loja &copy; {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
