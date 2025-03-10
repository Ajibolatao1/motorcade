import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const Products = () => {
  const categories = ['All', 'Excavator', 'Loader', 'Roller', 'Truck', 'Bulldozer', 'Underground machines'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isClient, setIsClient] = useState(false); // Fixes Next.js hydration issue

  const allProducts = [
    { id: '1', name: 'Underground mining truck', description: 'A powerful and compact truck designed for efficient hauling in underground mining operations.', image: 'Underground mining truck.jpeg', category: 'Underground machines', date: '2023-06-15' },
    { id: '2', name: 'Rubber Wheel Roller', description: 'Versatile and maneuverable loader perfect for tight spaces and urban construction sites.', image: '/2 tire roller.jpg', category: 'Roller', date: '2023-04-22' },
    { id: '3', name: 'Hydraulic Drum Roller', description: 'High-capacity lifting solution for major construction and infrastructure projects.', image: '/hydraulic drum-1.jpg', category: 'Roller', date: '2023-05-10' },
    { id: '4', name: 'Underground mining loader', description: 'A compact and powerful machine designed for efficient material handling in underground mining operations.', image: '/underground mining loader.jpg', category: 'Underground machines', date: '2023-07-05' },
    { id: '5', name: 'Excavator', description: 'Versatile mid-sized excavator suitable for a wide range of digging and trenching applications.', image: '/excavator-1.jpeg', category: 'Excavator', date: '2023-03-18' },
    { id: '6', name: 'Underground utility vehicle', description: 'The Underground Utility Vehicle ensures efficient transport of personnel and materials in mining operations.', image: '/underground Utility vehicle.jpg', category: 'Underground machines', date: '2023-08-12' },
    { id: '7', name: 'Tracked Bulldozer', description: 'Powerful earth-moving machine for large construction and mining projects.', image: '/bulldozer-1.png', category: 'Bulldozer', date: '2023-09-28' },
    { id: '8', name: 'Wheeled Loader', description: 'Efficient material handling equipment for loading, transporting, and unloading operations.', image: '/wheeled-1.png', category: 'Loader', date: '2023-02-05' },
    { id: '9', name: 'Double Drum Rollers', description: 'The Double Drum Roller ensures efficient compaction for roads and paving.', image: '/double drum rollers.jpg', category: 'Roller', date: '2023-10-15' }
  ];

  // Fix Next.js hydration issue
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update filtered products when category, search, or sorting changes
  useEffect(() => {
    const updatedProducts = allProducts
      .filter(product =>
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });

    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchQuery, sortBy]);

  if (!isClient) return null; // Prevent rendering until client is ready

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-7xl py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                Our Catalogue
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Truck Machinery
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our extensive range of high-quality construction and industrial vehicles.
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
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm font-medium mr-2">
                  <Filter size={16} className="mr-1" /> Filter:
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
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
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
                <p className="text-xl text-muted-foreground">
                  No products found matching your criteria.
                </p>
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
