import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const serviceOptions = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'automation', label: 'Automatización' },
  { value: 'chatbot', label: 'Chatbot con IA' },
  { value: 'consulting', label: 'Consultoría' },
  { value: 'other', label: 'Otro' },
];

export default function Contacto() {
  const { t } = useTranslation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-tech-dark dark:to-tech-gray/30 relative overflow-hidden">
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
            {t('contact.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contact.title', { highlight: '' }).replace(t('contact.highlight', ''), '')}
            <span className="text-gradient">{t('contact.highlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-6">
                  <a
                    href="mailto:rayengea@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 flex items-center justify-center group-hover:from-tech-blue group-hover:to-tech-cyan transition-all duration-300">
                      <Mail className="w-5 h-5 text-tech-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-tech-blue transition-colors">
                        contacto@kreanex.es
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+34600794114"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 flex items-center justify-center group-hover:from-tech-blue group-hover:to-tech-cyan transition-all duration-300">
                      <Phone className="w-5 h-5 text-tech-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.form.phone')}</p>
                      <p className="text-gray-900 dark:text-white font-medium group-hover:text-tech-blue transition-colors">
                        +34 600 794 114
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-tech-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.location')}</p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {t('contact.info.locationValue')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h4 className="text-lg font-semibold">{t('contact.whatsapp.title')}</h4>
                </div>
                <p className="text-white/80 mb-4 text-sm">
                  {t('contact.whatsapp.description')}
                </p>
                <a
                  href="https://wa.me/34600794114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('contact.whatsapp.cta')}
                </a>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125332.30733949768!2d-1.1824877!3d37.9923795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f5b1e5c5b1%3A0x403d278a576e680!2sMurcia%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación KreaNex"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={`lg:col-span-3 transition-all duration-700 ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-white dark:bg-tech-gray/50 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-white/10 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t('contact.success.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {t('contact.success.description')}
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-tech-blue text-tech-blue hover:bg-tech-blue/10"
                    >
                      {t('contact.success.cta')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.form.namePlaceholder')}
                          required
                          className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-tech-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.form.emailPlaceholder')}
                          required
                          className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-tech-blue"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contact.form.phonePlaceholder')}
                          className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-tech-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{t('contact.form.service')} *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                          required
                        >
                          <SelectTrigger className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-tech-blue">
                            <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.messagePlaceholder')}
                        required
                        rows={5}
                        className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 focus:border-tech-blue resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-tech-blue to-tech-cyan text-white hover:shadow-glow transition-all duration-300 py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      {t('contact.form.privacy')}{' '}
                      <button 
                        type="button"
                        onClick={() => document.querySelector('footer button')?.dispatchEvent(new Event('click'))}
                        className="text-tech-blue hover:underline"
                      >
                        {t('contact.form.privacyLink')}
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
