import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  ShoppingCart, 
  Briefcase, 
  HeartPulse, 
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    shortDescription: 'Soluciones completas para tiendas online que buscan aumentar ventas y mejorar la experiencia del cliente.',
    description: 'El comercio electrónico está en constante evolución. Ayudamos a las tiendas online a destacar en un mercado competitivo mediante tecnología que optimiza cada etapa del funnel de ventas, desde la primera visita hasta la compra recurrente.',
    features: [
      'Automatización de ventas y seguimiento',
      'Chatbots de atención al cliente 24/7',
      'Integración con pasarelas de pago',
      'Gestión de inventario en tiempo real',
    ],
    solutions: [
      {
        title: 'Chatbot de Ventas',
        description: 'Asistente virtual que guía a los clientes en su compra, responde preguntas sobre productos y reduce el abandono del carrito.',
        impact: '+35% en conversiones',
      },
      {
        title: 'Automatización de Inventario',
        description: 'Sincronización automática entre tu tienda, almacenes y proveedores con alertas de stock bajo.',
        impact: '-50% en errores de stock',
      },
      {
        title: 'Recuperación de Carritos',
        description: 'Emails y mensajes automáticos para recuperar clientes que abandonaron su compra.',
        impact: '+25% en ventas recuperadas',
      },
      {
        title: 'Integración Multi-canal',
        description: 'Ventas sincronizadas en tu web, Amazon, eBay, redes sociales y marketplaces.',
        impact: 'Gestión unificada',
      },
    ],
    caseStudy: {
      client: 'FashionStore Pro',
      result: 'Aumento del 150% en ventas online',
      testimonial: 'El chatbot de KreaNex revolucionó nuestra atención al cliente. Ahora atendemos 3x más consultas con el mismo equipo.',
    },
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
  },
  {
    icon: Briefcase,
    title: 'Servicios Profesionales',
    shortDescription: 'Optimiza tu consultora o agencia con herramientas que automatizan tareas administrativas y mejoran la productividad.',
    description: 'Los profesionales independientes y consultoras necesitan maximizar su tiempo en actividades de alto valor. Nuestras soluciones eliminan las tareas administrativas repetitivas para que te enfoques en lo que mejor sabes hacer.',
    features: [
      'Agendamiento automático de citas',
      'CRM integrado con automatizaciones',
      'Gestión de proyectos y tareas',
      'Facturación y cobros automatizados',
    ],
    solutions: [
      {
        title: 'Agenda Inteligente',
        description: 'Sistema de citas que sincroniza con tu calendario, envía recordatorios y gestiona cancelaciones automáticamente.',
        impact: '-40% en citas perdidas',
      },
      {
        title: 'CRM para Servicios',
        description: 'Gestión de clientes con seguimiento de oportunidades, historial de interacciones y recordatorios de seguimiento.',
        impact: '+60% en cierre de deals',
      },
      {
        title: 'Facturación Automática',
        description: 'Generación y envío automático de facturas, recordatorios de pago y conciliación bancaria.',
        impact: '-10h/semana admin',
      },
      {
        title: 'Portal de Clientes',
        description: 'Espacio privado donde tus clientes pueden ver documentos, pagar facturas y comunicarse contigo.',
        impact: 'Mejor experiencia',
      },
    ],
    caseStudy: {
      client: 'Consultora Financiera Global',
      result: 'Ahorro de 35 horas semanales',
      testimonial: 'Automatizamos todo nuestro seguimiento de clientes. Ahora dedicamos ese tiempo a estrategia y crecimiento.',
    },
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: HeartPulse,
    title: 'Salud y Bienestar',
    shortDescription: 'Tecnología que mejora la atención al paciente y optimiza los procesos de clínicas y consultorios médicos.',
    description: 'La salud no puede esperar. Implementamos soluciones que mejoran la experiencia del paciente, reducen la carga administrativa del personal médico y optimizan la gestión de citas y recursos.',
    features: [
      'Recordatorios automáticos de citas',
      'Formularios inteligentes y seguros',
      'Chatbots para información básica',
      'Integración con historiales médicos',
    ],
    solutions: [
      {
        title: 'Recordatorios Inteligentes',
        description: 'SMS, WhatsApp y emails automáticos para confirmar citas, reduciendo significativamente las ausencias.',
        impact: '-60% en no-shows',
      },
      {
        title: 'Chatbot Médico',
        description: 'Asistente virtual que responde preguntas frecuentes, horarios y preparación para estudios 24/7.',
        impact: '-50% en llamadas',
      },
      {
        title: 'Formularios Digitales',
        description: 'Fichas médicas y consentimientos digitales con firma electrónica y almacenamiento seguro.',
        impact: 'Cumplimiento GDPR',
      },
      {
        title: 'Telemedicina',
        description: 'Plataforma de videoconsultas integrada con tu agenda y sistema de pagos.',
        impact: '+30% en consultas',
      },
    ],
    caseStudy: {
      client: 'Red DentalCare',
      result: 'Reducción del 60% en citas perdidas',
      testimonial: 'Los recordatorios automáticos cambiaron nuestro día a día. Nuestras agendas están completas y el personal puede enfocarse en la atención.',
    },
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    shortDescription: 'Plataformas digitales que transforman la manera de enseñar y aprender en el mundo moderno.',
    description: 'La educación digital es el futuro. Creamos plataformas de aprendizaje que mantienen a los estudiantes comprometidos, facilitan la gestión académica y proporcionan insights valiosos sobre el progreso del alumno.',
    features: [
      'Plataformas LMS personalizadas',
      'Asistentes virtuales para estudiantes',
      'Automatización de calificaciones',
      'Gamificación y seguimiento de progreso',
    ],
    solutions: [
      {
        title: 'LMS Personalizado',
        description: 'Plataforma de aprendizaje con cursos, evaluaciones, foros y seguimiento de progreso adaptada a tu institución.',
        impact: '+95% finalización',
      },
      {
        title: 'Tutor Virtual con IA',
        description: 'Asistente que responde dudas de estudiantes 24/7, explica conceptos y recomienda recursos.',
        impact: 'Soporte continuo',
      },
      {
        title: 'Gamificación',
        description: 'Sistema de puntos, logros y rankings que motiva a los estudiantes a completar sus cursos.',
        impact: '+40% engagement',
      },
      {
        title: 'Automatización Académica',
        description: 'Generación automática de certificados, reportes de progreso y comunicaciones con padres/alumnos.',
        impact: '-20h admin/semana',
      },
    ],
    caseStudy: {
      client: 'EduTech Academy',
      result: '95% tasa de finalización de cursos',
      testimonial: 'La gamificación transformó la experiencia de nuestros estudiantes. Ahora compiten por completar los cursos y el engagement se disparó.',
    },
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
];

