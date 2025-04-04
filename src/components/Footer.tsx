
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-hindi text-2xl font-bold mb-4 text-gold">साहित्य पुस्तकालय</h3>
            <p className="text-white/80 mb-4">
              हिंदी साहित्य के प्रेमियों के लिए एक आभासी पुस्तकालय, जहां आप हिंदी की श्रेष्ठ कृतियों का आनंद ले सकते हैं।
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-hindi text-lg font-semibold mb-4 text-gold">त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-gold transition-colors">
                  मुख्य पृष्ठ
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-white/80 hover:text-gold transition-colors">
                  पुस्तकें
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-white/80 hover:text-gold transition-colors">
                  लेखक
                </Link>
              </li>
              <li>
                <Link to="/genres" className="text-white/80 hover:text-gold transition-colors">
                  श्रेणियाँ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-gold transition-colors">
                  हमारे बारे में
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-hindi text-lg font-semibold mb-4 text-gold">संपर्क करें</h4>
            <address className="not-italic text-white/80">
              <p className="mb-2">पता: साहित्य भवन, कमला नगर,</p>
              <p className="mb-2">नई दिल्ली - 110007</p>
              <p className="mb-2">फोन: +91 1234567890</p>
              <p className="mb-2">ईमेल: info@sahityalibrary.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} साहित्य पुस्तकालय | सर्वाधिकार सुरक्षित</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
