import { useState, useEffect } from 'react';
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
  const [forceUpdate, setForceUpdate] = useState(0);

  // Sample news data
  const allNews = [
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
    },
    {
      id: '3',
      title: '4 wheel drive front articulated off-road forklift',
      excerpt: 'The front-articulated 4×4 off-road forklift is a powerful tool designed for complex terrain and',
      date: '2024-10-10',
      image: '/4-wheel-drive-forklift.jpeg',
      category: 'Product Launch'
    },
    {
      id: '4',
      title: '🌟 2025, let the dream further! 🌟',
      excerpt: 'The gears of time are quietly turning, and we have ushered in 2025. Thank you for your company and support. It is your trust and encouragement that keeps us moving forward.',
      date: '2025-01-05',
      image: '/edu-friend.jpg',
      category: 'Events'
    },
    {
      id: '5',
      title: '"Self-loading flat mouth mixer truck"---small and flexible concrete mixer truck',
      excerpt: 'This type of mixer truck is easier to operate in narrow construction sites. They are also suitable',
      date: '2024-08-18',
      image: '/concrete-Cement-Mixer-Truck.jpeg',
      category: 'Product Launch'
    },
    {
      id: '6',
      title: 'MOTORCADE TECHNOLOGY—Leads the new era of intelligent building materials',
      excerpt: 'Recently, mixing trucks have been exported to Southeast Asia, South America, the Middle East and Africa and other countries, widely used in road construction, residential development, bridge engineering and other fields. We firmly believe that quality products and perfect services will create greater value for global customers.',
      date: '2025-02-13',
      image: '/concrete-mixer.jpg',
      category: 'Industry News'
    }
  ];

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(() => category);
    setForceUpdate((prev) => prev + 1); // Force re-render
  };

  
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
                    onClick={() => handleCategoryChange(category)}
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
                <AnimatedSection key={`${news.id}-${forceUpdate}`} staggerIndex={Math.min(index % 3 + 1, 5)}>
                  <NewsCard {...news} />
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-xl text-muted-foreground">No news found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
