
import React, { useState } from 'react';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваше обращение. Я отвечу вам в ближайшее время.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 reveal-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 reveal-element">Связаться со мной</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 reveal-element" data-delay="200">
            <form onSubmit={handleSubmit} className="card-3d p-6 md:p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-bg/50 border border-neon-purple/30 rounded-lg p-3 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Ваш email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-bg/50 border border-neon-purple/30 rounded-lg p-3 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-bg/50 border border-neon-purple/30 rounded-lg p-3 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-button w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  'Отправить сообщение'
                )}
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center reveal-element" data-delay="400">
            <div className="card-3d p-6 md:p-8 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Контактная информация</h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Всегда открыт к новым предложениям, интересным проектам и возможностям сотрудничества.
                  Не стесняйтесь связаться со мной любым удобным способом.
                </p>
                <p>
                  Email: your.email@example.com<br />
                  Местоположение: Москва, Россия
                </p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-neon-purple flex items-center justify-center group-hover:bg-neon-purple/20 transition-all">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-neon-purple flex items-center justify-center group-hover:bg-neon-purple/20 transition-all">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </a>
              
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="w-12 h-12 rounded-full border border-neon-purple flex items-center justify-center group-hover:bg-neon-purple/20 transition-all">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
