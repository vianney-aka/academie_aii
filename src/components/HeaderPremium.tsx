import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenuAII from './MegaMenuAII';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const HeaderPremium = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaMenuSection, setActiveMegaMenuSection] = useState<string>('general');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check localStorage for announcement banner
  const [isAnnouncementClosed, setIsAnnouncementClosed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('announcementClosed') === 'true';
    }
    return false;
  });

  // Handle announcement close
  const handleCloseAnnouncement = () => {
    setIsAnnouncementClosed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('announcementClosed', 'true');
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with dropdowns - Structure adaptée AII
  const navItems = [
    {
      label: 'Formations',
      hasDropdown: true,
      hasMegaMenu: true,
      megaMenuType: 'formations'
    },
    {
      label: 'Séminaires internationaux',
      path: '/seminaires',
      hasDropdown: false
    },
    {
      label: 'Catalogue E-learning',
      hasDropdown: true,
      hasMegaMenu: true,
      megaMenuType: 'elearning'
    },
    {
      label: 'Forum PPP',
      path: '/forum-ppp',
      hasDropdown: false
    }
  ];

  return (
    <>
      {/* Announcement Banner */}
      {!isAnnouncementClosed && (
        <div className="bg-gradient-to-r from-aii-primary to-aii-secondary text-white py-3 px-4 relative z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <a 
              href="/programme-vea" 
              className="flex items-center space-x-2 text-sm md:text-base hover:underline group"
            >
              <span className="opacity-90">Inscriptions ouvertes - Programme VEA 2025</span>
              <span className="font-semibold">Découvrir</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={handleCloseAnnouncement}
              className="absolute right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all"
              aria-label="Fermer l'annonce"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-aii-primary/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-12'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Accueil */}
              <Link
                to="/"
                className="px-4 py-2 text-white/90 hover:text-white font-medium transition-colors"
              >
                Accueil
              </Link>

              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                >
                  {item.hasMegaMenu ? (
                    <>
                      <button 
                        onClick={() => {
                          setIsMegaMenuOpen(true);
                          setActiveMegaMenuSection(item.megaMenuType || 'general');
                        }}
                        className="flex items-center space-x-1 px-4 py-2 text-white/90 hover:text-white transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      className="px-4 py-2 text-white/90 hover:text-white font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Inscrivez-vous */}
              <Link
                to="/inscription"
                className="hidden md:inline-flex items-center px-4 py-2
                         text-white/90 hover:text-white font-medium transition-colors"
              >
                Inscrivez-vous
              </Link>

              {/* Connectez-vous */}
              <Link
                to="/connexion"
                className="hidden md:inline-flex items-center px-4 py-2
                         border border-white/30 text-white rounded-lg font-medium
                         hover:bg-white/10 transition-all"
              >
                Connectez-vous
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-700/50">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
              {/* Accueil */}
              <Link
                to="/"
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasMegaMenu ? (
                    <button
                      onClick={() => {
                        setIsMegaMenuOpen(true);
                        setActiveMegaMenuSection(item.megaMenuType || 'general');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between w-full text-white font-medium py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path!}
                      className="block text-white font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Divider */}
              <div className="border-t border-slate-700/50 my-4"></div>

              {/* Auth Links */}
              <Link
                to="/inscription"
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inscrivez-vous
              </Link>

              <Link
                to="/connexion"
                className="block text-white font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connectez-vous
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* MegaMenu AII - Intelligent Menu */}
      <MegaMenuAII 
        isOpen={isMegaMenuOpen} 
        onClose={() => setIsMegaMenuOpen(false)}
        activeSection={activeMegaMenuSection}
      />
    </>
  );
};

export default HeaderPremium;
