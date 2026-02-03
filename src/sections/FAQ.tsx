import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un sitio web?',
    answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que una aplicación web completa puede tomar de 1 a 3 meses. Durante la consulta inicial, te proporcionaremos un cronograma detallado basado en tus requerimientos específicos.',
  },
  {
    question: '¿Qué es un chatbot con IA y cómo puede ayudar a mi negocio?',
    answer: 'Un chatbot con IA es un asistente virtual que utiliza procesamiento de lenguaje natural para entender y responder consultas de clientes de manera automática. Puede atender clientes 24/7, responder preguntas frecuentes, capturar leads, agendar citas y mucho más. Esto reduce costos operativos hasta un 70% y mejora la satisfacción del cliente con respuestas instantáneas.',
  },
  {
    question: '¿Ofrecen mantenimiento después del lanzamiento?',
    answer: 'Sí, ofrecemos planes de mantenimiento y soporte continuo que incluyen: actualizaciones de seguridad, respaldos regulares, monitoreo de rendimiento, corrección de errores y mejoras continuas. Tenemos diferentes planes según tus necesidades, desde soporte básico hasta soporte premium con respuesta garantizada en menos de 4 horas.',
  },
  {
    question: '¿Puedo integrar el chatbot con mi CRM actual?',
    answer: 'Absolutamente. Nuestros chatbots se integran con la mayoría de CRMs populares del mercado como Salesforce, HubSpot, Zoho, Pipedrive y muchos más. También podemos desarrollar integraciones personalizadas con sistemas propietarios mediante APIs. La integración permite sincronizar automáticamente conversaciones, leads y datos de clientes.',
  },
  {
    question: '¿Cuál es el costo promedio de sus servicios?',
    answer: 'Los costos varían según el alcance y complejidad del proyecto. El desarrollo de una landing page profesional comienza desde €1,500, sitios web corporativos desde €3,000, y aplicaciones web complejas desde €8,000. Las automatizaciones y chatbots tienen modelos flexibles según volumen. Ofrecemos consultoría gratuita para evaluar tu proyecto y darte un presupuesto detallado.',
  },
  {
    question: '¿Trabajan con clientes internacionales?',
    answer: 'Sí, trabajamos con clientes de todo el mundo. Tenemos experiencia colaborando con empresas de España, Latinoamérica, Estados Unidos y Europa. Utilizamos herramientas de comunicación modernas (Slack, Zoom, Notion) para mantener una coordinación efectiva independientemente de la zona horaria.',
  },
  {
    question: '¿Qué metodología de trabajo utilizan?',
    answer: 'Utilizamos metodologías ágiles (Scrum/Kanban) que nos permiten entregar valor de forma incremental y adaptarnos rápidamente a cambios. El proceso incluye: reuniones de planificación semanales, demos de avance cada 2 semanas, y comunicación constante a través de herramientas colaborativas. Esto garantiza transparencia total y resultados alineados con tus expectativas.',
  },
  {
    question: '¿Cómo garantizan la seguridad de mis datos?',
    answer: 'La seguridad es nuestra prioridad. Implementamos: encriptación SSL/TLS en todas las comunicaciones, cumplimiento con GDPR y regulaciones de protección de datos, autenticación multifactor, auditorías de seguridad regulares, y almacenamiento seguro en servidores cloud certificados (AWS, Google Cloud, Azure). También firmamos acuerdos de confidencialidad (NDA) cuando es necesario.',
  },
];

export default function FAQ() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-tech-gray/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-tech-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-tech-blue/5 rounded-full blur-[100px]" />
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
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Tienes <span className="text-gradient">dudas?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aquí respondemos las preguntas más comunes. Si no encuentras lo que buscas,
            no dudes en contactarnos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-tech-gray/50 rounded-xl border border-gray-200 dark:border-white/10 px-6 data-[state=open]:border-tech-blue/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-tech-blue transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-cyan font-medium transition-colors"
          >
            Contáctanos directamente
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
