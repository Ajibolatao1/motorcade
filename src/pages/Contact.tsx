import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: [
        'Unit 1207,',
        'Building 1,',
        'N0. 288, Zhuhai East Road,',
        'Jiaonan City, Qingdao'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: [
        { text: '+8617864268032', link: 'tel:+8617864268032' },
        { text: '+8617852160455', link: 'tel:+8617852160455' }
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />, // WhatsApp icon in green
      title: 'WhatsApp',
      details: [
        { text: '+8617864268032 (Chat Now)', link: 'https://wa.me/8617864268032' },
        { text: '+8617852160455 (Chat Now)', link: 'https://wa.me/8617852160455' }
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: [
        { text: '13061287760@163.com', link: 'mailto:13061287760@163.com' }
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Operating Hours (China Time - CST)',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM CST',
        'Saturday: 10:00 AM - 4:00 PM CST',
        'Sunday: Closed'
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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions or ready to discuss your machinery needs? We're here to help.
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
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to us through any of the following channels. Our team is ready to assist you with any inquiries.
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
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Complete the form below and we'll get back to you as soon as possible.
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
