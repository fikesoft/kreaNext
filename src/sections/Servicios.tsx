import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Code2, 
  Settings, 
  Bot, 
  LineChart,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web Personalizado',
    shortDescription: 'Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas con front-end (React, Vue) y back-end (Node.js, Python).',
    description: 'Creamos experiencias digitales excepcionales que combinan diseño atractivo con funcionalidad robusta. Nuestro equipo de desarrolladores full-stack utiliza las últimas tecnologías para construir soluciones web que no solo se ven bien, sino que también funcionan perfectamente.',
    benefits: [
      'Diseño responsive para todos los dispositivos',
      'Optimización SEO y rendimiento',
      'Integración con CMS y bases de datos',
      'Mantenimiento y soporte continuo',
    ],
    features: [
      'Desarrollo Frontend con React, Vue.js y Angular',
      'Backend escalable con Node.js, Python y PHP',
      'Diseño UI/UX centrado en el usuario',
      'Optimización Core Web Vitals',
      'Integración con APIs de terceros',
      'Sistemas de autenticación seguros',
      'Panel de administración personalizado',
      'Backup automático y recuperación',
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'Next.js', 'TypeScript'],
    timeline: '2-8 semanas',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'shadow-blue-500/30',
  },
  {
    icon: Settings,
    title: 'Automatizaciones Empresariales',
    shortDescription: 'Automatizamos procesos repetitivos para ahorrar tiempo y reducir errores. Integraciones con CRM, ERP, plataformas de email marketing y redes sociales.',
    description: 'Elimina las tareas repetitivas y libera a tu equipo para que se enfoque en lo que realmente importa. Diseñamos flujos de trabajo automatizados que conectan tus herramientas favoritas y sincronizan datos en tiempo real.',
    benefits: [
      'Automatización de flujos de trabajo',
      'Integración con herramientas existentes (Make, Zapier, APIs)',
      'Sincronización de datos entre sistemas',
      'Reportes automáticos y análisis en tiempo real',
    ],
    features: [
      'Integración con CRM (Salesforce, HubSpot, Pipedrive)',
      'Automatización de email marketing',
      'Sincronización de bases de datos',
      'Generación automática de reportes',
      'Notificaciones y alertas personalizadas',
      'Workflows condicionales avanzados',
      'Procesamiento de datos en batch',
      'Webhooks y APIs personalizadas',
    ],
    technologies: ['Make', 'Zapier', 'n8n', 'Airtable', 'Google Apps Script'],
    timeline: '1-3 semanas',
    color: 'from-purple-500 to-pink-500',
    glowColor: 'shadow-purple-500/30',
  },
  {
    icon: Bot,
    title: 'Chatbots con IA',
    shortDescription: 'Chatbots inteligentes que atienden a tus clientes 24/7 con procesamiento de lenguaje natural (NLP) y machine learning. Integrados con WhatsApp, web, Messenger y más.',
    description: 'Ofrece atención al cliente excepcional las 24 horas del día, los 7 días de la semana. Nuestros chatbots con inteligencia artificial entienden el contexto, aprenden de cada conversación y proporcionan respuestas precisas y personalizadas.',
    benefits: [
      'Atención al cliente automatizada 24/7',
      'Procesamiento de lenguaje natural avanzado',
      'Integración multicanal (WhatsApp, web, redes sociales)',
      'Aprendizaje continuo y personalización',
      'Reducción de costos operativos hasta 70%',
    ],
    features: [
      'Procesamiento de lenguaje natural (NLP)',
      'Integración con WhatsApp Business API',
      'Conexión con Messenger e Instagram',
      'Base de conocimiento personalizable',
      'Escalado automático a agentes humanos',
      'Análisis de sentimiento del cliente',
      'Reportes de conversaciones y métricas',
      'Entrenamiento continuo con ML',
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'Python', 'TensorFlow', 'WhatsApp API'],
    timeline: '2-4 semanas',
    color: 'from-green-500 to-emerald-500',
    glowColor: 'shadow-green-500/30',
  },
  {
    icon: LineChart,
    title: 'Consultoría Tecnológica',
    shortDescription: 'Análisis de tu negocio y recomendaciones tecnológicas personalizadas para optimizar procesos y maximizar ROI.',
    description: 'Nuestros expertos analizan tu infraestructura tecnológica actual, identifican oportunidades de mejora y diseñan una hoja de ruta estratégica para la transformación digital de tu empresa.',
    benefits: [
      'Auditoría tecnológica completa',
      'Estrategia digital personalizada',
      'Selección de herramientas óptimas',
      'Planificación de implementación',
    ],
    features: [
      'Auditoría de infraestructura actual',
      'Análisis de procesos y flujos de trabajo',
      'Evaluación de seguridad y cumplimiento',
      'Roadmap de transformación digital',
      'Selección de stack tecnológico',
      'Análisis de costo-beneficio',
      'Plan de migración de datos',
      'Capacitación del equipo',
    ],
    technologies: ['Análisis de datos', 'Arquitectura cloud', 'Ciberseguridad'],
    timeline: '1-2 semanas',
    color: 'from-orange-500 to-amber-500',
    glowColor: 'shadow-orange-500/30',
  },
];

function ServiceCard({ service, index, onOpen }: { service: typeof services[0]; index: number; onOpen: () => void }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group h-full bg-white dark:bg-tech-gray/50 border-gray-200 dark:border-white/10 hover:border-tech-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
        <CardContent className="p-6 lg:p-8">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300 ${service.glowColor}`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-tech-blue transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-6">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            variant="ghost"
            className="group/btn text-tech-blue hover:text-tech-cyan hover:bg-tech-blue/10 p-0 h-auto"
            onClick={onOpen}
          >
            Saber más
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function ServiceModal({ service, isOpen, onClose }: { service: typeof services[0] | null; isOpen: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t('services.modal.features')}</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-tech-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t('services.modal.technologies')}</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-tech-blue/10 text-tech-blue">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('services.modal.timeline')}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{service.timeline}</p>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-tech-blue to-tech-cyan text-white"
              onClick={() => {
                onClose();
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('services.modal.cta')}
            </Button>
            <Button variant="outline" onClick={onClose}>
              {t('services.modal.close')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Servicios() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gray-50 dark:bg-tech-dark relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-tech-blue/10 text-tech-blue text-sm font-medium mb-4">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services.title', { highlight: '' })}
            <span className="text-gradient">{t('services.highlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              onOpen={() => openModal(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
