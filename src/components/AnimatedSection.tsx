
import { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  staggerIndex?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  staggerIndex = 0 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const staggerClass = staggerIndex > 0 ? `stagger-${staggerIndex}` : '';

  return (
    <div 
      ref={sectionRef} 
      className={`animate-on-scroll ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
