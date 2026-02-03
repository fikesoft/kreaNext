import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  MessageSquare, 
  FileText, 
  Code, 
  Rocket, 
  HeadphonesIcon 
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consulta Inicial',
    description: 'Entendemos tus necesidades, objetivos y desafíos específicos. Analizamos tu negocio para identificar oportunidades de mejora.',
    color: 'bg-blue-500',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Propuesta',
    description: 'Diseñamos una solución personalizada con alcance detallado, cronograma y presupuesto transparente.',
    color: 'bg-purple-500',
  },
  {
    icon: Code,
    number: '03',
    title: 'Desarrollo',
    description: 'Implementamos la solución con metodologías ágiles, actualizaciones constantes y revisiones periódicas.',
    color: 'bg-cyan-500',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lanzamiento',
    description: 'Ponemos en marcha la solución con capacitación completa para tu equipo y documentación detallada.',
    color: 'bg-green-500',
  },
  {
    icon: HeadphonesIcon,
    number: '05',
    title: 'Soporte Continuo',
    description: 'Mantenimiento proactivo, mejoras continuas y soporte técnico disponible cuando lo necesites.',
    color: 'bg-orange-500',
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-8 lg:gap-16 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
        <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
          <span className="text-5xl lg:text-6xl font-bold text-gray-200 dark:text-gray-800">
            {step.number}
          </span>
          <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
          {step.description}
        </p>
      </div>

      {/* Center Line & Dot */}
      <div className="relative flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-tech-blue shadow-glow z-10" />
        <div className="absolute w-px h-24 bg-gradient-to-b from-tech-blue/50 to-transparent lg:hidden" 
             style={{ top: '100%' }} />
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
}

export default function Proceso() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="proceso" className="py-20 lg:py-32 bg-white dark:bg-tech-gray/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-tech-blue/20 to-transparent" />
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
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestro <span className="text-gradient">Proceso</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Un enfoque estructurado y transparente para llevar tu proyecto desde la idea hasta la realidad.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-0">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
