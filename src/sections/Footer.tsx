import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Github,
  Send,
  MapPin,
  Mail,
  Phone,
  FileText,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: t('header.nav.home'), href: '#inicio' },
    { name: t('header.nav.services'), href: '#servicios' },
    { name: t('header.nav.portfolio'), href: '#portafolio' },
    { name: t('header.nav.technologies'), href: '#tecnologias' },
    { name: t('header.nav.about'), href: '#nosotros' },
    { name: t('header.nav.contact'), href: '#contacto' },
  ];

  const services = [
    { name: 'Desarrollo Web', href: '#servicios' },
    { name: 'Automatizaciones', href: '#servicios' },
    { name: 'Chatbots IA', href: '#servicios' },
    { name: 'Consultoría', href: '#servicios' },
    { name: 'Integraciones API', href: '#servicios' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="bg-tech-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#inicio" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tech-blue to-tech-cyan flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="font-bold text-xl text-white">KreaNex</span>
              </a>
              <p className="text-gray-400 mb-6 max-w-sm">
                {t('footer.description')}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-tech-blue" />
                  <span className="text-sm">{t('contact.info.locationValue')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-tech-blue" />
                  <a href="mailto:rayengea@gmail.com" className="text-sm hover:text-tech-blue transition-colors">
                    rayengea@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-tech-blue" />
                  <a href="tel:+34600794114" className="text-sm hover:text-tech-blue transition-colors">
                    +34 600 79 41 14
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-tech-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.services')}</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                      }}
                      className="text-gray-400 hover:text-tech-blue transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t('footer.newsletter.title')}</h4>
              <p className="text-gray-400 text-sm mb-4">
                {t('footer.newsletter.description')}
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter.placeholder')}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-tech-blue"
                    required
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-tech-blue hover:bg-tech-blue/80 shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 text-xs">{t('footer.newsletter.success')}</p>
                )}
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-3">{t('footer.followUs')}</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-tech-blue hover:text-white transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => setShowPrivacy(true)}
                className="text-gray-500 hover:text-tech-blue text-sm transition-colors"
              >
                {t('footer.privacy')}
              </button>
              <button 
                onClick={() => setShowTerms(true)}
                className="text-gray-500 hover:text-tech-blue text-sm transition-colors"
              >
                {t('footer.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-tech-blue" />
              {t('footer.privacy')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-gray-600 dark:text-gray-400">
            <h3 className="font-semibold text-gray-900 dark:text-white">1. Información que recopilamos</h3>
            <p className="text-sm">
              Recopilamos información personal que nos proporcionas directamente, como tu nombre, 
              dirección de correo electrónico, número de teléfono y cualquier otra información 
              que decidas compartir con nosotros a través de nuestros formularios de contacto.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">2. Cómo usamos tu información</h3>
            <p className="text-sm">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li>Responder a tus consultas y solicitudes</li>
              <li>Proporcionar nuestros servicios</li>
              <li>Enviarte comunicaciones sobre nuestros servicios (con tu consentimiento)</li>
              <li>Mejorar nuestros servicios y sitio web</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">3. Protección de datos</h3>
            <p className="text-sm">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
              personal contra acceso no autorizado, pérdida o alteración. Cumplimos con el Reglamento 
              General de Protección de Datos (GDPR) de la UE.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">4. Tus derechos</h3>
            <p className="text-sm">
              Tienes derecho a acceder, rectificar, suprimir y portar tus datos, así como a limitar 
              u oponerte a su tratamiento. Para ejercer estos derechos, contáctanos en 
              privacy@kreanex.es.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">5. Contacto</h3>
            <p className="text-sm">
              Si tienes preguntas sobre esta política de privacidad, contáctanos en 
              rayengea@gmail.com.
            </p>
            
            <p className="text-xs text-gray-500 mt-6">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6 text-tech-blue" />
              {t('footer.terms')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-gray-600 dark:text-gray-400">
            <h3 className="font-semibold text-gray-900 dark:text-white">1. Aceptación de términos</h3>
            <p className="text-sm">
              Al acceder y utilizar los servicios de KreaNex, aceptas estar sujeto a estos 
              términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
              no podrás utilizar nuestros servicios.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">2. Descripción de servicios</h3>
            <p className="text-sm">
              KreaNex ofrece servicios de desarrollo web, automatización de procesos, 
              implementación de chatbots con inteligencia artificial y consultoría tecnológica. 
              Los detalles específicos de cada servicio se acordarán en contratos individuales.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">3. Propiedad intelectual</h3>
            <p className="text-sm">
              Tras la entrega completa y el pago total, el cliente recibe los derechos de propiedad 
              del trabajo desarrollado específicamente para su proyecto, salvo acuerdo en contrario. 
              KreaNex se reserva el derecho de utilizar el trabajo en su portafolio.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">4. Confidencialidad</h3>
            <p className="text-sm">
              Ambas partes acuerdan mantener la confidencialidad de toda la información sensible 
              compartida durante el desarrollo del proyecto. Esto incluye datos de negocio, 
              información técnica y cualquier otro material propietario.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">5. Limitación de responsabilidad</h3>
            <p className="text-sm">
              KreaNex no será responsable por daños indirectos, incidentales o consecuentes 
              derivados del uso o imposibilidad de uso de nuestros servicios. Nuestra responsabilidad 
              total no excederá el monto pagado por los servicios en cuestión.
            </p>
            
            <h3 className="font-semibold text-gray-900 dark:text-white">6. Modificaciones</h3>
            <p className="text-sm">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
            
            <p className="text-xs text-gray-500 mt-6">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
