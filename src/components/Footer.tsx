
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-dark-bg/80 border-t border-neon-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {currentYear} QA Engineer Portfolio. Все права защищены.</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-neon-purple hover:text-white transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
