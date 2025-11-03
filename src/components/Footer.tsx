import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">RAG 45</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Celebrating the legacy of the 45th Batch at Jahangirnagar University. 
              উৎসবে আর ক্রন্দনে, থাক পঁয়তাল্লিশ বন্ধনে
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:contact@rag.ju45th.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  contact@rag.ju45th.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:01997488040" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  01997488040
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Rag Building, Jahangirnagar University
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} RAG 45 - Jahangirnagar University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
