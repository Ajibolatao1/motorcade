import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Tag, ArrowUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  // Categories with translation
  const categories = [
    t('category.all'),
    t('category.product launch'),
    t('category.industry news'),
    t('category.company updates'),
    t('category.events'),
  ];

  // Set default category to translated "All"
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [forceUpdate, setForceUpdate] = useState(0);

  // Sample news data
  const allNews = [
    {
      id: '1',
      title: t('news_1_title'),
      excerpt: t('news_1_excerpt'),
      date: t('December 14, 2024'),
      image: '/mini-excavators.jpeg',
      category: t('category.product launch'),
    },
    {
      id: '2',
      title: t('news_2_title'),
      excerpt: t('news_2_excerpt'),
      date: t('November 12, 2024'),
      image: '/backhoe-loader.jpeg',
      category: t('category.product launch'),
    },
    {
      id: '3',
      title: t('news_3_title'),
      excerpt: t('news_3_excerpt'),
      date: t('October 9, 2024'),
      image: '/4-wheel-drive-forklift.jpeg',
      category: t('category.product launch'),
    },
    {
      id: '4',
      title: t('news_4_title'),
      excerpt: t('news_4_excerpt'),
      date: t('January 4, 2025'),
      image: '/edu-friend.jpg',
      category: t('category.events'),
    },
    {
      id: '5',
      title: t('news_5_title'),
      excerpt: t('news_5_excerpt'),
      date: t('August 17, 2024'),
      image: '/concrete-Cement-Mixer-Truck.jpeg',
      category: t('category.product launch'),
    },
    {
      id: '6',
      title: t('news_6_title'),
      excerpt: t('news_6_excerpt'),
      date: t('February 12, 2025'),
      image: '/concrete-mixer.jpg',
      category: t('category.industry news'),
    },
  ];

  // Update selectedCategory when language changes
  useEffect(() => {
    setSelectedCategory(categories[0]); // Set to translated "All"
  }, [t]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setForceUpdate(prev => prev + 1);
  };

  // Filter and sort news
  const filteredNews = allNews
    .filter(news =>
      (selectedCategory === categories[0] || news.category === selectedCategory) &&
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
                {t('latest_updates')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('news_insight')}
              </h1>
              <p className="text-xl text-muted-foreground">{t('stay_informed')}</p>
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
                placeholder={t('search_news')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm font-medium mr-2">
                  <Tag size={16} className="mr-1" /> {t('category.label')}:
                </span>
                {categories.map(category => (
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
                  <ArrowUpDown size={16} className="mr-1" /> {t('sort_by')}:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="newest">{t('newest_first')}</option>
                  <option value="oldest">{t('oldest_first')}</option>
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
                <p className="text-xl text-muted-foreground">{t('no_news_found')}</p>
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
