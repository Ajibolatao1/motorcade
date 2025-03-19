import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

// Custom TikTok SVG Icon
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M448 209.3v53.8c-19.9 3.7-40.1 5.6-60.5 5.6-37.6 0-73.7-8.8-106.3-24.5v149.5c0 27.5-7 53.4-19.4 75.8C234.1 495.5 199.5 512 162.7 512c-34.2 0-66.1-13.3-90.3-35-3.3-3-6.5-6.1-9.5-9.4C24.4 438 8.1 403.5 8.1 365.8c0-40.6 18.5-78.2 47.6-102.9 21.5-18.6 48.5-31.3 77.5-36.5 10.4-1.9 21-2.9 31.8-2.9v53.8c-9.9 0-19.6 1.1-29 3.3-27.8 6.4-51.6 22.3-68.3 42.7-14.1 17.4-22.6 39.5-22.6 63.5 0 21.9 6.8 42.1 18.4 58.7 1.9 2.6 3.9 5.1 6 7.5 14.6 16.3 35.8 26.5 59.2 26.5 28.3 0 53.5-14.4 68.6-36.4 8.8-13.1 14-28.7 14-45.5V0h59.3c3.1 27.8 17.3 52.5 37.4 69.1 17.3 14.3 39.3 22.9 63.2 22.9V209.3z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t("company_name")}</h3>
            <p className="text-muted-foreground">{t("company_description")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">{t("quick_links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">{t("contact_us")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={18} />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} />
                <span>{t("phone1")}</span>
                <span>{t("phone2")}</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} />
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">{t("follow_us")}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571195877825"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@your-tiktok-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} {t("company_name")}. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
