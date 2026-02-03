import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TrendingDown, CheckCircle, Activity, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: 70,
    suffix: '%',
    label: 'Reducción en tiempo de respuesta al cliente',
    description: 'Con chatbots inteligentes 24/7',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle,
    value: 50,
    suffix: '+',
    label: 'Proyectos completados exitosamente',
    description: 'Con clientes satisfechos',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Activity,
    value: 99.9,
    suffix: '%',
    label: 'Uptime garantizado',
    description: 'Infraestructura cloud robusta',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Clock,
    value: 30,
    suffix: 'h',
    label: 'Ahorro promedio mensual',
    description: 'Por cada automatización implementada',
    color: 'from-orange-500 to-amber-500',
  },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  isVisible 
}: { 
  value: number; 
  suffix: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      countRef.current = 0;
      return;
    }

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = value * easeOut;
      
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, value]);

  const displayValue = value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count).toString();

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const Icon = stat.icon;

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
      <div className="relative group">
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
        
        <div className="relative bg-white dark:bg-tech-gray/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-tech-blue/30 transition-all duration-300">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Value */}
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            <AnimatedCounter 
              value={stat.value} 
              suffix={stat.suffix} 
              isVisible={isVisible} 
            />
          </div>

          {/* Label */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {stat.label}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Beneficios() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-tech-dark dark:to-tech-gray/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 102, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
            Resultados Comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Beneficios <span className="text-gradient">Clave</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Números que hablan por sí solos. Estos son los resultados que nuestros clientes
            han logrado al implementar nuestras soluciones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
