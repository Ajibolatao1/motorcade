import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next'; // Import translation hook
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowLeft, Truck, Tag, Calendar, Shield } from 'lucide-react';

// Sample products data
const productsData = [
  {
    id: '1',
    name: 'Underground mining truck',
    description: 'Powerful excavator designed for the toughest construction projects with enhanced digging capabilities.',
    fullDescription: 'The Underground Mining Truck is built for high-capacity hauling in confined mining tunnels. Its powerful engine, rugged frame, and advanced suspension system ensure efficient material transport in tough underground conditions. With excellent maneuverability, operator safety features, and a durable design, it maximizes productivity in deep mining operations.',
    image: '/Underground mining truck.jpeg',
    additionalImages: [
      '/Underground mining truck.jpeg',
      '/Underground mining truck.jpeg',
    ],
    category: 'Underground machines',
    features: [
      'High payload capacity for underground hauling',
      'Compact design for tight tunnel navigation',
      'Heavy-duty frame for extreme conditions',
      'Advanced suspension for stability',
      'Ergonomic operator cabin with safety systems',
      'Efficient cooling system for underground environments'
    ],
    specifications: {
      engine: 'Diesel, 300–500 HP',
      weight: ' 25,000–60,000 kg',
      payloadCapacity: '30–80 tons',
      height: '2.5–3.5 meters',
      dimensions: '9m × 3m × 3m'
    }
  },
  {
    id: '2',
    name: 'Rubber Wheel Roller',
    description: 'Versatile and maneuverable loader perfect for tight spaces and urban construction sites.',
    fullDescription: 'The Rubber Wheel Roller is designed for high-performance compaction across various terrains. It is ideal for road construction, asphalt paving, and soil compaction, providing excellent ground coverage and uniform pressure distribution. The pneumatic tires enhance grip and adaptability, making it suitable for both urban and heavy-duty infrastructure projects.',
    image: '/2 tire roller.jpg',
    additionalImages: [
      '/2 tire roller 2.jpg',
      '/2 tire roller 3.jpg',
    ],
    category: 'Roller',
    features: [
      'Pneumatic rubber tires',
      'Variable ballast system',
      'Hydrostatic drive',
      'Multi-speed transmission',
      'Operator-friendly controls',
      'Spacious & ergonomic cabin'
    ],
    specifications: {
      engine: 'Diesel, 100–150 HP',
      weight: '8,000 – 25,000 kg',
      compactionWidth: '1.5 – 2.5 meters',
      maxSpeed: '8 – 12 km/h',
      tireConfiguration: '4+5 or 3+4 layout',
      fuelCapacity: '100 – 200 liters'
    }
  },
  {
    id: '3',
    name: 'Hydraulic Drum Roller',
    description: 'High-capacity lifting solution for major construction and infrastructure projects.',
    fullDescription: 'The Hydraulic Drum Roller is a powerful and efficient compaction machine designed for road construction, foundation work, and large-scale infrastructure projects. With its hydraulic drive system, it delivers superior performance, enhanced maneuverability, and precise control, ensuring even and consistent soil and asphalt compaction. Built for durability and efficiency, this roller is an essential asset for contractors and construction professionals.',
    image: '/hydraulic drum-1.jpg',
    additionalImages: [
      '/hydraulic drum-2.jpg',
      '/hydraulic drum-3.jpg',
    ],
    category: 'Roller',
    features: [
      'Hydraulic Drive System',
      'High-Impact Vibration Mechanism',
      ' Variable Frequency Control',
      'Heavy-Duty Steel Drum',
      'Ergonomic Operator Cabin',
      'Advanced Safety Features '
    ],
    specifications: {
      engine: 'Diesel, 250 HP',
      weight: '10,000 kg',
      liftCapacity: '25 tons',
      boomLength: '2.2 meters',
      dimensions: '5.5m × 2.3m × 3m',
      vibrationFrequency: '50 Hz'
    }
  },
  {
    id: '4',
    name: 'Underground mining loader',
    description: 'A compact and powerful machine designed for efficient material handling in underground mining operations.',
    fullDescription: 'The Underground Mining Loader is a powerful and compact machine designed for efficient material handling in confined mining environments. Built for durability and high productivity, it features a low-profile design, advanced hydraulics, and excellent maneuverability. Its reinforced structure and safety systems ensure reliable performance in harsh underground conditions.',
    image: '/underground mining loader.jpg',
    additionalImages: [
      '/underground mining loader.jpg',
      '/underground mining loader.jpg',
    ],
    category: 'Underground machines',
    features: [
      'Compact, low-profile design',
      'High-capacity bucket for efficient loading',
      'Powerful hydraulics for smooth operation',
      'Heavy-duty frame for durability',
      'Advanced ventilation and cooling system',
      'Ergonomic operator cabin for comfort'
    ],
    specifications: {
      engine: 'Diesel/Electric, 150–400 HP',
      weight: '10,000–50,000 kg',
      bucketCapacity: '2–10 m³',
      height: '2.0–3.5 meters',
      dimensions: '8m × 2.5m × 2.8m (varies by model)'
    }
  },
  {
    id: '5',
    name: 'Excavator',
    description: 'Versatile mid-sized excavator suitable for a wide range of digging and trenching applications.',
    fullDescription: 'The Excavator offers an excellent balance of power, mobility, and versatility for a wide range of construction applications. Its optimized hydraulic system delivers precise control and efficient operation, while the comfortable cabin reduces operator fatigue during extended work periods. With multiple attachment options and a compact turning radius, this excavator excels in urban construction sites and medium-scale earthmoving projects.',
    image: '/excavator-1.jpeg',
    additionalImages: [
      '/excavator-2.jpeg',
      '/excavator-3.jpeg',
    ],
    category: 'Excavator',
    features: [
      'Optimized hydraulic system',
      'Multiple attachment options',
      'Compact turning radius',
      'Fuel-efficient operation',
      'Enhanced operator comfort',
      'Low maintenance requirements'
    ],
    specifications: {
      engine: 'Diesel, 160 HP',
      weight: '18,500 kg',
      digDepth: '5.8 meters',
      bucketCapacity: '1.2 cubic meters',
      dimensions: '8.2m × 2.8m × 3.2m'
    }
  },
  {
    id: '6',
    name: 'Underground utility vehicle',
    description: 'The Underground Utility Vehicle ensures efficient transport of personnel and materials in mining operations.',
    fullDescription: 'The Underground Utility Vehicle is an essential support machine for mining operations, designed to transport personnel, tools, and materials efficiently in underground environments. Built for durability and reliability, it features a rugged chassis, high ground clearance, and a compact design to navigate narrow tunnels and rough terrains. With its powerful engine and all-wheel drive, it ensures optimal performance even in challenging underground conditions. The vehicle is equipped with advanced safety features, including reinforced cabins, fire suppression systems, and emergency braking, ensuring operator safety in hazardous environments. Its modular design allows for multiple configurations, making it adaptable for various mining applications such as maintenance, logistics, and material handling.',
    image: '/underground Utility vehicle.jpg',
    additionalImages: [
      '/underground Utility vehicle.jpg',
      '/underground Utility vehicle.jpg',
    ],
    category: 'Underground machines',
    features: [
      ' Compact and durable design for underground use',
      'High ground clearance for rough terrain',
      'All-wheel drive for enhanced traction',
      ' Reinforced cabin with safety features',
      'Configurable for multiple applications',
      ' Easy maintenance access'
    ],
    specifications: {
      engine: 'Diesel, 150–300 HP',
      weight: '8,000–15,000 kg',
      payloadCapacity: '5–15 tons',
      dimensions: '5m–8m × 2m–3m × 2.5m–3m'
    }
  },
  {
    id: '7',
    name: 'Tracked Bulldozer',
    description: 'Powerful earth-moving machine for large construction and mining projects.',
    fullDescription: 'The Tracked Bulldozer delivers exceptional pushing power and traction for challenging earthmoving operations. Its heavy-duty tracks provide stability and low ground pressure across various soil conditions, while the hydraulically-controlled blade offers precise material handling. The pressurized cabin features advanced noise reduction and climate control, creating a comfortable environment for extended operation. With its robust construction and reliable performance, this bulldozer is ideal for land clearing, grading, and material spreading applications.',
    image: '/bulldozer-1.png',
    additionalImages: [
      '/bulldozer-2.png',
      '/bulldozer-3.png',
    ],
    category: 'Bulldozer',
    features: [
      'Heavy-duty track system',
      'Hydraulic blade control',
      'Pressurized operator cabin',
      'Advanced noise reduction',
      'Powerful pushing capacity',
      'Low ground pressure design'
    ],
    specifications: {
      engine: 'Diesel, 360 HP',
      weight: '40,000 kg',
      bladeWidth: '4.2 meters',
      bladeCapacity: '8.5 cubic meters',
      dimensions: '7.4m × 4.2m × 3.5m'
    }
  },
  {
    id: '8',
    name: 'Wheeled Loader',
    description: 'Efficient material handling equipment for loading, transporting, and unloading operations.',
    fullDescription: 'The Wheeled Loader combines versatility, mobility, and power for efficient material handling in construction and industrial settings. Its articulated steering and four-wheel drive system enable excellent maneuverability in confined spaces, while the quick-attach system allows for rapid switching between various attachments. The panoramic cabin provides outstanding visibility in all directions, enhancing operational safety and productivity. With its balanced power-to-weight ratio and fuel-efficient engine, this loader delivers optimal performance with reduced operating costs.',
    image: '/wheeled-1.png',
    additionalImages: [
      '/wheeled-2.png',
      '/wheeled-3.png',
    ],
    category: 'Loader',
    features: [
      'Articulated steering system',
      'Quick-attach bucket system',
      'Panoramic operator cabin',
      'Four-wheel drive',
      'Ride control technology',
      'Multiple work modes'
    ],
    specifications: {
      engine: 'Diesel, 210 HP',
      weight: '17,800 kg',
      bucketCapacity: '3.6 cubic meters',
      liftHeight: '4.2 meters',
      dimensions: '7.8m × 2.9m × 3.4m'
    }
  },
  {
    id: '9',
    name: 'Double Drum Rollers',
    description: 'Double drum rollers solution for urban construction projects with limited space.',
    fullDescription: 'The Double Drum Roller is a powerful and efficient compaction machine designed for road construction, asphalt paving, and soil stabilization. Featuring two heavy-duty steel drums, this roller delivers uniform compression, ensuring a smooth and durable surface. Its hydrostatic drive system provides excellent maneuverability, while the vibration control technology enhances compaction efficiency. The ergonomic operator station offers superior visibility and comfort, allowing for precise control in various job site conditions. With its fuel-efficient engine and easy maintenance access, the Double Drum Roller is an essential machine for high-performance compaction tasks.',
    image: '/double drum rollers.jpg',
    additionalImages: [
      '/double drum rollers-2.jpg',
      '/double drum rollers-3.jpg',
    ],
    category: 'Roller',
    features: [
      'Dual steel drum design',
      'Hydrostatic drive system',
      'Vibration control technology',
      'Adjustable water spray system',
      'Ergonomic operator station',
      'Easy maintenance access'
    ],
    specifications: {
      engine: 'Diesel, 100 to 150 HP',
      weight: '8,000 to 25,000 kg',
      compactionWidth: '1.5 to 2.5 meters',
      maxSpeed: '8 to 12 km/h',
      vibrationFrequency: '50 to 70 Hz',
      fuelCapacity: '100 to 200 liters'
    }
  }
];

