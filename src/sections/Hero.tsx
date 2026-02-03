import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const particleCount = 80;
    const connectionDistance = 150;
    const maxConnections = 3;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
          ctx.fill();

          // Draw connections (only check every 5th particle for performance)
          if (i % 5 === 0) {
            let connections = 0;
            for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
              const dx = particles[j].x - particle.x;
              const dy = particles[j].y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                connections++;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(0, 102, 255, ${0.15 * (1 - distance / connectionDistance)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-dark"
    >
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-tech-dark/80" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-blue/10 border border-tech-blue/30 animate-fade-in">
                <Sparkles className="w-4 h-4 text-tech-cyan" />
                <span className="text-sm font-medium text-tech-cyan">
                  {t('hero.badge')}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-up stagger-1">
                {t('hero.title', { highlight1: '', highlight2: '' }).replace(t('hero.highlight1', ''), '')}
                <span className="text-gradient">{t('hero.highlight1')}</span>{' '}
                {t('hero.title', { highlight1: '', highlight2: '' }).replace(t('hero.highlight2', ''), '')}
                <span className="text-gradient">{t('hero.highlight2')}</span> e IA
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 animate-slide-up stagger-2">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-tech-blue to-tech-cyan text-white hover:shadow-glow-lg transition-all duration-300 group px-8"
                  onClick={() => scrollToSection('#servicios')}
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 px-8"
                  onClick={() => scrollToSection('#contacto')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('hero.cta.secondary')}
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 animate-slide-up stagger-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-500">{t('hero.stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">70%</div>
                  <div className="text-sm text-gray-500">{t('hero.stats.costReduction')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-500">{t('hero.stats.support')}</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative hidden lg:block animate-fade-in stagger-3">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-tech-blue/30 to-tech-cyan/30 backdrop-blur-sm" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-float">
                  <Code2 className="w-8 h-8 text-tech-cyan" />
                </div>
                <div className="absolute bottom-12 left-8 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="w-8 h-8 text-tech-orange" />
                </div>
                <div className="absolute top-1/2 -right-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-float" style={{ animationDelay: '2s' }}>
                  <MessageCircle className="w-8 h-8 text-tech-blue" />
                </div>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center shadow-glow-lg">
                      <span className="text-4xl font-bold text-white">K</span>
                    </div>
                    <p className="mt-4 text-white/80 font-medium">KreaNex</p>
                  </div>
                </div>

                {/* Orbiting Dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-tech-cyan" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-tech-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
