import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import translation hook

// Define the type for the content array
type ContentItem = {
  type: 'h3' | 'p'; // Only allow 'h3' or 'p' as valid types
  text: string; // The text to be translated
};

// Sample news data - using the same data that's in News.tsx
const allNews: Array<{
  id: string;
  title: string;
  excerpt: string;
  content: ContentItem[]; // Use the ContentItem type here
  date: string;
  image: string;
  category: string;
}> = [
  {
    id: '1',
    title: 'Mini excavators - compact and efficient construction tools',
    excerpt: '1. Small and flexible',
    content: [
      { type: 'h3', text: '1. Small and flexible' },
      { type: 'p', text: 'Small size: suitable for small Spaces and complex environments, such as urban streets, indoor' },
      { type: 'p', text: 'construction and landscaping.' },
      { type: 'p', text: 'Easy operation: small turning radius, flexible movement, suitable for fine construction tasks.' },
      { type: 'h3', text: '2. Versatility' },
      { type: 'p', text: 'Equipped with a variety of accessories: such as crushing hammer, clamp, drilling machine,' },
      { type: 'p', text: 'dozer shovel, etc., to meet the digging, crushing, cleaning, drilling and other construction needs.' },
      { type: 'p', text: 'Multi-purpose: It can replace a variety of equipment to complete a variety of work and improve the use value.' },
      { type: 'h3', text: '3. Work efficiently' },
      { type: 'p', text: 'Sufficient power: Despite its small size, the engine and hydraulic system are powerful and can complete excavation tasks quickly and efficiently.' },
      { type: 'p', text: 'Precise operation: The precise control of the hydraulic system makes it excellent in fine operation.' }
    ],
    date: '2024-12-15',
    image: '/mini-excavators.jpeg',
    category: 'Product Launch'
  },
  {
    id: '2',
    title: 'MOTORCADE-TECHNOLOGY Backhoe loader with powerful functions and excellent performance!',
    excerpt: 'MOTORCADE-TECHNOLOGY Backhoe loader with powerful functions and excellent performance!',
    content: [
      { type: 'p', text: 'MOTORCADE-TECHNOLOGY Backhoe loader with powerful functions and excellent performance!' },
      { type: 'p', text: 'Has the following product features and advantages:' },
      { type: 'p', text: 'Versatility: It can be used for both excavation and loading operations. One machine can be used for multiple purposes, saving costs.' },
      { type: 'p', text: 'High efficiency and energy saving: Using advanced power system and hydraulic system, it has low power consumption, high efficiency, energy saving and environmental protection.' },
      { type: 'p', text: 'Strong stability: Equipped with a stable chassis and high-quality suspension system, the operation is smooth, safe and reliable.' },
      { type: 'p', text: 'Durable and wear-resistant: Using high-quality materials and precision manufacturing' },
      { type: 'p', text: 'technology, it is wear-resistant and durable, and will not be easily damaged after long-term use.' },
      { type: 'p', text: 'Backhoe loaders help you easily cope with various construction tasks and are an indispensable' },
      { type: 'p', text: 'tool for your construction projects!' }
    ],
    date: '2024-11-13',
    image: '/backhoe-loader.jpeg',
    category: 'Product Launch'
  },
  {
    id: '3',
    title: '4 wheel drive front articulated off-road forklift',
    excerpt: 'The front-articulated 4×4 off-road forklift is a powerful tool designed for complex terrain and',
    content: [
      { type: 'p', text: 'The front-articulated 4×4 off-road forklift is a powerful tool designed for complex terrain and' },
      { type: 'p', text: 'harsh environments. Its unique front hinge design enables the vehicle to have better handling' },
      { type: 'p', text: 'and passing performance, and can easily cope with various complex terrains and obstacles.' },
      { type: 'p', text: 'This off-road forklift is equipped with a powerful power system and stable chassis structure,' },
      { type: 'p', text: 'which can drive stably on steep hillsides, muddy roads and rugged terrains. At the same time,' },
      { type: 'p', text: 'the precise steering system and flexible suspension system allow the driver to easily cope with' },
      { type: 'p', text: 'various challenges and improve work efficiency and safety.' },
      { type: 'p', text: 'Whether working in the field, on a construction site, or in the farmland, front-articulated' },
      { type: 'p', text: 'rough-terrain forklifts deliver outstanding performance, helping users complete tasks quickly.' },
      { type: 'p', text: 'Its durability and reliability have also been well received by users, making it your best choice in' },
      { type: 'p', text: 'harsh environments. Choose a front-articulated rough-terrain forklift to make your work more' },
      { type: 'p', text: 'efficient, safer and smoother!' }
    ],
    date: '2024-10-10',
    image: '/4-wheel-drive-forklift.jpeg',
    category: 'Product Launch'
  },
  {
    id: '4',
    title: '🌟 2025, let the dream further! 🌟',
    excerpt: 'The gears of time are quietly turning, and we have ushered in 2025. Thank you for your company and support. It is your trust and encouragement that keeps us moving forward.',
    content: [
      { type: 'p', text: 'The gears of time are quietly turning, and we have ushered in 2025. Thank you for your company and support. It is your trust and encouragement that keeps us moving forward.' },
      { type: 'p', text: '🎉 The New Year bell rings, a new story is about to begin!' },
      { type: 'p', text: '✨ By 2025, we commit to:' },
      { type: 'p', text: 'Adhere to quality: to bring you better service and products;' },
      { type: 'p', text: 'Service with heart: Every feedback is the driving force for our growth;' },
      { type: 'p', text: 'Progress together: Work together to create a better future!' },
      { type: 'p', text: 'In the New Year, may your life be full of love and hope, and may our cooperation be more brilliant!' },
      { type: 'p', text: "Let's make a better 2025 together!" }
    ],
    date: '2025-01-05',
    image: '/edu-friend.jpg',
    category: 'Events'
  },
  {
    id: '5',
    title: '"Self-loading flat mouth mixer truck"---small and flexible concrete mixer truck',
    excerpt: 'This type of mixer truck is easier to operate in narrow construction sites. They are also suitable',
    content: [
      { type: 'p', text: 'This type of mixer truck is easier to operate in narrow construction sites. They are also suitable' },
      { type: 'p', text: 'for projects with frequent movement between different construction sites. It adopts flat mouth' },
      { type: 'p', text: 'mixing and double-sided hydraulic control for discharging. Its operating efficiency can reach 6-' },
      { type: 'p', text: '7 batches per hour, 14 cubic meters per hour. It adopts a domestic supercharged engine with a' },
      { type: 'p', text: 'speed of 2200 rpm, a rated power of 60kw, double high and low speed, and a low speed of 0-20' },
      { type: 'p', text: 'km/h, high speed 0-35 km/h, its water supply system is a self-priming 24v centrifugal pump,' },
      { type: 'p', text: '24v self-adjusting centrifugal pump, its tires use 20.5-16 herringbone tires, the self-loading flat-' },
      { type: 'p', text: 'mouth mixer can be Efficiency in concrete mixing and transportation, thus saving time and labor costs.' },
      { type: 'p', text: 'All in all, we are very proud to launch the upgraded version of the self-loading flat mouth mixer' },
      { type: 'p', text: 'truck. We believe that this upgraded version of the mixer truck can become a powerful' },
      { type: 'p', text: 'assistant for construction workers and create a better and more efficient construction environment.' }
    ],
    date: '2024-08-18',
    image: '/concrete-Cement-Mixer-Truck.jpeg',
    category: 'Product Launch'
  },
  {
    id: '6',
    title: 'MOTORCADE TECHNOLOGY—Leads the new era of intelligent building materials',
    excerpt: 'Recently, mixing trucks have been exported to Southeast Asia, South America, the Middle East and Africa and other countries, widely used in road construction, residential development, bridge engineering and other fields. We firmly believe that quality products and perfect services will create greater value for global customers.',
    content: [
      { type: 'p', text: "Recently, mixing trucks have been exported to Southeast Asia, South America, the Middle East and Africa and other countries, widely used in road construction, residential development, bridge engineering and other fields. We firmly believe that quality products and perfect services will create greater value for global customers." },
      { type: 'p', text: "In today's increasingly stringent environmental regulations, we continue to optimize the product structure, introduce low energy consumption, high efficiency mixing trucks, reduce the carbon emissions in the construction process. At the same time, the introduction of intelligent systems makes the construction more accurate and efficient, and helps the industry to move towards sustainable development." },
      { type: 'p', text: 'MOTORCADE TECHNOLOGY always adheres to the concept of "scientific and technological innovation, customer first", and provides high-quality mixer equipment and high-quality after-sales service to customers around the world. In the future, we will continue to develop more advanced construction machinery and contribute China\'s intelligent manufacturing power to the global construction industry!' }
    ],
    date: '2025-02-13',
    image: '/concrete-mixer.jpg',
    category: 'Industry News'
  }
];

