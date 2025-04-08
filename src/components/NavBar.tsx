
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white">
          <span className="text-neon-purple animate-glow">QA</span> <span className="text-white">Portfolio</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-neon-purple transition-colors">Обо мне</a>
          <a href="#skills" className="text-white hover:text-neon-purple transition-colors">Навыки</a>
          <a href="#projects" className="text-white hover:text-neon-purple transition-colors">Проекты</a>
          <a href="#workflow" className="text-white hover:text-neon-purple transition-colors">Процесс</a>
          <a href="#contact" className="text-white hover:text-neon-purple transition-colors">Контакты</a>
        </div>
        
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-dark-bg/95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl transition-all duration-300 backdrop-blur-lg ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a href="#hero" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Главная</a>
        <a href="#about" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Обо мне</a>
        <a href="#skills" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Навыки</a>
        <a href="#projects" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Проекты</a>
        <a href="#workflow" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Процесс</a>
        <a href="#contact" className="text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Контакты</a>
        <button className="text-white p-2" onClick={toggleMenu}>
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
