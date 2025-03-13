
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import NewsCard from '@/components/NewsCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Truck, Settings, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data for featured products
  const featuredProducts = [
    {
      id: '1',
      name: 'Underground mining truck',
      description: 'A powerful and compact truck designed for efficient hauling in underground mining operations.',
      image: '/Underground mining truck.jpeg',
      category: 'Underground machines'
    },
    {
      id: '2',
      name: 'Rubber Wheel Roller',
      description: 'Versatile and maneuverable loader perfect for tight spaces and urban construction sites.',
      image: '/2 tire roller.jpg',
      category: 'Roller'
    },
    {
      id: '3',
      name: 'Hydraulic Drum Roller',
      description: 'High-capacity lifting solution for major construction and infrastructure projects.',
      image: '/hydraulic drum-1.jpg',
      category: 'Roller'
    }
  ];

  // Sample data for latest news
  const latestNews = [
    {
      id: '1',
      title: 'Mini excavators - compact and efficient construction tools1. Small and flexible',
      excerpt: '1. Small and flexible',
      date: '2024-12-15',
      image: '/mini-excavators.jpeg',
      category: 'Product Launch'
    },
    {
      id: '2',
      title: 'MOTORCADE-TECHNOLOGY Backhoe loader with powerful functions and excellent performance!',
      excerpt: 'MOTORCADE-TECHNOLOGY Backhoe loader with powerful functions and excellent performance!',
      date: '2024-11-13',
      image: '/backhoe-loader.jpeg',
      category: 'Product Launch'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Premium Truck Machinery for Every Project"
        subtitle="Discover our extensive catalogue of high-performance construction and industrial vehicles."
        image="https://images.unsplash.com/photo-1597347063661-36b597ae5de3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        primaryButtonText="Explore Products"
        primaryButtonLink="/products"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Leading Truck Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide top-quality machinery backed by years of industry expertise and exceptional customer service.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={1}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                All our machines are built with the highest quality materials and strict quality control.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={2}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Maintenance</h3>
              <p className="text-muted-foreground">
                Our team of specialists provides ongoing maintenance and service support.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={3}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                Our machinery is designed for maximum efficiency and productivity on every job.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/50 rounded-xl p-6 text-center" staggerIndex={4}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                We pride ourselves on responsive and helpful customer service.
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
                Featured Products
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Our Premium Machinery</h2>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary mt-4 md:mt-0 group"
            >
              View all products 
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
              Ready to Upgrade Your Fleet?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your specific requirements and find the perfect machinery for your projects.
            </p>
            <Link 
              to="/contact"
              className="button-hover inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-4 text-lg font-medium shadow-lg"
            >
              Get in Touch
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
                Latest Updates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">News & Insights</h2>
            </div>
            <Link 
              to="/news" 
              className="inline-flex items-center text-primary mt-4 md:mt-0 group"
            >
              View all news 
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