function IndustryCard({ industry, index, onOpen }: { industry: typeof industries[0]; index: number; onOpen: () => void }) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const Icon = industry.icon;

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
      <Card className={`group h-full bg-white dark:bg-tech-gray/50 ${industry.borderColor} hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden border-2`}>
        <CardContent className="p-6 lg:p-8">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {industry.shortDescription}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {industry.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${industry.color} flex-shrink-0 mt-2`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            variant="ghost"
            className="group/btn text-tech-blue hover:text-tech-cyan hover:bg-tech-blue/10 p-0 h-auto"
            onClick={onOpen}
          >
            {t('industries.viewSolutions')}
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function IndustryModal({ industry, isOpen, onClose }: { industry: typeof industries[0] | null; isOpen: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  if (!industry) return null;
  const Icon = industry.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">{industry.title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-8 mt-4">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {industry.description}
          </p>

          {/* Solutions Grid */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-tech-blue" />
              {t('industries.modal.solutions')} {industry.title}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.solutions.map((solution, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">{solution.title}</h5>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 text-xs">
                      {solution.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="p-6 bg-gradient-to-r from-tech-blue/10 to-tech-cyan/10 rounded-xl border border-tech-blue/20">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-tech-blue" />
              {t('industries.modal.caseStudy')}
            </h4>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-tech-gray flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-tech-blue" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{industry.caseStudy.client}</p>
                <p className="text-tech-blue font-semibold mb-2">{industry.caseStudy.result}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{industry.caseStudy.testimonial}"</p>
              </div>
            </div>
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
              {t('industries.modal.cta')}
            </Button>
            <Button variant="outline" onClick={onClose}>
              {t('industries.modal.close')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Industrias() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (industry: typeof industries[0]) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedIndustry(null), 300);
  };

  return (
    <section id="industrias" className="py-20 lg:py-32 bg-white dark:bg-tech-gray/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-tech-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-tech-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-tech-orange/10 text-tech-orange text-sm font-medium mb-4">
            {t('industries.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('industries.title', { highlight: '' })}
            <span className="text-gradient">{t('industries.highlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('industries.subtitle')}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.title} 
              industry={industry} 
              index={index}
              onOpen={() => openModal(industry)}
            />
          ))}
        </div>
      </div>

      {/* Industry Modal */}
      <IndustryModal 
        industry={selectedIndustry} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
