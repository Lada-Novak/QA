
import React from 'react';
import { Check, Globe, Server, Search, TabletSmartphone, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'UI/UX Тестирование',
      icon: <Globe className="w-8 h-8 text-neon-purple" />,
      skills: ['Функциональное тестирование', 'Регрессионное тестирование', 'Cross-browser тестирование', 'Тестирование удобства использования'],
    },
    {
      title: 'API Тестирование',
      icon: <Server className="w-8 h-8 text-neon-purple" />,
      skills: ['REST API', 'SOAP API', 'Postman', 'Swagger', 'SoapUI'],
    },
    {
      title: 'Исследовательское тестирование',
      icon: <Search className="w-8 h-8 text-neon-purple" />,
      skills: ['Ad-hoc тестирование', 'Разведочное тестирование', 'Тестирование по сценариям', 'Анализ пользовательских историй'],
    },
    {
      title: 'Мобильное тестирование',
      icon: <TabletSmartphone className="w-8 h-8 text-neon-purple" />,
      skills: ['Android', 'iOS', 'Pairwise тестирование', 'Перекрестное устройство', 'Тестирование UX/UI'],
    },
    {
      title: 'Тестирование баз данных',
      icon: <Database className="w-8 h-8 text-neon-purple" />,
      skills: ['Валидация данных', 'SQL запросы', 'Тестирование интеграции', 'Проверка целостности', 'Тестирование миграций'],
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-bg/50 reveal-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 reveal-element">Навыки</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-3d hover:translate-y-[-10px] reveal-element" 
              data-delay={index * 100}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2 w-full">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center">
                      <Check className="w-4 h-4 mr-2 text-neon-blue" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
