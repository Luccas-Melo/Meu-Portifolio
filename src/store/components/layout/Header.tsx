import React from 'react';
import { Category } from '../../types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
  onCartClick: () => void;
}

const categories: Category[] = ['all', 'electronics', 'clothing', 'home', 'accessories'];

const Header: React.FC<HeaderProps> = ({ activeCategory, setActiveCategory, onCartClick }) => (
  <header className="fixed top-0 left-0 w-full bg-white shadow z-30 h-16 flex items-center px-6">
    <div className="flex-1">
      <span className="font-bold text-purple-600 text-xl">Loja Exemplo</span>
    </div>
    <nav className="flex gap-4">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-3 py-2 rounded ${activeCategory === cat ? 'bg-purple-500 text-white' : 'hover:bg-purple-100 text-gray-700'}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
    <button onClick={onCartClick} className="ml-6 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
      Carrinho
    </button>
    <Link to="/" className="ml-4 text-purple-500 hover:text-purple-700">
      Voltar ao Portfólio
    </Link>
  </header>
);

export default Header;
