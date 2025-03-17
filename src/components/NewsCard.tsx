import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const NewsCard = ({ id, title, excerpt, date, image, category }: NewsCardProps) => {
  const { t } = useTranslation(); // Translation Hook

  const formattedDate = new Date(date).toLocaleDateString(t('locale'), {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="overflow-hidden rounded-xl bg-background shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {t(category)}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/news/${id}`}>{t(title)}</Link>
        </h3>
        
        <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{t(excerpt)}</p>
        
        <Link 
          to={`/news/${id}`}
          className="inline-flex items-center text-primary transition-colors hover:text-primary/80 mt-auto"
        >
          <span className="relative">
            {t('read_more')}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
