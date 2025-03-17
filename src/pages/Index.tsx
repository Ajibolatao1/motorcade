
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useTranslation } from 'react-i18next'; // Import translation hook
import NewsCard from '@/components/NewsCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Truck, Settings, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useTranslation();

  // Sample data for featured products
  const featuredProducts = [
    {
      id: '1',
      name: t('products.1.name'),
      description: t('products.1.description'),
      image: '/Underground mining truck.jpeg',
      category: t('category.underground_machines')
    },
    {
      id: '2',
      name: t('products.2.name'),
      description: t('products.2.description'),
      image: '/2 tire roller.jpg',
      category: t('category.roller')
    },
    {
      id: '3',
      name: t('products.3.name'),
      description: t('products.3.description'),
      image: '/hydraulic drum-1.jpg',
      category: t('category.roller')
    }
  ];

  // Sample data for latest news
  const latestNews = [
    {
      id: '1',
      title: t('news_1_title'),
      excerpt: t('news_1_excerpt'),
      date: t('category.date_1'),
      image: '/mini-excavators.jpeg',
      category: t('category.product launch'),
    },
    {
      id: '2',
      title: t('news_2_title'),
      excerpt: t('news_2_excerpt'),
      date: t('category.date_2'),
      image: '/backhoe-loader.jpeg',
      category: t('category.product launch'),
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title= {t('premium_truck_machinery_for_every_project')}
        subtitle={t('discover_our_extensive_catalogue')}
        image="https://images.unsplash.com/photo-1597347063661-36b597ae5de3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        primaryButtonText={t('explore_products')}
        primaryButtonLink="/products"
        secondaryButtonText={t('contact_us')}
        secondaryButtonLink="/contact"
      />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            {t('why_choose_us')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('industry_Leading_Truck_Solutions')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('we_provide')}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={1}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('premium_quality')}</h3>
              <p className="text-muted-foreground">
              {t('all_our_machines')}
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={2}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('expert_maintenance')}</h3>
              <p className="text-muted-foreground">
              {t('our_team_of_specialists')}
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={3}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('performance')}</h3>
              <p className="text-muted-foreground">
              {t('our_machine_is_designed')}
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={4}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('customer_support')}</h3>
              <p className="text-muted-foreground">
              {t('we_pride_ourselves')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              {t('featured_products')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">{t('our_premium_machinery')}</h2>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary mt-4 md:mt-0 group"
            >
              {t('view_all_products')} 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} staggerIndex={index + 1}>
                <ProductCard {...product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/construction-machinery.jpg" 
            alt="Construction machinery in action" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('ready_to_upgrade_your_fleet')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('contact_our_team')}
            </p>
            <Link 
              to="/contact"
              className="button-hover inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-4 text-lg font-medium shadow-lg"
            >
              {t('get_in_touch')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              {t('latest_updates')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">{t('news_insight')}</h2>
            </div>
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary mt-4 md:mt-0 group"
            >
              {t('view_all_news')} 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <AnimatedSection key={news.id} staggerIndex={index + 1}>
                <NewsCard {...news} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
