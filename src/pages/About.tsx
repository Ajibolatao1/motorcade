
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, TrendingUp, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Satisfied Clients', value: '500+' },
    { label: 'Projects Completed', value: '1000+' },
    { label: 'Countries Served', value: '30+' }
  ];

  const values = [
    { 
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence', 
      description: 'We strive for excellence in every aspect of our business, from the quality of our machinery to our customer service.'
    },
    { 
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration', 
      description: 'We believe in working closely with our clients to understand their unique needs and provide tailored solutions.'
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Innovation', 
      description: 'We continuously seek new technologies and approaches to improve our products and services.'
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Story & Mission
              </h1>
            </AnimatedSection>
            <AnimatedSection staggerIndex={2}>
              <p className="text-xl text-muted-foreground">
                Learn about our journey to becoming a leading provider of premium truck machinery solutions.
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
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
              Qingdao Auto Motorcade Technology Company Limited is a dynamic and diversified company that
operates at the intersection of innovation, engineering excellence, and industrial growth. Comprising
four distinct manufacturing companies, our organization is a powerhouse in the production of
construction equipment, heavy machinery, and large automotive equipment. Each of our factories bring
unique expertise and capabilities, collectively positioning our company as a leader in the global
industrial and manufacturing sectors.
Our company specializes in designing and manufacturing state-of-the-art construction equipment, such
as excavators, bulldozers, cranes, and loaders. These machines are built to withstand the toughest
environments, enabling infrastructure development across the globe. Our equipment is known for its
durability, efficiency, and advanced technology, making it a preferred choice for construction firms and
contractors.
Our company focuses on heavy machinery used in industries like mining, agriculture, and logistics. This
includes equipment such as drilling rigs, harvesters, and material handling systems. Our machinery is
engineered to maximize productivity while minimizing environmental impact, aligning with global
sustainability goals.
Our company is a key player in the automotive sector, producing large-scale automotive equipment such
as commercial vehicles, industrial trucks, and specialized transport solutions. These vehicles are
designed for heavy-duty applications, ensuring reliability and performance in demanding conditions.
Our company also specializes in manufacturing critical components and systems that support the
broader industrial ecosystem. This includes engines, hydraulic systems, and automation technologies
that are integral to the functionality of construction and automotive equipment. We invest heavily in
research and development, driving innovation in automation, electrification, and smart technologies.
This ensures that our products remain at the cutting edge of the industry. With a robust supply chain
and a presence in multiple markets, our company serves clients across the globe, from emerging
economies to developed nations.
Our company is committed to reducing their carbon footprint by developing energy-efficient machinery
and adopting eco-friendly manufacturing practices. By offering tailored solutions and exceptional after-
sales support, we have built long-lasting relationships with clients.
Our company’s vision is to revolutionize the manufacturing industry by delivering high-quality,
innovative, and sustainable solutions that empower businesses and communities worldwide. The
mission is to drive industrial progress through cutting-edge technology, operational excellence, and a
commitment to environmental stewardship.
As the world moves toward smarter and greener technologies, Qingdao Auto Motorcade Technology
Company Limited is well-positioned to lead the charge in the next generation of manufacturing. By
embracing digital transformation, expanding into emerging markets, and fostering strategic
partnerships, we are poised for sustained growth and success in the years to come.
Qingdao Auto Motorcade Technology Company Limited is not just a manufacturer; it is a catalyst for
progress, shaping the future of construction, machinery, and automotive industries.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the decades, we've expanded our product range, embraced technological innovations, and built lasting relationships with clients across the world. Our commitment to quality and customer satisfaction has remained unchanged throughout our journey.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to push the boundaries of what's possible in truck machinery, always striving to deliver products that exceed expectations and help our clients achieve success in their projects.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Over the years, we've achieved significant milestones through our dedication to excellence.
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
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Vision</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To provide innovative, reliable, and efficient truck machinery solutions that empower our clients to excel in their industries.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To lead the industry in product quality, technical innovation, and customer satisfaction.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To maintain ethical business practices and sustainable operations throughout our global supply chain.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To be recognized as the trusted partner for construction and industrial machinery worldwide.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide our decisions and actions every day.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experts who drive our vision forward.
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
                  <h3 className="text-xl font-semibold mb-1">Chinedu Okolo</h3>
                  <p className="text-primary mb-3">Chief Executive Officer</p>
                  <p className="text-muted-foreground">
                    With over 25 years of industry experience, Chinedu leads our company with vision and expertise.
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
                  <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                  <p className="text-primary mb-3">Chief Technology Officer</p>
                  <p className="text-muted-foreground">
                    Sarah drives our technological innovations and ensures our products remain at the cutting edge.
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
                  <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                  <p className="text-primary mb-3">Chief Operations Officer</p>
                  <p className="text-muted-foreground">
                    Michael ensures smooth operations across our global manufacturing and distribution network.
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
