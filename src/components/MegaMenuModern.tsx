import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Globe, 
  Lightbulb,
  FileText,
  Mail,
  ArrowRight,
  Award,
  Target,
  Network,
  Building2,
  Leaf,
  Palette,
  Laptop,
  Scale,
  Shield,
  TrendingUp,
  Heart,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface MegaMenuModernProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubMenuItem {
  title: string;
  link: string;
  description?: string;
}

interface MenuSection {
  icon: any;
  title: string;
  description: string;
  link: string;
  color: string;
  subMenu?: SubMenuItem[];
}

const MegaMenuModern = ({ isOpen, onClose }: MegaMenuModernProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('principal');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Structure complète du menu avec catégories et sous-menus
  const menuCategories = {
    principal: [
      {
        icon: GraduationCap,
        title: 'Programme VEA',
        description: 'Valorisation de l\'Excellence Africaine',
        link: '/programme-vea',
        color: 'from-blue-500 via-blue-600 to-indigo-600',
        subMenu: [
          { title: 'Objectifs du programme', link: '/programme-vea#objectifs' },
          { title: 'Axes stratégiques', link: '/programme-vea#axes' },
          { title: 'Résultats & Impact', link: '/programme-vea#resultats' }
        ]
      },
      {
        icon: BookOpen,
        title: 'Formations',
        description: '3 parcours certifiants en format hybride',
        link: '/formations',
        color: 'from-purple-500 via-purple-600 to-pink-600',
        subMenu: [
          { title: 'Leadership académique', link: '/formations#leadership' },
          { title: 'Recherche & Innovation', link: '/formations#recherche' },
          { title: 'Pédagogie numérique', link: '/formations#pedagogie' }
        ]
      },
      {
        icon: Lightbulb,
        title: 'Recherche',
        description: 'Programmes de financement et projets',
        link: '/recherche',
        color: 'from-amber-500 via-orange-500 to-red-500',
        subMenu: [
          { title: 'Axes prioritaires', link: '/recherche#axes' },
          { title: 'Financement', link: '/recherche#financement' },
          { title: 'Projets en cours', link: '/recherche#projets' }
        ]
      },
      {
        icon: Users,
        title: 'Gouvernance',
        description: 'Structure et organes de décision',
        link: '/gouvernance',
        color: 'from-green-500 via-emerald-500 to-teal-600',
        subMenu: [
          { title: 'Organes directeurs', link: '/gouvernance#organes' },
          { title: 'Comités techniques', link: '/gouvernance#comites' },
          { title: 'Transparence', link: '/gouvernance#transparence' }
        ]
      }
    ],
    expertise: [
      {
        icon: Building2,
        title: 'Éducation',
        description: 'Programmes académiques et formations',
        link: '/education',
        color: 'from-sky-500 via-blue-500 to-indigo-600'
      },
      {
        icon: Leaf,
        title: 'Environnement',
        description: 'Développement durable et ODD',
        link: '/environnement',
        color: 'from-green-600 via-lime-500 to-emerald-600'
      },
      {
        icon: Palette,
        title: 'Culture',
        description: 'Patrimoine et diversité culturelle',
        link: '/culture',
        color: 'from-pink-500 via-rose-500 to-red-500'
      },
      {
        icon: Laptop,
        title: 'Numérique',
        description: 'Transformation digitale de l\'enseignement',
        link: '/numerique',
        color: 'from-cyan-500 via-blue-500 to-purple-600'
      },
      {
        icon: Shield,
        title: 'Éthique',
        description: 'Charte éthique et intégrité académique',
        link: '/ethique',
        color: 'from-violet-500 via-purple-500 to-indigo-600'
      },
      {
        icon: Scale,
        title: 'État de Droit',
        description: 'Formation juridique et cliniques',
        link: '/etat-de-droit',
        color: 'from-slate-600 via-gray-600 to-zinc-700'
      }
    ],
    reseau: [
      {
        icon: Globe,
        title: 'Qui sommes-nous',
        description: 'Notre histoire et notre mission',
        link: '/qui-sommes-nous',
        color: 'from-blue-600 via-cyan-500 to-teal-500',
        subMenu: [
          { title: 'À propos de l\'AII', link: '/about' },
          { title: 'Notre histoire', link: '/qui-sommes-nous#histoire' },
          { title: 'Vision & Mission', link: '/qui-sommes-nous#vision' }
        ]
      },
      {
        icon: Network,
        title: 'Réseau Partenaires',
        description: '50+ universités dans 15 pays africains',
        link: '/about#reseau',
        color: 'from-orange-500 via-red-500 to-pink-600'
      },
      {
        icon: Award,
        title: 'Notre Impact',
        description: '1200+ bénéficiaires, excellence académique',
        link: '/about#impact',
        color: 'from-yellow-500 via-amber-500 to-orange-600'
      },
      {
        icon: TrendingUp,
        title: 'Résultats & Chiffres',
        description: 'Statistiques et indicateurs clés',
        link: '/about#statistiques',
        color: 'from-emerald-500 via-green-500 to-teal-600'
      }
    ],
    ressources: [
      {
        icon: FileText,
        title: 'Publications',
        description: 'Rapports, études et documents',
        link: '/recherche#publications',
        color: 'from-indigo-500 via-blue-500 to-cyan-500'
      },
      {
        icon: BookOpen,
        title: 'Bibliothèque',
        description: 'Ressources pédagogiques et académiques',
        link: '/formations#ressources',
        color: 'from-purple-500 via-violet-500 to-purple-600'
      },
      {
        icon: Sparkles,
        title: 'Innovations',
        description: 'Projets pilotes et expérimentations',
        link: '/recherche#innovations',
        color: 'from-fuchsia-500 via-pink-500 to-rose-600'
      },
      {
        icon: Heart,
        title: 'Témoignages',
        description: 'Histoires de réussite et parcours',
        link: '/formations#témoignages',
        color: 'from-red-500 via-rose-500 to-pink-600'
      },
      {
        icon: Mail,
        title: 'Contact & Support',
        description: 'Nous contacter pour toute demande',
        link: '/contact',
        color: 'from-slate-600 via-blue-600 to-indigo-700'
      }
    ]
  };

  const categories = [
    { id: 'principal', label: 'Principal', icon: Target },
    { id: 'expertise', label: 'Nos Expertises', icon: Lightbulb },
    { id: 'reseau', label: 'Réseau & Impact', icon: Globe },
    { id: 'ressources', label: 'Ressources', icon: FileText }
  ];

  const currentSections = menuCategories[activeCategory as keyof typeof menuCategories] || [];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        ref={menuRef}
        className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl 
                   bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                   rounded-2xl shadow-2xl z-50 overflow-hidden
                   animate-scale-in border border-white/10"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-aii-primary to-aii-secondary p-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Académie Internationale Interuniversitaire
              </h2>
              <p className="text-white/80 text-sm">
                Excellence académique et coopération scientifique en Afrique
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/10 
                       p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Categories Tabs */}
        <div className="lg:hidden bg-slate-800/30 border-t border-slate-700/50 px-4 py-3 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${activeCategory === cat.id 
                      ? 'bg-aii-primary text-white shadow-lg' 
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'}`}
                >
                  <CatIcon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area with Desktop Sidebar */}
        <div className="flex">
          {/* Desktop Categories Sidebar */}
          <div className="hidden lg:block w-56 bg-slate-800/30 border-r border-slate-700/50 p-4">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Catégories
            </h3>
            <nav className="space-y-1">
              {categories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${activeCategory === cat.id 
                        ? 'bg-aii-primary text-white shadow-lg scale-105' 
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}`}
                  >
                    <CatIcon className="w-5 h-5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content Grid */}
          <div className="flex-1 p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {currentSections.map((section: MenuSection, index: number) => {
                const Icon = section.icon;
                const hasSubMenu = section.subMenu && section.subMenu.length > 0;
                const isExpanded = expandedSection === section.title;
                
                return (
                  <div key={index} className="group relative">
                    {/* Main Card */}
                    <div
                      className="bg-slate-800/50 backdrop-blur-sm 
                               border border-slate-700/50 rounded-xl p-5
                               hover:bg-slate-700/50 hover:border-slate-600
                               transition-all duration-300 hover:scale-105
                               hover:shadow-xl hover:shadow-aii-primary/20"
                    >
                      <a href={section.link} onClick={onClose} className="block">
                        {/* Icon with gradient */}
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color}
                                      flex items-center justify-center mb-4
                                      group-hover:scale-110 transition-transform duration-300
                                      shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Title & Description */}
                        <h3 className="text-white font-semibold text-base mb-2 
                                     group-hover:text-aii-secondary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-3">
                          {section.description}
                        </p>
                      </a>

                      {/* SubMenu Toggle for Mobile */}
                      {hasSubMenu && (
                        <button
                          onClick={() => setExpandedSection(isExpanded ? null : section.title)}
                          className="lg:hidden flex items-center justify-between w-full mt-3 pt-3 border-t border-slate-700/50
                                   text-aii-secondary text-sm font-medium hover:text-aii-primary transition-colors"
                        >
                          <span>Voir les détails</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      )}

                      {/* Hover arrow for desktop */}
                      <div className="hidden lg:block absolute bottom-4 right-4 opacity-0 group-hover:opacity-100
                                    transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="w-4 h-4 text-aii-secondary" />
                      </div>
                    </div>

                    {/* SubMenu Dropdown (Mobile) */}
                    {hasSubMenu && isExpanded && section.subMenu && (
                      <div className="lg:hidden mt-2 bg-slate-800/90 border border-slate-700/50 rounded-lg p-3 space-y-2">
                        {section.subMenu.map((subItem: SubMenuItem, subIndex: number) => (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            onClick={onClose}
                            className="flex items-center space-x-2 text-slate-300 hover:text-white text-sm py-2 px-3
                                     hover:bg-slate-700/50 rounded transition-colors"
                          >
                            <ChevronRight className="w-3 h-3" />
                            <span>{subItem.title}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* SubMenu Hover (Desktop) */}
                    {hasSubMenu && section.subMenu && (
                      <div className="hidden lg:block absolute left-full top-0 ml-2 w-64 
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-300 z-10">
                        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 shadow-2xl">
                          <h4 className="text-white font-medium text-sm mb-3">
                            {section.title}
                          </h4>
                          <div className="space-y-2">
                            {section.subMenu.map((subItem: SubMenuItem, subIndex: number) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                onClick={onClose}
                                className="flex items-center space-x-2 text-slate-300 hover:text-aii-secondary text-sm py-2 px-2
                                         hover:bg-slate-700/50 rounded transition-all hover:translate-x-1"
                              >
                                <ChevronRight className="w-3 h-3" />
                                <span>{subItem.title}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50 p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-medium mb-1">
                Besoin d'aide ou d'informations ?
              </p>
              <p className="text-slate-400 text-sm">
                Notre équipe est à votre disposition
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 
                         bg-gradient-to-r from-aii-primary to-aii-secondary
                         text-white rounded-lg font-medium
                         hover:shadow-lg hover:shadow-aii-primary/30
                         transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Nous contacter
              </a>
              
              <a
                href="/about"
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 
                         bg-slate-700 text-white rounded-lg font-medium
                         hover:bg-slate-600 transition-all duration-300
                         border border-slate-600"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.7);
        }
      `}</style>
    </>
  );
};

export default MegaMenuModern;
