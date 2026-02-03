import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'CEO',
    company: 'TechRetail España',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'KreaNex transformó completamente nuestra operación de e-commerce. El chatbot con IA que implementaron redujo nuestros tiempos de respuesta en un 80% y aumentó las conversiones en un 35%. Su equipo es altamente profesional y entregó el proyecto antes de lo previsto.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Director de Operaciones',
    company: 'Consultora Financiera Global',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Las automatizaciones que desarrollaron para nuestros procesos internos nos han ahorrado más de 40 horas semanales. La integración con nuestro CRM y sistemas existentes fue impecable. Sin duda, el mejor socio tecnológico con el que hemos trabajado.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Clínica Dental Sonrisa',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Implementamos un sistema de recordatorios automáticos y un chatbot para información básica. Nuestras citas perdidas se redujeron drásticamente y nuestro personal puede enfocarse en brindar mejor atención. La inversión se recuperó en menos de 3 meses.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Javier López',
    role: 'Gerente de Marketing',
    company: 'InmoGlobal',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Trabajar con KreaNex ha sido una experiencia excepcional. Desarrollaron una plataforma web a medida que ha duplicado nuestras leads cualificadas. Su atención al cliente y capacidad de respuesta son incomparables.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    role: 'Directora Académica',
    company: 'EduTech Academy',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    content: 'La plataforma LMS que KreaNex desarrolló para nosotros ha revolucionado la forma en que enseñamos. Los estudiantes están más comprometidos y nuestra tasa de finalización de cursos ha subido al 95%. Un equipo verdaderamente talentoso.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Pedro Fernández',
    role: 'CEO',
    company: 'DataDriven Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'El dashboard de analytics que KreaNex construyó nos permite tomar decisiones de negocio 3 veces más rápido. La visualización de datos es intuitiva y las alertas automáticas nos han ayudado a detectar oportunidades que antes pasaban desapercibidas.',
    rating: 5,
  },
];

export default function Testimonios() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-gray-50 dark:bg-tech-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-tech-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-tech-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-tech-cyan/10 text-tech-cyan text-sm font-medium mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('testimonials.title', { highlight: '' })}
            <span className="text-gradient">{t('testimonials.highlight')}</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white dark:bg-tech-gray/50 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-white/10 shadow-xl">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 lg:left-12">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-tech-blue/30"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentTestimonial.role} en {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-gray-300 dark:border-white/20 hover:bg-tech-blue/10 hover:border-tech-blue/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-tech-blue w-8'
                        : 'bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-gray-300 dark:border-white/20 hover:bg-tech-blue/10 hover:border-tech-blue/50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
