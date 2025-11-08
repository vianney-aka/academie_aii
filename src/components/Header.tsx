import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegaMenuAdvanced from './MegaMenuAdvanced';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAProposOpen, setIsAProposOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);
  const [isRessourcesOpen, setIsRessourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  
  // Check localStorage for banner preference
  const [isBannerClosed, setIsBannerClosed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bannerClosed') === 'true';
    }
    return false;
  });

  // Handle banner close
  const handleCloseBanner = () => {
    setIsBannerClosed(true);
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('bannerClosed', 'true');
    }
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 relative">
      {/* Top Blue Banner - Hide on scroll or when closed */}
      <div 
        className={`bg-aii-primary text-white overflow-hidden transition-all duration-500 ease-in-out ${
          !isScrolled && !isBannerClosed ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-3 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-sm hover:underline flex-1 group"
              >
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium">NOUVEAU</span>
                <span className="group-hover:underline">Congrès Annuel de l'AII - Décembre 2025 - Inscriptions ouvertes</span>
                <svg className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button 
                onClick={handleCloseBanner}
                className="text-white/80 hover:text-white transition-all p-1.5 hover:bg-white/10 rounded-full ml-4 group"
                aria-label="Fermer l'annonce"
                title="Fermer l'annonce"
              >
                <svg className="w-4 h-4 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div 
        className={`transition-all duration-300 ${isScrolled || isHeaderHovered ? 'bg-aii-primary shadow-lg' : ''}`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className="text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Top Navigation Row */}
            <div className="flex justify-between items-center py-3">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div className="flex items-center hover:opacity-90 transition">
                  <img 
                    src="/logo.png" 
                    alt="Académie Internationale Interuniversitaire" 
                    className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
                  />
                </div>
              </Link>

            {/* Primary Navigation - Right side top menu */}
            {isScrolled ? (
              /* Scrolled state - Only show Liens utiles */
              <nav className="hidden lg:flex items-center">
                <button 
                  onClick={() => {
                    setIsMegaMenuOpen(true);
                    setIsAProposOpen(false);
                    setIsExpertiseOpen(false);
                    setIsImpactOpen(false);
                    setIsRessourcesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-sm hover:opacity-80 transition"
                >
                  <span>Liens utiles</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 3h2v2H3V3zm0 4h2v2H3V7zm0 4h2v2H3v-2zm0 4h2v2H3v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                  </svg>
                </button>
              </nav>
            ) : (
              /* Default state - Show all navigation items */
              <nav className="hidden lg:flex items-center space-x-6 text-[13px]">
                <a href="#" className="hover:text-aii-secondary transition whitespace-nowrap">Espace Presse et Actualités</a>
                <a href="#" className="hover:text-aii-secondary transition">Événements</a>
                <a href="#" className="hover:text-aii-secondary transition">Partenariats</a>
                <a href="#" className="hover:text-aii-secondary transition">Gouvernance</a>
                <button 
                  onClick={() => {
                    setIsMegaMenuOpen(true);
                    setIsAProposOpen(false);
                    setIsExpertiseOpen(false);
                    setIsImpactOpen(false);
                    setIsRessourcesOpen(false);
                  }}
                  className="flex items-center hover:text-aii-secondary transition whitespace-nowrap"
                >
                  <span>Liens utiles</span>
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 3h2v2H3V3zm0 4h2v2H3V7zm0 4h2v2H3v-2zm0 4h2v2H3v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                  </svg>
                </button>
                <div className="flex items-center border-l border-white/30 pl-6">
                  <button className="flex items-center space-x-1 hover:text-aii-secondary transition">
                    <span>Français</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </nav>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            </div>

            {/* Secondary Navigation Row - Dropdown Menu Links */}
            {!isScrolled && (
            <div className={`hidden lg:flex items-center justify-between pb-3 -mt-1 transition-all duration-300 ${isHeaderHovered ? 'border-b border-transparent' : 'border-b border-white'}`}>
            {/* Empty space for alignment */}
            <div className="flex-1"></div>
            
            {/* Menu items aligned to right */}
            <div className="flex items-center space-x-8">
              {/* À propos Dropdown */}
              <button 
                onClick={() => {
                  setIsAProposOpen(!isAProposOpen);
                  setIsExpertiseOpen(false);
                  setIsImpactOpen(false);
                  setIsRessourcesOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 transition text-base font-medium hover:text-white/90"
              >
                <span>À propos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expertise Dropdown */}
              <button 
                onClick={() => {
                  setIsExpertiseOpen(!isExpertiseOpen);
                  setIsAProposOpen(false);
                  setIsImpactOpen(false);
                  setIsRessourcesOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 transition text-base font-medium hover:text-white/90"
              >
                <span>Expertise</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Impact Dropdown */}
              <button 
                onClick={() => {
                  setIsImpactOpen(!isImpactOpen);
                  setIsAProposOpen(false);
                  setIsExpertiseOpen(false);
                  setIsRessourcesOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 transition text-base font-medium hover:text-white/90"
              >
                <span>Impact</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Ressources Dropdown */}
              <button 
                onClick={() => {
                  setIsRessourcesOpen(!isRessourcesOpen);
                  setIsAProposOpen(false);
                  setIsExpertiseOpen(false);
                  setIsImpactOpen(false);
                  setIsMegaMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 transition text-base font-medium hover:text-white/90"
              >
                <span>Ressources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Search button */}
            <button className="p-2 hover:opacity-80 transition ml-8">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-aii-primary text-white px-4 py-4 space-y-3 text-sm">
          {/* Primary Navigation Items */}
          <a href="#" className="block py-2 hover:text-aii-secondary transition">Espace Presse et Actualités</a>
          <a href="#" className="block py-2 hover:text-aii-secondary transition">Événements</a>
          <a href="#" className="block py-2 hover:text-aii-secondary transition">Partenariats</a>
          <a href="#" className="block py-2 hover:text-aii-secondary transition">Gouvernance</a>
          <button 
            onClick={() => {
              setIsMegaMenuOpen(true);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left py-2 hover:text-aii-secondary transition"
          >
            Liens utiles
          </button>
          
          <div className="border-t border-white/20 pt-3">
            {/* Dropdown Menu Items */}
            <button 
              onClick={() => {
                setIsAProposOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-aii-secondary transition"
            >
              À propos
            </button>
            <button 
              onClick={() => {
                setIsExpertiseOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-aii-secondary transition"
            >
              Expertise
            </button>
            <button 
              onClick={() => {
                setIsImpactOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-aii-secondary transition"
            >
              Impact
            </button>
            <button 
              onClick={() => {
                setIsRessourcesOpen(true);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 hover:text-aii-secondary transition"
            >
              Ressources
            </button>
          </div>
          
          <div className="border-t border-white/20 pt-3">
            <button className="block w-full text-left py-2 hover:text-aii-secondary transition">
              Français
            </button>
          </div>
        </div>
      )}

      {/* Dropdown Menu - À propos */}
      <DropdownMenu
        isOpen={isAProposOpen}
        onClose={() => setIsAProposOpen(false)}
        title="L'AII est l'Académie Internationale Interuniversitaire dédiée à l'excellence académique et au renforcement des capacités universitaires en Afrique et dans le monde."
        description=""
        buttonText="L'AII en bref"
        cards={[
          {
            title: "Notre travail sur le terrain",
            imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
            link: "#terrain"
          },
          {
            title: "Nos objectifs",
            imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
            link: "#objectifs"
          },
          {
            title: "Nous rendre visite",
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
            link: "#visite"
          },
          {
            title: "Nos sites",
            imageUrl: "https://images.unsplash.com/photo-1569074187119-c87815b476da?w=600&h=400&fit=crop",
            link: "#sites"
          }
        ]}
      />

      {/* Dropdown Menu - Expertise */}
      <DropdownMenu
        isOpen={isExpertiseOpen}
        onClose={() => setIsExpertiseOpen(false)}
        title="L'AII mobilise son expertise en formation supérieure, recherche collaborative et innovation pédagogique pour promouvoir l'excellence académique."
        description=""
        buttonText="Nos domaines"
        cards={[
          {
            title: "Éducation",
            imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
            link: "#education"
          },
          {
            title: "Sciences exactes et naturelles",
            imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
            link: "#sciences-naturelles"
          },
          {
            title: "Sciences sociales et humaines",
            imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
            link: "#sciences-sociales"
          },
          {
            title: "Culture",
            imageUrl: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&h=400&fit=crop",
            link: "#culture"
          },
          {
            title: "Communication & Information",
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
            link: "#communication"
          },
          {
            title: "Océan",
            imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
            link: "#ocean"
          },
          {
            title: "Priorité Afrique",
            imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
            link: "#priorite-afrique"
          },
          {
            title: "Priorité Égalité des genres",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
            link: "#egalite-genres"
          }
        ]}
      />

      {/* Dropdown Menu - Impact */}
      <DropdownMenu
        isOpen={isImpactOpen}
        onClose={() => setIsImpactOpen(false)}
        title="L'AII agit à l'échelle internationale en renforçant les universités partenaires, en développant des programmes innovants et en facilitant les échanges académiques."
        description=""
        buttonText="Notre Impact"
        cards={[
          {
            title: "Normes internationales et textes juridiques",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
            link: "#normes"
          },
          {
            title: "Outils de coopération",
            imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
            link: "#outils"
          },
          {
            title: "Listes et appellations",
            imageUrl: "https://images.unsplash.com/photo-1523895665936-7bfe172b757d?w=600&h=400&fit=crop",
            link: "#listes"
          },
          {
            title: "Laboratoire d'idées Bibliothèque de connaissances",
            imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
            link: "#laboratoire"
          }
        ]}
      />

      {/* Dropdown Menu - Ressources */}
      <DropdownMenu
        isOpen={isRessourcesOpen}
        onClose={() => setIsRessourcesOpen(false)}
        title="Explorez le lieu emblématique où se sont réunis les plus grands esprits, les experts de renom et les idées qui ont marqué l'histoire."
        description=""
        buttonText="Laboratoire d'idées"
        buttonText2="Portail de données stratégiques"
        cards={[
          {
            title: "Publications et rapports",
            imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
            link: "#publications"
          },
          {
            title: "Revues et magazines académiques AII",
            imageUrl: "https://images.unsplash.com/photo-1586953208270-7f90b1ece9ed?w=600&h=400&fit=crop",
            link: "#magazines"
          },
          {
            title: "Bibliothèque documentaire AII",
            imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
            link: "#bibliotheque"
          },
          {
            title: "Données clés",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            link: "#donnees"
          },
          {
            title: "Cours en ligne",
            imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
            link: "#cours"
          },
          {
            title: "Campus AII : Espace étudiant",
            imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
            link: "#campus"
          }
        ]}
      />

      {/* MegaMenu Advanced Modal */}
      <MegaMenuAdvanced isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </header>
  );
};

export default Header;
