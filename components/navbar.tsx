"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-2xl shadow-2xl shadow-slate-900/25 border-b border-slate-700/30 py-3'
            : 'bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-lg py-5'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
        }}
      >
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 opacity-50 animate-pulse"></div>
        
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/30 rounded-2xl blur-xl group-hover:bg-amber-300/40 transition-all duration-500 scale-150"></div>
              <Code className="h-10 w-10 text-amber-400 transition-all duration-500 ease-out group-hover:text-amber-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
            </div>
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent tracking-tight group-hover:tracking-wide transition-all duration-500">
              Cripcocode
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ease-out group overflow-hidden
                  ${
                    pathname === link.path
                      ? 'text-amber-300 bg-slate-800/70 shadow-xl shadow-slate-900/40 scale-105'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/50 hover:scale-105'
                  }
                `}
                style={{
                  transform: hoveredLink === link.name ? 'translateY(-2px)' : 'translateY(0px)',
                  boxShadow: hoveredLink === link.name ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : 'none',
                }}
              >
                <span className="relative z-10 transition-all duration-300">{link.name}</span>
                
                {/* Active indicator */}
                {pathname === link.path && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg shadow-amber-400/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-yellow-300/10 to-amber-400/15 rounded-2xl"></div>
                  </>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-yellow-300/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:via-yellow-300/5 group-hover:to-amber-400/10 rounded-2xl transition-all duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
              </Link>
            ))}
            
            <Button 
              className="ml-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-semibold shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all duration-500 hover:scale-110 border border-amber-400/30 rounded-2xl px-6 py-2.5 group overflow-hidden relative" 
              size="sm"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:scale-105">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 to-amber-200/0 group-hover:from-amber-300/20 group-hover:to-amber-200/20 transition-all duration-500"></div>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-3 text-slate-300 hover:text-amber-300 bg-slate-800/50 hover:bg-slate-800/70 rounded-2xl transition-all duration-500 hover:scale-110 backdrop-blur-sm border border-slate-700/50 hover:border-amber-400/30"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'}`} 
              />
            </div>
          </button>

          {/* Mobile navigation overlay */}
          <div
            className={`fixed inset-0 transition-all duration-700 ease-out md:hidden ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgb(15 23 42 / 0.98), rgb(30 41 59 / 0.95), rgb(15 23 42 / 0.98))',
              backdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <nav className="flex flex-col items-center justify-center h-full gap-6 relative z-10 px-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-medium transition-all duration-500 hover:scale-110 px-6 py-3 rounded-2xl backdrop-blur-sm ${
                    pathname === link.path
                      ? 'text-amber-300 drop-shadow-2xl bg-slate-800/30 shadow-xl shadow-amber-400/20'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/20'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isOpen ? 'mobileSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
                    opacity: 0,
                    transform: 'translateY(50px) scale(0.8)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              <Button 
                className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-semibold text-lg px-10 py-4 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all duration-500 hover:scale-110 rounded-2xl border border-amber-400/30"
                style={{
                  animationDelay: `${navLinks.length * 150}ms`,
                  animation: isOpen ? 'mobileSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none',
                  opacity: 0,
                  transform: 'translateY(50px) scale(0.8)',
                }}
              >
                Get In Touch
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes mobileSlideIn {
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
}