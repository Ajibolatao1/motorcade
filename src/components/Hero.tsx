import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string; // Make image optional to handle missing images
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero = ({
  title,
  subtitle,
  image = '/my-background.jpg', // Use custom image from public folder
  primaryButtonText,
  primaryButtonLink = '/',
  secondaryButtonText,
  secondaryButtonLink = '/',
}: HeroProps) => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {image ? (
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            onError={(e) => (e.currentTarget.src = '/my-background.jpg')} // Handle broken images
          />
        ) : null}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <AnimatedSection staggerIndex={1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection staggerIndex={2}>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection staggerIndex={3} className="flex flex-col sm:flex-row gap-4">
            {primaryButtonText && (
              <Link
                to={primaryButtonLink}
                className="button-hover inline-flex items-center justify-center rounded-md text-white bg-primary px-6 py-3 font-medium shadow-lg"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            )}
            
            {secondaryButtonText && (
              <Link
                to={secondaryButtonLink}
                className="button-hover inline-flex items-center justify-center rounded-md text-primary bg-white px-6 py-3 font-medium shadow-lg"
              >
                {secondaryButtonText}
              </Link>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Hero;
