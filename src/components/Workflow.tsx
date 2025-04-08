
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      number: 1,
      title: 'Анализ требований',
      description: 'Изучение документации, бизнес-требований и пользовательских сценариев для полного понимания продукта.'
    },
    {
      number: 2,
      title: 'Планирование тестирования',
      description: 'Разработка стратегии, определение критериев приемки и создание тест-планов и сценариев.'
    },
    {
      number: 3,
      title: 'Ручное тестирование',
      description: 'Выполнение функциональных, регрессионных и исследовательских тестов для выявления дефектов.'
    },
    {
      number: 4,
      title: 'Отчёты о дефектах',
      description: 'Подробное документирование обнаруженных дефектов с шагами воспроизведения и ожидаемым поведением.'
    },
    {
      number: 5,
      title: 'Регрессионное тестирование',
      description: 'Проверка исправленных дефектов и убеждение, что новые изменения не нарушают существующую функциональность.'
    },
    {
      number: 6,
      title: 'Отчетность и анализ',
      description: 'Сбор и анализ результатов тестирования, формирование отчетов и рекомендаций для команды.'
    }
  ];

  return (
    <section id="workflow" className="py-20 md:py-32 bg-dark-bg/50 reveal-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 reveal-element">Процесс работы</h2>

        <div className="workflow-container overflow-x-auto pb-8 reveal-element" data-delay="200">
          <div className="flex min-w-max">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="workflow-step min-w-[300px] max-w-[300px] mx-4 first:ml-0 last:mr-0"
              >
                <div className="card-3d h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-neon-purple bg-dark-bg text-neon-purple text-xl font-bold">
                        {step.number}
                      </span>
                      
                      {index < steps.length - 1 && (
                        <ArrowRight className="text-neon-blue" size={24} />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 reveal-element" data-delay="400">
          <p>← Прокрутите вправо чтобы увидеть весь процесс →</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
