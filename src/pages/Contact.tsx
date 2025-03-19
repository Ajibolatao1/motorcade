import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation(); // Translation Hook

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('visit_us'),
      details: [
        'Unit 1207,',
        'Building 1,',
        'No. 288, Zhuhai East Road,',
        'Jiaonan City, Qingdao'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('call_us'),
      details: [
        { text: '+8617864268032', link: 'tel:+8617864268032' },
        { text: '+8617852160455', link: 'tel:+8617852160455' }
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: t('whatsapp'),
      details: [
        { text: '+8617864268032 (' + t('chat_now') + ')', link: 'https://wa.me/8617864268032' },
        { text: '+8617852160455 (' + t('chat_now') + ')', link: 'https://wa.me/8617852160455' }
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
      title: t('wechat'),
      details: [
        {
          text: '+8617864268032 (' + t('scan_qr_to_chat') + ')',
          link: '/wechat-qr-17864268032.png' // Image in public folder
        },
        {
          text: '+8617852160455 (' + t('scan_qr_to_chat') + ')',
          link: '/wechat-qr-17852160455.png'
        }
      ]
    },
    
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('email_us'),
      details: [
        { text: '13061287760@163.com', link: 'mailto:13061287760@163.com' }
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('operating_hours'),
      details: [
        t('monday_friday') + ': 9:00 AM - 6:00 PM CST',
        t('saturday') + ': 10:00 AM - 4:00 PM CST',
        t('sunday') + ': ' + t('closed')
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {t('contact_us')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('get_in_touch')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('contact_description')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <h2 className="text-3xl font-bold mb-6">{t('contact_info')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('contact_info_description')}
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={info.title} staggerIndex={index + 1}>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <ul className="space-y-1 text-muted-foreground">
                          {info.details.map((detail, i) => (
                            <li key={i}>
                              {typeof detail === 'string' ? (
                                detail
                              ) : (
                                <a 
                                  href={detail.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline flex items-center space-x-2"
                                >
                                  <span>{detail.text}</span>
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold mb-6">{t('send_message')}</h2>
                  <p className="text-muted-foreground mb-8">
                    {t('send_message_description')}
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