const ProductDetail = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    // In a real app, this would be an API call
    console.log("Looking for product with ID:", id);
    console.log("Available products:", productsData.map(p => p.id));
    
    const findProduct = productsData.find(item => item.id === id);
    
    if (findProduct) {
      console.log("Product found:", findProduct.name);
      setProduct(findProduct);
      setSelectedImage(findProduct.image);
    } else {
      console.log("Product not found");
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">{t('loading')}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center flex-col p-6">
          <h1 className="text-3xl font-bold mb-4">{t('productNotFound')}</h1>
          <p className="text-muted-foreground mb-6">{t('productNotFoundDescription')}</p>
          <Link 
            to="/products"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t('backToProducts')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">{t('home')}</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-foreground transition-colors">{t('products')}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{t(product.name)}</span>
          </div>
          
          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <AnimatedSection>
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary/30">
                  <img 
                    src={selectedImage} 
                    alt={t(product.name)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-4 overflow-auto pb-2">
                  <button
                    onClick={() => setSelectedImage(product.image)}
                    className={`relative rounded-lg overflow-hidden aspect-[4/3] w-24 flex-shrink-0 ${selectedImage === product.image ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <img 
                      src={product.image} 
                      alt={`${t(product.name)} - Main`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  
                  {product.additionalImages && product.additionalImages.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`relative rounded-lg overflow-hidden aspect-[4/3] w-24 flex-shrink-0 ${selectedImage === img ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${t(product.name)} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Product Info */}
            <AnimatedSection>
              <div className="space-y-6">
                {/* Category Tag */}
                <div className="inline-block">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {t(product.category)}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold">{t(product.name)}</h1>
                
                <p className="text-lg text-muted-foreground">
                  {t(product.fullDescription || product.description)}
                </p>
                
                {/* Features */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" /> {t('keyFeatures')}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features && product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Specifications */}
                {product.specifications && (
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Truck className="h-5 w-5 mr-2 text-primary" /> {t('technicalSpecifications')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]: [string, any], index: number) => (
                        <div key={index} className="bg-secondary/30 p-3 rounded-lg">
                          <span className="text-sm font-medium block capitalize">{t(key)}</span>
                          <span className="text-muted-foreground">{t(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Call to Action */}
                <div className="border-t pt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t('requestQuote')}
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-secondary text-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
                  >
                    {t('askQuestion')}
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Related Products Section */}
          <div className="border-t pt-12">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">{t('relatedProducts')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {productsData
                  .filter(item => item.id !== id && item.category === product.category)
                  .slice(0, 3)
                  .map((relatedProduct) => (
                    <Link 
                      key={relatedProduct.id} 
                      to={`/products/${relatedProduct.id}`}
                      className="group block bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img 
                          src={relatedProduct.image} 
                          alt={t(relatedProduct.name)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                            {t(relatedProduct.category)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{t(relatedProduct.name)}</h3>
                        <p className="text-muted-foreground line-clamp-2">{t(relatedProduct.description)}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;