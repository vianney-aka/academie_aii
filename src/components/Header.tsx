import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../data/constants';
import MegaMenu from './MegaMenu';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAProposOpen, setIsAProposOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isImpactOpen, setIsImpactOpen] = useState(false);
  const [isRessourcesOpen, setIsRessourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      {/* Top Blue Banner - Hide on scroll */}
      <div className={`bg-[#0064B0] text-white transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'py-3'} px-4`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <span>Congrès Annuel de l'AII - Décembre 2025 - Inscriptions ouvertes</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <button className="text-white hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className={`text-white transition-all duration-300 ${isScrolled ? 'bg-[#0064B0]' : 'bg-transparent hover:bg-[#0095D9]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Top Navigation Row */}
          <div className={`group flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5 border-b border-white/10'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-3 hover:opacity-90 transition">
                <img 
                  src="/logo.png" 
                  alt="Académie Internationale Interuniversitaire" 
                  className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
                />
              </div>
            </Link>

            {/* Primary Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm lg:text-[15px]">
              {/* Hide most menu items when scrolled */}
              {!isScrolled && (
                <>
                  <a href="#" className="hover:opacity-90 transition font-medium">Actualités</a>
                  <a href="#" className="hover:opacity-90 transition font-medium">Événements</a>
                  <a href="#" className="hover:opacity-90 transition font-medium">Partenariats</a>
                  <a href="#" className="hover:opacity-90 transition font-medium">Gouvernance</a>
                </>
              )}
              
              {/* Always show "Liens utiles" text and icon */}
              <div className="flex items-center space-x-2">
                {!isScrolled && (
                  <span className="text-white font-medium">Liens utiles</span>
                )}
                <button 
                  onClick={() => {
                    setIsMegaMenuOpen(true);
                    setIsAProposOpen(false);
                    setIsExpertiseOpen(false);
                    setIsImpactOpen(false);
                    setIsRessourcesOpen(false);
                  }}
                  className="p-2 hover:opacity-90 rounded transition"
                  aria-label="Ouvrir le menu liens utiles"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3h2v2H3V3zm0 4h2v2H3V7zm0 4h2v2H3v-2zm0 4h2v2H3v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-12h2v2h-2V3zm0 4h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                  </svg>
                </button>
              </div>
              
              {/* Hide language selector when scrolled */}
              {!isScrolled && (
                <button className="flex items-center space-x-1.5 hover:opacity-90 transition font-medium">
                  <span>Français</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </nav>

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

          {/* Secondary Navigation Row - Main Menu Links */}
          {!isScrolled && (
            <div className="hidden lg:flex items-center justify-end space-x-7 py-4 text-sm lg:text-[15px]">
              {NAVIGATION_LINKS.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href}
                  className="hover:opacity-90 transition font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button className="p-2 hover:opacity-90 rounded-full transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md text-white px-4 py-4 space-y-3 text-sm">
          {NAVIGATION_LINKS.map((link) => (
            <Link 
              key={link.href}
              to={link.href}
              className="block py-2 hover:text-[#0095D9] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
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

      {/* MegaMenu Modal */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
    </header>
  );
};

export default Header;
