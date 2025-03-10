
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

// Sample news data - using the same data that's in News.tsx
const allNews = [
  {
    id: '1',
    title: 'New Fleet of Eco-Friendly Construction Trucks Launched',
    excerpt: 'Our company introduces a revolutionary line of eco-friendly construction trucks designed to reduce emissions while maintaining performance.',
    content: `
      <p>We are proud to announce the launch of our new eco-friendly construction truck fleet, designed with sustainability at its core without compromising on performance.</p>
      
      <p>These new vehicles incorporate hybrid power systems that reduce fuel consumption by up to 40% compared to conventional models. The innovative regenerative braking system captures energy that would otherwise be lost during deceleration and stores it for later use.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Hybrid electric-diesel powertrains for reduced emissions</li>
        <li>Advanced particulate filters to minimize air pollution</li>
        <li>Noise reduction technology for quieter operation in urban areas</li>
        <li>Smart route optimization to minimize fuel consumption</li>
        <li>Bio-based hydraulic fluids that are less harmful to the environment</li>
      </ul>
      
      <p>In addition to the environmental benefits, these trucks offer enhanced operator comfort with redesigned cabins, improved visibility, and state-of-the-art control systems. The integrated telematics provide real-time performance data to help operators maximize efficiency.</p>
      
      <p>"This launch represents a significant step forward in our commitment to sustainable construction solutions," said our Chief Technology Officer. "We've been developing these vehicles for over three years, and the results have exceeded our expectations in both environmental impact and performance metrics."</p>
      
      <p>The new trucks will be available for order next month, with deliveries scheduled to begin in the third quarter of this year.</p>
    `,
    date: '2023-06-15',
    image: 'https://images.unsplash.com/photo-1626327113655-733c19d09c2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Product Launch'
  },
  {
    id: '2',
    title: 'Industry Insights: The Future of Construction Machinery',
    excerpt: 'Expert analysis on upcoming trends and technological advancements in the construction machinery sector over the next decade.',
    content: `
      <p>The construction machinery industry stands at a pivotal point of transformation, with several technological trends poised to revolutionize how we build in the coming decade.</p>
      
      <h3>Automation and Robotics</h3>
      <p>Autonomous and semi-autonomous machines are becoming increasingly common on construction sites. These smart machines can perform repetitive tasks with precision, reducing labor costs and increasing safety. Remote-controlled excavators and bulldozers allow operators to work from a safe distance in hazardous environments.</p>
      
      <h3>Electrification</h3>
      <p>The shift toward electric-powered construction machinery is accelerating. Battery technology improvements have made electric excavators, loaders, and other equipment not just feasible but economically advantageous in many scenarios. Reduced noise, zero emissions, and lower operating costs make these machines particularly suited for urban construction sites.</p>
      
      <h3>IoT and Data Analytics</h3>
      <p>Connected construction machinery equipped with sensors provides valuable data on performance, maintenance needs, and utilization. This data allows fleet managers to optimize deployment, predict maintenance issues before they cause downtime, and improve overall efficiency.</p>
      
      <h3>AR and VR Applications</h3>
      <p>Augmented and virtual reality technologies are finding applications in operator training and machine operation. AR overlays can provide operators with real-time guidance, while VR simulations offer safe training environments for new operators.</p>
      
      <p>These technological advancements are not just changing the machines themselves but transforming the entire construction process. As these technologies mature and become more widely adopted, we can expect significant improvements in construction efficiency, safety, and environmental impact.</p>
      
      <p>"The construction machinery industry will see more changes in the next five years than it has in the previous twenty," predicts our Director of Innovation. "Companies that embrace these technologies will gain a significant competitive advantage."</p>
    `,
    date: '2023-05-22',
    image: 'https://images.unsplash.com/photo-1618761232055-3cd99ba58921?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Industry News'
  },
  {
    id: '3',
    title: 'TruckCatalogue Expansion into Asian Markets',
    excerpt: 'We\'re excited to announce our expansion into key Asian markets with new distribution centers in Singapore and Seoul.',
    content: `
      <p>We are thrilled to announce our strategic expansion into the Asian market, with new distribution centers opening in Singapore and Seoul. This expansion marks a significant milestone in our global growth strategy.</p>
      
      <p>The new facilities, spanning over 15,000 square meters each, will serve as regional hubs for sales, service, and parts distribution. This investment will significantly reduce delivery times for customers across Southeast Asia and East Asia.</p>
      
      <h3>Strategic Locations</h3>
      <p>Singapore's position as a major logistics hub in Southeast Asia makes it an ideal location for our regional headquarters. The city-state's excellent connectivity and business-friendly environment will enable us to serve customers throughout ASEAN countries efficiently.</p>
      
      <p>Seoul, with its proximity to major construction markets in Northeast Asia, will primarily focus on serving South Korea, Japan, and parts of China. The facility includes a state-of-the-art training center where customers and technicians can receive hands-on instruction with our equipment.</p>
      
      <h3>Market Opportunities</h3>
      <p>The Asian construction equipment market is projected to grow at 6.8% annually over the next five years, driven by major infrastructure projects and urban development initiatives across the region. Our expansion positions us to capitalize on this growth and better serve the unique needs of Asian customers.</p>
      
      <p>"This expansion represents our commitment to the Asian market," said our CEO during the opening ceremony in Singapore. "We believe our focus on reliability, innovation, and customer support will resonate strongly with customers in these regions."</p>
      
      <p>The new facilities will begin operations next month, with full capacity expected by the end of the quarter.</p>
    `,
    date: '2023-04-10',
    image: 'https://images.unsplash.com/photo-1589293697715-f50f93553d30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Company Updates'
  },
  {
    id: '4',
    title: 'Annual Construction Machinery Expo 2023 Highlights',
    excerpt: 'Recap of the exciting innovations and networking opportunities from this year\'s leading industry exhibition.',
    content: `
      <p>The Annual Construction Machinery Expo 2023 concluded last week, showcasing groundbreaking innovations and bringing together industry leaders from around the globe. Our team was proud to participate and exhibit our latest models.</p>
      
      <h3>Innovation Showcase</h3>
      <p>This year's expo featured an unprecedented focus on sustainable and smart machinery. Hydrogen-powered excavators, AI-assisted control systems, and advanced telematics solutions dominated the innovation showcase. Our next-generation hybrid bulldozer received significant attention for its combination of power and efficiency.</p>
      
      <h3>Industry Panels</h3>
      <p>Several thought-provoking panel discussions addressed critical industry challenges, including:</p>
      <ul>
        <li>Sustainable construction practices and the machinery to support them</li>
        <li>Workforce challenges and the role of automation</li>
        <li>Supply chain resilience in a volatile global economy</li>
        <li>Regulatory changes affecting equipment design and operation</li>
      </ul>
      
      <p>Our Chief Engineer participated in the "Future of Hydraulic Systems" panel, discussing innovations that increase efficiency while reducing environmental impact.</p>
      
      <h3>Networking Opportunities</h3>
      <p>The expo provided valuable opportunities to connect with customers, suppliers, and industry peers. Our team established several promising partnerships that will enhance our service offerings and supply chain resilience.</p>
      
      <p>Demonstrations of our latest equipment drew large crowds, with particular interest in our remote diagnostic capabilities and extended service packages.</p>
      
      <p>"The positive feedback we received on our 2024 lineup exceeded our expectations," noted our Director of Sales. "The connections made at this expo will drive our business forward in the coming year."</p>
      
      <p>We look forward to implementing the insights gained and continuing discussions with the many interested customers we met at the event.</p>
    `,
    date: '2023-07-05',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Events'
  },
  {
    id: '5',
    title: 'Introducing Our Advanced Hydraulic System Technology',
    excerpt: 'Our engineers have developed a breakthrough hydraulic system that significantly improves efficiency and reduces maintenance costs.',
    content: `
      <p>Today, we're proud to unveil our new Advanced Hydraulic System Technology (AHST), a revolutionary development that sets new standards for efficiency and reliability in construction machinery.</p>
      
      <p>After three years of intensive research and development, our engineering team has created a hydraulic system that delivers 30% greater efficiency while reducing maintenance requirements by up to 40%.</p>
      
      <h3>Technical Innovations</h3>
      <p>The AHST incorporates several groundbreaking features:</p>
      <ul>
        <li>Variable displacement pumps with intelligent flow management</li>
        <li>Advanced filtration system that extends fluid life by 50%</li>
        <li>Self-diagnosing components that alert operators to potential issues before failure</li>
        <li>Reduced internal friction designs that minimize heat generation</li>
        <li>Integrated cooling systems optimized for various operating conditions</li>
      </ul>
      
      <h3>Real-World Performance</h3>
      <p>Field tests conducted over the past six months have shown impressive results. Equipment fitted with AHST demonstrated fuel savings of 15-20% while maintaining or improving performance metrics. Maintenance intervals have been extended significantly, resulting in less downtime and lower operating costs.</p>
      
      <p>"This technology represents a fundamental rethinking of hydraulic systems," explained our Lead Engineer. "Instead of incremental improvements, we went back to first principles and redesigned the entire system with efficiency and reliability as our primary goals."</p>
      
      <h3>Availability</h3>
      <p>The AHST will be standard equipment on our premium line of excavators and loaders starting next quarter. Retrofit kits for select existing models will be available by the end of the year.</p>
      
      <p>This breakthrough technology underscores our commitment to innovation and our focus on delivering tangible value to our customers through reduced operating costs and improved performance.</p>
    `,
    date: '2023-03-18',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Product Launch'
  },
  {
    id: '6',
    title: 'Sustainability in Construction: Reducing Carbon Footprint',
    excerpt: 'How the construction machinery industry is adapting to environmental challenges and implementing sustainable practices.',
    content: `
      <p>The construction industry is responsible for approximately 39% of global carbon emissions, with a significant portion coming from construction machinery. As pressure mounts to address climate change, our industry is responding with innovative approaches to reduce its environmental impact.</p>
      
      <h3>Electrification of Equipment</h3>
      <p>The most visible change is the rapid development of electric and hybrid construction equipment. These machines not only reduce direct emissions but also significantly decrease noise pollution and can be operated indoors without ventilation concerns. Our company has committed to making 50% of our product lineup electric or hybrid by 2028.</p>
      
      <h3>Fuel Efficiency Improvements</h3>
      <p>For equipment that continues to use internal combustion engines, substantial improvements in fuel efficiency are being achieved through advanced engine management systems, optimized hydraulics, and lighter materials. Our newest diesel models achieve 25% better fuel efficiency compared to models from just five years ago.</p>
      
      <h3>Sustainable Materials</h3>
      <p>The materials used in manufacturing construction equipment are also evolving. Recycled metals, bio-based hydraulic fluids, and sustainable alternatives to traditional components are becoming increasingly common. Our research department is currently testing composite materials derived from agricultural waste for non-structural components.</p>
      
      <h3>Lifecycle Considerations</h3>
      <p>Sustainability extends beyond the operating phase of machinery. Design for disassembly and recycling is becoming standard practice, ensuring that equipment at the end of its life can be efficiently recycled rather than becoming waste. Our new models are designed with 85% recyclable components.</p>
      
      <p>"The transition to sustainable construction machinery isn't just an environmental imperative—it's increasingly a business necessity," notes our Sustainability Director. "Customers are demanding greener solutions, and regulatory requirements are tightening globally."</p>
      
      <p>As the industry continues to evolve, we remain committed to leading the way in sustainable innovation, developing technologies that reduce environmental impact while enhancing performance and value for our customers.</p>
    `,
    date: '2023-08-12',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Industry News'
  }
];

const NewsDetail = () => {
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
            <h1 className="text-3xl font-bold text-primary mb-6">News Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The news article you are looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(newsItem.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <img 
          src={newsItem.image} 
          alt={newsItem.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-7xl px-6 pb-16">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {newsItem.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {newsItem.title}
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
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }}></div>
            
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Tag className="h-4 w-4" />
                <span>Category:</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {newsItem.category}
                </span>
              </div>
              
              <Link
                to="/news"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to all news
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
