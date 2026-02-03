import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, Lightbulb, Shield, Heart, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia.',
  },
  {
    icon: Shield,
    title: 'Calidad',
    description: 'Cada proyecto cumple con los más altos estándares de calidad y rendimiento.',
  },
  {
    icon: Heart,
    title: 'Transparencia',
    description: 'Comunicación clara y honesta en cada etapa del proyecto.',
  },
  {
    icon: Users,
    title: 'Soporte Continuo',
    description: 'Estamos contigo antes, durante y después de cada implementación.',
  },
];

export default function Nosotros() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gray-50 dark:bg-tech-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-tech-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-tech-cyan/5 rounded-full blur-[100px]" />
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
            {t('about.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title', { highlight: '' })}
            <span className="text-gradient">{t('about.highlight')}</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left - Image/Visual */}
            <div
              ref={contentRef}
              className={`transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Nuestro equipo"
                    className="w-full h-auto"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/30 to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-tech-gray rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-tech-cyan/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Right - Content */}
            <div
              className={`transition-all duration-700 delay-200 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Transformando el futuro digital de las empresas
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t('about.description', { company: 'KreaNex' })}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t('about.experience')}
              </p>

              {/* Mission */}
              <div className="bg-white dark:bg-tech-gray/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {t('about.mission.title')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('about.mission.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            ref={valuesRef}
            className={`transition-all duration-700 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
              {t('about.values.title')}
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white dark:bg-tech-gray/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-tech-blue/30 transition-all duration-300 hover:-translate-y-1 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 flex items-center justify-center mb-4 group-hover:from-tech-blue group-hover:to-tech-cyan transition-all duration-300">
                      <Icon className="w-6 h-6 text-tech-blue group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
