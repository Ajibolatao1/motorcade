import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Tag, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  // Define categories with translations
  const categories = [
    t('category.all'),
    t('category.product launch'),
    t('category.industry news'),
    t('category.company updates'),
    t('category.events'),
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  // Fetch news data from news.json
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/src/news.json');
        const data = await response.json();
        setAllNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Reset selected category when language changes
  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [t]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filter and sort news
  const filteredNews = allNews
    .filter((news) => {
      const isAllCategory = selectedCategory.toLowerCase() === categories[0].toLowerCase();
      const translatedCategory = t(`category.${news.category.toLowerCase()}`, { defaultValue: news.category });
      const isCategoryMatch = isAllCategory || translatedCategory.toLowerCase() === selectedCategory.toLowerCase();
      const isSearchMatch =
        t(news.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(news.excerpt).toLowerCase().includes(searchQuery.toLowerCase());

      // Debug logs
      console.log('Selected Category:', selectedCategory);
      console.log('News Category:', news.category);
      console.log('Translated Category:', translatedCategory);
      console.log('Is Category Match:', isCategoryMatch);

      return isCategoryMatch && isSearchMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          {/* Search & Filters */}
          <div className="mb-12 space-y-6">
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

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {/* Add "Category:" label with an icon */}
                <span className="flex items-center text-sm font-medium mr-2">
                  <Tag size={16} className="mr-1" /> {t('category.label')}:
                </span>

                {/* Render the category buttons */}
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

              {/* Add "Sort by" label with an icon */}
              <div className="flex items-center">
                <span className="flex items-center text-sm font-medium mr-2">
                  <ArrowUpDown size={16} className="mr-1" /> {t('sort_by')}:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="newest">{t('newest_first')}</option>
                  <option value="oldest">{t('oldest_first')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-muted-foreground">{t('loading')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentNews.length > 0 ? (
                currentNews.map((news) => (
                  <AnimatedSection key={news.id}>
                    <NewsCard {...news} />
                  </AnimatedSection>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-xl text-muted-foreground">{t('no_news_found')}</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination Controls */}
{totalPages > 1 && (
  <div className="flex justify-center mt-12 gap-2">
    {/* Previous Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`px-4 py-2 text-sm font-medium ${
        currentPage === 1
          ? 'bg-secondary text-muted-foreground cursor-not-allowed'
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      } rounded-md flex items-center gap-1`}
    >
      <ChevronLeft size={16} /> {t('previous')}
    </button>

    {/* Page Numbers */}
    <nav className="inline-flex rounded-md shadow-sm">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 text-sm font-medium ${
            currentPage === page
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
          } rounded-md mx-1`}
        >
          {page}
        </button>
      ))}
    </nav>

    {/* Next Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 text-sm font-medium ${
        currentPage === totalPages
          ? 'bg-secondary text-muted-foreground cursor-not-allowed'
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      } rounded-md flex items-center gap-1`}
    >
      {t('next')} <ChevronRight size={16} />
    </button>
  </div>
)}
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;