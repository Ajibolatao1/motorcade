
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Tag, ArrowUpDown } from 'lucide-react';

const News = () => {
  const categories = ['All', 'Product Launch', 'Industry News', 'Company Updates', 'Events'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Sample news data
  const allNews = [
    {
      id: '1',
      title: 'New Fleet of Eco-Friendly Construction Trucks Launched',
      excerpt: 'Our company introduces a revolutionary line of eco-friendly construction trucks designed to reduce emissions while maintaining performance.',
      date: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1626327113655-733c19d09c2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Product Launch'
    },
    {
      id: '2',
      title: 'Industry Insights: The Future of Construction Machinery',
      excerpt: 'Expert analysis on upcoming trends and technological advancements in the construction machinery sector over the next decade.',
      date: '2023-05-22',
      image: 'https://images.unsplash.com/photo-1618761232055-3cd99ba58921?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Industry News'
    },
    {
      id: '3',
      title: 'TruckCatalogue Expansion into Asian Markets',
      excerpt: 'We\'re excited to announce our expansion into key Asian markets with new distribution centers in Singapore and Seoul.',
      date: '2023-04-10',
      image: 'https://images.unsplash.com/photo-1589293697715-f50f93553d30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Company Updates'
    },
    {
      id: '4',
      title: 'Annual Construction Machinery Expo 2023 Highlights',
      excerpt: 'Recap of the exciting innovations and networking opportunities from this year\'s leading industry exhibition.',
      date: '2023-07-05',
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Events'
    },
    {
      id: '5',
      title: 'Introducing Our Advanced Hydraulic System Technology',
      excerpt: 'Our engineers have developed a breakthrough hydraulic system that significantly improves efficiency and reduces maintenance costs.',
      date: '2023-03-18',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Product Launch'
    },
    {
      id: '6',
      title: 'Sustainability in Construction: Reducing Carbon Footprint',
      excerpt: 'How the construction machinery industry is adapting to environmental challenges and implementing sustainable practices.',
      date: '2023-08-12',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      category: 'Industry News'
    }
  ];

  // Filter and sort news
  const filteredNews = allNews
    .filter(news => 
      (selectedCategory === 'All' || news.category === selectedCategory) &&
      (news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Latest Updates
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                News & Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed about our company updates, industry trends, and product launches.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm font-medium mr-2">
                  <Tag size={16} className="mr-1" /> Category:
                </span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center">
                <span className="flex items-center text-sm font-medium mr-2">
                  <ArrowUpDown size={16} className="mr-1" /> Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <AnimatedSection key={news.id} staggerIndex={Math.min(index % 3 + 1, 5)}>
                  <NewsCard {...news} />
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-xl text-muted-foreground">
                  No news found matching your criteria. Please try a different search or filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive the latest news, product updates, and industry insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="button"
                  className="button-hover bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;