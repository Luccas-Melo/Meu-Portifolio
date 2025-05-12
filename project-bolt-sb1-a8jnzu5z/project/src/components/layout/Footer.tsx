import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">StyleStore</h3>
            <p className="mb-4">
              Produtos premium para seu estilo de vida. Qualidade a preços acessíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Loja</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Todos os Produtos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eletrônicos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roupas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casa & Jardim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acessórios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Atendimento ao Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Envio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Informações de Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span>Rua do Comércio, 123, São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span>contato@stylestore.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between">
          <p>&copy; 2025 StyleStore. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;