import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Tag, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();

  const categories = [
    { key: 'category.all', label: t('category.all') },
    { key: 'category.excavator', label: t('category.excavator') },
    { key: 'category.loader', label: t('category.loader') },
    { key: 'category.roller', label: t('category.roller') },
    { key: 'category.truck', label: t('category.truck') },
    { key: 'category.bulldozer', label: t('category.bulldozer') },
    { key: 'category.underground_machines', label: t('category.underground_machines') },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;

  // Scroll to top function
  const scrollToTop = () => {
    console.log("Scrolling to top"); // Debug log
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (loading || !selectedCategory) return;

    const isAllCategory = selectedCategory.key === 'category.all';

    const updatedProducts = products
      .filter((product) => {
        const isCategoryMatch = isAllCategory || product.category === selectedCategory.key;
        const isSearchMatch =
          t(product.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
          t(product.description).toLowerCase().includes(searchQuery.toLowerCase());
        return isCategoryMatch && isSearchMatch;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else if (sortBy === 'oldest') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        } else if (sortBy === 'name-asc') {
          return t(a.name).localeCompare(t(b.name));
        } else if (sortBy === 'name-desc') {
          return t(b.name).localeCompare(t(a.name));
        }
        return 0;
      });

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // Reset to page 1 after filtering
  }, [products, selectedCategory, searchQuery, sortBy, t, loading]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16">
          <h1 className="text-4xl font-bold">{t('premium_truck_machinery')}</h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder={t('search_products')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm font-medium mr-2">
                  <Tag size={16} className="mr-1" /> {t('category.label')}:
                </span>
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                      selectedCategory.key === category.key
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
                    }`}
                  >
                    {category.label}
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
                  <option value="name-asc">{t('a_to_z')}</option>
                  <option value="name-desc">{t('z_to_a')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-muted-foreground">{t('loading')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <AnimatedSection key={product.id}>
                    <ProductCard
                      {...product}
                      onViewDetailsClick={scrollToTop} // Pass the scroll-to-top function
                    />
                  </AnimatedSection>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-xl text-muted-foreground">{t('no_products_found')}</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              {/* Previous Button */}
              <button
                onClick={handlePreviousPage}
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
                onClick={handleNextPage}
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

export default Products;