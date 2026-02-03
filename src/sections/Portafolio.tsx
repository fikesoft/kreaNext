import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce Premium',
    description: 'Desarrollo completo de una tienda online con más de 10,000 productos, integración con múltiples pasarelas de pago y sistema de gestión de inventario en tiempo real.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'E-commerce',
    client: 'FashionStore Pro',
    results: 'Aumento del 150% en ventas online',
  },
  {
    id: 2,
    title: 'Chatbot IA para Atención al Cliente',
    description: 'Implementación de un chatbot inteligente con procesamiento de lenguaje natural que atiende consultas 24/7 y se integra con WhatsApp, Messenger y la web.',
    image: '/project-chatbot.jpg',
    tags: ['Python', 'OpenAI GPT', 'Dialogflow', 'WhatsApp API'],
    category: 'IA & Chatbots',
    client: 'ServiTelco',
    results: '70% reducción en tiempos de respuesta',
  },
  {
    id: 3,
    title: 'Sistema de Automatización CRM',
    description: 'Automatización completa del flujo de ventas, desde la captación de leads hasta el seguimiento post-venta, integrando múltiples herramientas y APIs.',
    image: '/project-automation.jpg',
    tags: ['Make', 'Zapier', 'HubSpot', 'Salesforce'],
    category: 'Automatización',
    client: 'InmoGlobal',
    results: 'Ahorro de 35 horas semanales',
  },
  {
    id: 4,
    title: 'App Web para Gestión de Clínicas',
    description: 'Plataforma integral para gestión de citas, historiales médicos, recordatorios automáticos y facturación para una red de 15 clínicas dentales.',
    image: '/project-healthcare.jpg',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    category: 'Salud',
    client: 'DentalCare Network',
    results: 'Reducción del 60% en citas perdidas',
  },
  {
    id: 5,
    title: 'Dashboard Analytics en Tiempo Real',
    description: 'Sistema de visualización de datos con métricas en tiempo real, reportes automáticos y alertas inteligentes para toma de decisiones.',
    image: '/project-analytics.jpg',
    tags: ['React', 'D3.js', 'Node.js', 'Redis'],
    category: 'Data & Analytics',
    client: 'DataDriven Corp',
    results: 'Decisiones 3x más rápidas',
  },
  {
    id: 6,
    title: 'Plataforma LMS Educativa',
    description: 'Sistema de gestión de aprendizaje con cursos interactivos, seguimiento de progreso, gamificación y asistente virtual para estudiantes.',
    image: '/project-education.jpg',
    tags: ['Next.js', 'Python', 'TensorFlow', 'MongoDB'],
    category: 'Educación',
    client: 'EduTech Academy',
    results: '95% tasa de finalización de cursos',
  },
];

function ProjectCard({ 
  project, 
  index, 
  onClick 
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div 
        onClick={onClick}
        className="group relative bg-white dark:bg-tech-gray/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-tech-blue/90 text-white border-0">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-tech-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portafolio() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portafolio" className="py-20 lg:py-32 bg-white dark:bg-tech-gray/30 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium mb-4">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('portfolio.title', { highlight: '' })}
            <span className="text-gradient">{t('portfolio.highlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Descripción</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cliente</h4>
                      <p className="text-gray-600 dark:text-gray-400">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Resultados</h4>
                      <p className="text-tech-blue font-medium">{selectedProject.results}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologías</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
