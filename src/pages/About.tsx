
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, TrendingUp, Award, Users } from 'lucide-react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); // Translation Hook
  const stats = [
    { label: t('about.stats.experience'), value: '25+' },
    { label: t('about.stats.clients'), value: '500+' },
    { label: t('about.stats.projects'), value: '1000+' },
    { label: t('about.stats.countries'), value: '30+' }
  ];
  const values = [
    { 
      icon: <Award className="h-6 w-6" />,
      title: t('core.value.1'), 
      description:  t('core.value.1.description')
    },
    { 
      icon: <Users className="h-6 w-6" />,
      title: t('core.value.2'), 
      description: t('core.value.2.description')
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('core.value.3'), 
      description: t('core.value.3.description')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection staggerIndex={1}>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              {t("about_us")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("story_mission")}
              </h1>
            </AnimatedSection>
            <AnimatedSection staggerIndex={2}>
              <p className="text-xl text-muted-foreground">
              {t("learn_about_us")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/ceo.jpg" 
                  alt="Company founder" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{t("our_story")}</h2>
              <p className="text-lg text-muted-foreground">
              {t("story_information")}
              </p>
              <p className="text-lg text-muted-foreground">
              {t("cont_abouta_us")}
              </p>
              <p className="text-lg text-muted-foreground">
              {t("cont_abouta_us_par")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> {t("our_impact_in_numbers")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("our_impact_in_numbers_1")}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection 
                key={stat.label} 
                staggerIndex={index + 1}
                className="bg-background rounded-xl p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{t("our_mission")}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                  {t("mission_1")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                  {t("mission_2")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                  {t("mission_3")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                  {t("mission_4")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Modern construction machinery" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("our_core_values")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("our_core_description")}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection 
                key={value.title} 
                staggerIndex={index + 1}
                className="bg-background rounded-xl p-8 shadow-sm"
              >
                <div className="p-3 bg-primary/10 rounded-full inline-flex mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("our_leadership_team")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("our_leadership_team_description")}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection staggerIndex={1}>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="/ceo.jpg" 
                    alt="CEO" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{t("ceo_name")}</h3>
                  <p className="text-primary mb-3">{t("chief_executive_officer")}</p>
                  <p className="text-muted-foreground">
                  {t("chief_executive_officer_experience")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection staggerIndex={2}>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="CTO" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{t("cto_name")}</h3>
                  <p className="text-primary mb-3">{t("chief_technology_officer")}</p>
                  <p className="text-muted-foreground">
                  {t("chief_technology_officer.experience")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection staggerIndex={3}>
              <div className="bg-background rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="COO" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{t("cpo_name")}</h3>
                  <p className="text-primary mb-3">{t("chief_operations_officer")}</p>
                  <p className="text-muted-foreground">
                  {t("chief_operations_officer_experience")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
