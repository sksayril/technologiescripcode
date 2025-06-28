import Link from 'next/link';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <Code className="h-7 w-7 text-amber-400 transition-all duration-300 group-hover:text-amber-300" />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md group-hover:bg-amber-300/30 transition-all duration-300"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Cripcocode
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Leading IT solutions provider specializing in cutting-edge technology 
              services to transform businesses and drive innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block">
                  DevOps Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Office2, Amadpur Schoolpara, Near Amadpur School<br />
                Meamri,Burdwan,713154
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <a href="tel:+14155550123" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                  +91 (92) 6541-7748
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <a href="mailto:info.cripcocode@gmail.com" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                info.cripcocode@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} Cripcocode Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="text-slate-600">CIN U62013WB2025PTC277922</p>
          </div>
        </div>
      </div>
    </footer>
  );
}