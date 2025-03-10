
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${
        isScrolled ? 'py-3 glass-morphism shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-semibold tracking-tight"
        >
          <Link to="/" className="flex items-center space-x-2 text-2xl font-display font-semibold tracking-tight">
  <img src="/logo.png" alt="Motorcade Technology Logo" className="h-8 w-8 object-contain" />
  <span>Motorcade Technology</span>
</Link>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`relative font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full transform scale-x-100 origin-left transition-transform" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden focus:outline-none button-hover" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-sm animate-fade-in md:hidden">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                <li key={link.path} className="w-full text-center">
                  <Link 
                    to={link.path} 
                    className={`text-2xl font-medium ${
                      location.pathname === link.path 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
