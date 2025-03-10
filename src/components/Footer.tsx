
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Motorcade Technology</h3>
            <p className="text-muted-foreground">
              Providing high-quality truck machinery solutions for your industrial needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Unit 1207, Building 1, No. 288, Zhuhai East Road, Jiaonan City, Qingdao</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} />
                <span>+8617864268032,</span>
                <span>+8617852160455</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} />
                <span>13061287760@163.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Motorcade Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
