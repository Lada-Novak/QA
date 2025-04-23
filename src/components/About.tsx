
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 reveal-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 reveal-element">Обо мне</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center reveal-element" data-delay="200">
            <div className="w-64 h-64 rounded-full border-4 border-neon-purple overflow-hidden shadow-lg shadow-neon-purple/30">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                {/* <span className="text-3xl text-white animate-pulse">QA</span> */}
                <img src="/foto.png" alt="Моё фото" style={{ maxWidth: '179%' }} />

              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-white reveal-element" data-delay="400">
            <p className="text-lg mb-6">
              Привет! Я опытный мануальный QA Engineer с обширными знаниями в области тестирования. 
              Последние 5 лет я помогаю командам разработчиков создавать надежные и качественные программные продукты.
            </p>
            <p className="text-lg mb-6">
              Моя специализация включает комплексное ручное тестирование веб и мобильных приложений, 
              от функционального и регрессионного до исследовательского и приемочного тестирования.
            </p>
            <p className="text-lg">
              Моя цель - не просто находить ошибки, а помогать создавать продукты, 
              которые будут безупречно работать для каждого пользователя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
