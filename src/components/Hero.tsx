
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const slogans = [
    "Нахожу баги до релиза",
    "Глаза, которые видят детали",
    "Качество - мой приоритет",
    "Защищаю репутацию продукта",
    "Тестирую как пользователь"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      <div className="z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-white">Manual QA</span> <span className="text-neon-purple animate-glow">Engineer</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-8">
          Expert in Manual Testing
        </h2>
        
        <div className="h-16">
          <p 
            key={currentSlogan}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-neon-blue mb-12 animate-fade-in"
          >
            "{slogans[currentSlogan]}"
          </p>
        </div>
        
        <div className="mt-12">
          <a href="#about" className="neon-button">
            Узнать больше
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="block text-white">
          <ChevronDown size={32} className="mx-auto" />
        </a>
      </div>
      
      <div className="absolute w-full h-1/4 bottom-0 bg-gradient-to-t from-dark-bg to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
