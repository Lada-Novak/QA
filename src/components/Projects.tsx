
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Мануальное тестирование E-commerce',
      description: 'Комплексное тестирование крупного интернет-магазина с оформлением документации и контролем качества.',
      tags: ['Функциональное', 'UI/UX', 'Регрессионное', 'Test cases'],
      image: 'https://placehold.co/600x400/1A1F2C/9b87f5?text=E-commerce+Testing',
      githubLink: '#',
      demoLink: '#',
      backDescription: 'Результаты: выявлено и исправлено более 120 критических и серьезных дефектов, улучшены пользовательские сценарии, обновлена тестовая документация и регрессионные наборы тестов.'
    },
    {
      title: 'Ручное API тестирование Финтех-платформы',
      description: 'Тщательное тестирование API финансовой платформы с фокусом на безопасность и целостность данных.',
      tags: ['Postman', 'API Testing', 'Security', 'Data Validation'],
      image: 'https://placehold.co/600x400/1A1F2C/9b87f5?text=API+Testing',
      githubLink: '#',
      demoLink: '#',
      backDescription: 'Результаты: проверено более 50 критических API-эндпоинтов, выявлены и исправлены проблемы с безопасностью и производительностью, обнаружены и устранены проблемы с обработкой ошибок.'
    },
    {
      title: 'Мобильное тестирование приложения здоровья',
      description: 'Всестороннее ручное тестирование приложения для мониторинга здоровья на различных устройствах Android и iOS.',
      tags: ['Mobile', 'Exploratory', 'Usability', 'Cross-device'],
      image: 'https://placehold.co/600x400/1A1F2C/9b87f5?text=Mobile+Testing',
      githubLink: '#',
      demoLink: '#',
      backDescription: 'Результаты: выявлено более 80 дефектов на различных устройствах и ОС, улучшен пользовательский интерфейс, оптимизирована производительность на старых устройствах.'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 reveal-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 reveal-element">Проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-flip h-[450px] reveal-element" 
              data-delay={index * 200}
            >
              <div className="card-flip-inner relative w-full h-full">
                {/* Front of card */}
                <div className="card-front absolute w-full h-full">
                  <div className="card-3d flex flex-col h-full">
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs px-2 py-1 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-center text-sm text-neon-blue">
                        Нажмите для подробностей
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="card-back absolute w-full h-full">
                  <div className="card-3d flex flex-col h-full justify-between p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                    
                    <p className="text-gray-300 mb-auto">{project.backDescription}</p>
                    
                    <div className="flex justify-center gap-4 mt-4">
                      <a 
                        href={project.githubLink} 
                        className="flex items-center gap-2 neon-button py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={project.demoLink} 
                        className="flex items-center gap-2 neon-button py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span>Демо</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
