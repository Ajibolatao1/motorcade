import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation(); // Initialize translation hook

  // Define categories with translations
  const categories = [
    t('category.all'),
    t('category.excavator'),
    t('category.loader'),
    t('category.roller'),
    t('category.truck'),
    t('category.bulldozer'),
    t('category.underground_machines')
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure selectedCategory is set based on current translation
  useEffect(() => {
    setSelectedCategory(t('category.all')); // Set translated "All" as default
  }, [t]);

  // Product data with translated names and descriptions
  const allProducts = [
    { id: '1', name: t('products.1.name'), description: t('products.1.description'), image: '/Underground mining truck.jpeg', category: t('category.underground_machines'), date: '2023-06-15' },
    { id: '2', name: t('products.2.name'), description: t('products.2.description'), image: '/2 tire roller.jpg', category: t('category.roller'), date: '2023-04-22' },
    { id: '3', name: t('products.3.name'), description: t('products.3.description'), image: '/hydraulic drum-1.jpg', category: t('category.roller'), date: '2023-05-10' },
    { id: '4', name: t('products.4.name'), description: t('products.4.description'), image: '/underground mining loader.jpg', category: t('category.underground_machines'), date: '2023-07-05' },
    { id: '5', name: t('products.5.name'), description: t('products.5.description'), image: '/excavator-1.jpeg', category: t('category.excavator'), date: '2023-03-18' },
    { id: '6', name: t('products.6.name'), description: t('products.6.description'), image: '/underground Utility vehicle.jpg', category: t('category.underground_machines'), date: '2023-08-12' },
    { id: '7', name: t('products.7.name'), description: t('products.7.description'), image: '/bulldozer-1.png', category: t('category.bulldozer'), date: '2023-09-28' },
    { id: '8', name: t('products.8.name'), description: t('products.8.description'), image: '/wheeled-1.png', category: t('category.loader'), date: '2023-02-05' },
    { id: '9', name: t('products.9.name'), description: t('products.9.description'), image: '/double drum rollers.jpg', category: t('category.roller'), date: '2023-10-15' }
  ];

  // Fix Next.js hydration issue
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update filtered products when category, search, or sorting changes
  useEffect(() => {
    const translatedAll = t('category.all'); // Get translated "All"
    const isAllCategory = selectedCategory === translatedAll;

    const updatedProducts = allProducts
      .filter(product =>
        (isAllCategory || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
      
        if (sortBy === 'newest') return dateB - dateA;
        if (sortBy === 'oldest') return dateA - dateB;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
      

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchQuery, sortBy, t]);

  if (!isClient) return null; // Prevent rendering until client is ready

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                {t('our_catalogue')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('premium_truck_machinery')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('explore_range')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
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
                  <Filter size={16} className="mr-1" /> {t('filter')}:
                </span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center">
                <span className="flex items-center text-sm font-medium mr-2">
                  <ArrowUpDown size={16} className="mr-1" /> {t('sort')}:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="newest">{t('newest_first')}</option>
                  <option value="oldest">{t('oldest_first')}</option>
                  <option value="name-asc">{t('name_asc')}</option>
                  <option value="name-desc">{t('name_desc')}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <AnimatedSection key={product.id}>
                  <ProductCard {...product} />
                </AnimatedSection>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-xl text-muted-foreground">{t('no_products_found')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
