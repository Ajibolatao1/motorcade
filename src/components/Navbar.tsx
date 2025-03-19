import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("about"), path: "/about" },
    { name: t("products"), path: "/products" },
    { name: t("news"), path: "/news" },
    { name: t("contact"), path: "/contact" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${
      isScrolled ? "py-3 bg-white shadow-sm" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-display font-semibold tracking-tight">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span>{t("Motorcade Technology")}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`relative font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={scrollToTop} // Scroll to top on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher (Desktop) */}
          <select
            className="ml-6 px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
            <option value="hi">हिन्दी</option>
            <option value="ru">Русский</option>
            <option value="ja">日本語</option>
            <option value="pt">Português</option>
          </select>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg p-6 flex flex-col items-start z-50 transition-transform duration-300"
        >
          {/* Close Button */}
          <button
            className="self-end text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="mt-6 w-full">
            <ul className="flex flex-col space-y-4 w-full">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`text-lg font-medium block w-full px-4 py-2 rounded-md transition-colors ${
                      location.pathname === link.path ? "bg-primary text-white" : "text-muted-foreground hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false); // Close the mobile menu
                      scrollToTop(); // Scroll to the top
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher (Mobile) */}
            <select
              className="mt-6 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文</option>
              <option value="ar">العربية</option>
              <option value="hi">हिन्दी</option>
              <option value="ru">Русский</option>
              <option value="ja">日本語</option>
              <option value="pt">Português</option>
            </select>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;