const NewsDetail = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation hook
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<typeof allNews[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the news item by ID
    const foundItem = allNews.find(item => item.id === id);
    
    // Simulate a loading state
    setTimeout(() => {
      setNewsItem(foundItem || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-72 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-20 px-6">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl font-bold text-primary mb-6">{t('newsNotFound')}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t('newsNotFoundDescription')}
            </p>
            <Link
              to="/news"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('backToNews')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  

  const formattedDate = new Date(newsItem.date).toLocaleDateString(i18n.language || 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <img 
          src={newsItem.image} 
          alt={t(newsItem.title)} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-7xl px-6 pb-16">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {t(newsItem.category)}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {t(newsItem.title)}
              </h1>
              <div className="flex items-center text-white/90">
                <Calendar className="h-5 w-5 mr-2" />
                <time dateTime={newsItem.date}>{formattedDate}</time>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {newsItem.content.map((item, index) => {
                if (item.type === 'h3') {
                  return <h3 key={index}>{t(item.text)}</h3>;
                } else if (item.type === 'p') {
                  return <p key={index}>{t(item.text)}</p>;
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Tag className="h-4 w-4" />
                <span>{t('category')}:</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {t(newsItem.category)}
                </span>
              </div>
              
              <Link
                to="/news"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t('backToAllNews')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;