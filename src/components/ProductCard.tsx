
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, description, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors">{name}</h3>
        <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <Link 
          to={`/products/${id}`}
          className="inline-flex items-center text-primary transition-all duration-300 relative hover:translate-x-1"
        >
          <span>View details</span>
          <ArrowRight 
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              isHovered ? 'transform translate-x-1' : ''
            }`} 
          />
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
