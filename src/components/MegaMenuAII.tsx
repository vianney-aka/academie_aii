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
  Laptop,
  Video,
  FileCheck,
  Calendar,
  TrendingUp,
  Heart,
  Sparkles,
  ChevronRight,
  PlayCircle,
  Download,
  Clock
} from 'lucide-react';

interface MegaMenuAIIProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string; // 'formations' | 'elearning' | 'general'
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

const MegaMenuAII = ({ isOpen, onClose, activeSection = 'general' }: MegaMenuAIIProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('principal');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Contenu spécifique pour FORMATIONS
  const formationsContent = {
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
        title: 'Formations Certifiantes',
        description: '3 parcours professionnels accrédités',
        link: '/formations',
        color: 'from-purple-500 via-purple-600 to-pink-600',
        subMenu: [
          { title: 'Leadership académique', link: '/formations#leadership' },
          { title: 'Recherche & Innovation', link: '/formations#recherche' },
          { title: 'Pédagogie numérique', link: '/formations#pedagogie' }
        ]
      },
      {
        icon: Calendar,
        title: 'Séminaires Intensifs',
        description: 'Formations courtes et pratiques',
        link: '/seminaires',
        color: 'from-amber-500 via-orange-500 to-red-500',
        subMenu: [
          { title: 'Séminaires à venir', link: '/seminaires#prochains' },
          { title: 'Archives & Replays', link: '/seminaires#archives' },
          { title: 'Inscription séminaires', link: '/seminaires#inscription' }
        ]
      },
      {
        icon: Users,
        title: 'Formation Continue',
        description: 'Développement professionnel',
        link: '/formation-continue',
        color: 'from-green-500 via-emerald-500 to-teal-600'
      }
    ],
    parcours: [
      {
        icon: Target,
        title: 'Parcours Débutant',
        description: 'Initiation aux méthodologies académiques',
        link: '/formations/debutant',
        color: 'from-sky-500 via-blue-500 to-indigo-600'
      },
      {
        icon: TrendingUp,
        title: 'Parcours Avancé',
        description: 'Expertise et spécialisation',
        link: '/formations/avance',
        color: 'from-green-600 via-lime-500 to-emerald-600'
      },
      {
        icon: Award,
        title: 'Parcours Expert',
        description: 'Masterclasses et certifications',
        link: '/formations/expert',
        color: 'from-pink-500 via-rose-500 to-red-500'
      },
      {
        icon: Sparkles,
        title: 'Programmes sur Mesure',
        description: 'Formations personnalisées',
        link: '/formations/sur-mesure',
        color: 'from-purple-500 via-violet-500 to-purple-600'
      }
    ],
    ressources: [
      {
        icon: FileText,
        title: 'Supports de Cours',
        description: 'Documents et présentations',
        link: '/formations/supports',
        color: 'from-indigo-500 via-blue-500 to-cyan-500'
      },
      {
        icon: Video,
        title: 'Vidéothèque',
        description: 'Replays des formations',
        link: '/formations/videos',
        color: 'from-purple-500 via-violet-500 to-purple-600'
      },
      {
        icon: FileCheck,
        title: 'Certifications',
        description: 'Diplômes et attestations',
        link: '/formations/certifications',
        color: 'from-green-500 via-emerald-500 to-teal-600'
      },
      {
        icon: Heart,
        title: 'Témoignages Alumni',
        description: 'Parcours de réussite',
        link: '/formations/temoignages',
        color: 'from-red-500 via-rose-500 to-pink-600'
      }
    ]
  };

  // Contenu spécifique pour E-LEARNING
  const elearningContent = {
    principal: [
      {
        icon: Laptop,
        title: 'Plateforme E-learning',
        description: 'Accès à tous vos cours en ligne',
        link: '/elearning/plateforme',
        color: 'from-blue-500 via-blue-600 to-indigo-600',
        subMenu: [
          { title: 'Mon tableau de bord', link: '/elearning/dashboard' },
          { title: 'Mes cours en cours', link: '/elearning/mes-cours' },
          { title: 'Mes certificats', link: '/elearning/certificats' }
        ]
      },
      {
        icon: PlayCircle,
        title: 'Cours Vidéo',
        description: 'Bibliothèque de +200 vidéos',
        link: '/elearning/videos',
        color: 'from-purple-500 via-purple-600 to-pink-600'
      },
      {
        icon: BookOpen,
        title: 'Modules Interactifs',
        description: 'Apprentissage par la pratique',
        link: '/elearning/modules',
        color: 'from-amber-500 via-orange-500 to-red-500'
      },
      {
        icon: FileCheck,
        title: 'Quiz & Évaluations',
        description: 'Testez vos connaissances',
        link: '/elearning/quiz',
        color: 'from-green-500 via-emerald-500 to-teal-600'
      }
    ],
    domaines: [
      {
        icon: Lightbulb,
        title: 'Recherche Scientifique',
        description: 'Méthodologie et publications',
        link: '/elearning/recherche',
        color: 'from-sky-500 via-blue-500 to-indigo-600'
      },
      {
        icon: Users,
        title: 'Management Académique',
        description: 'Leadership et gestion',
        link: '/elearning/management',
        color: 'from-green-600 via-lime-500 to-emerald-600'
      },
      {
        icon: Globe,
        title: 'Coopération Internationale',
        description: 'Partenariats et mobilité',
        link: '/elearning/cooperation',
        color: 'from-pink-500 via-rose-500 to-red-500'
      },
      {
        icon: Building2,
        title: 'Innovation Pédagogique',
        description: 'Nouvelles méthodes d\'enseignement',
        link: '/elearning/innovation',
        color: 'from-cyan-500 via-blue-500 to-purple-600'
      }
    ],
    outils: [
      {
        icon: Download,
        title: 'Ressources Téléchargeables',
        description: 'PDF, templates, outils',
        link: '/elearning/ressources',
        color: 'from-indigo-500 via-blue-500 to-cyan-500'
      },
      {
        icon: Clock,
        title: 'Planning des Webinaires',
        description: 'Sessions en direct',
        link: '/elearning/webinaires',
        color: 'from-purple-500 via-violet-500 to-purple-600'
      },
      {
        icon: Network,
        title: 'Forum Communauté',
        description: 'Échanges entre apprenants',
        link: '/elearning/forum',
        color: 'from-fuchsia-500 via-pink-500 to-rose-600'
      },
      {
        icon: Mail,
        title: 'Support & Tutorat',
        description: 'Aide personnalisée',
        link: '/elearning/support',
        color: 'from-slate-600 via-blue-600 to-indigo-700'
      }
    ]
  };

  // Contenu général (toutes sections)
  const generalContent = {
    principal: [
      {
        icon: GraduationCap,
        title: 'Programme VEA',
        description: 'Valorisation de l\'Excellence Africaine',
        link: '/programme-vea',
        color: 'from-blue-500 via-blue-600 to-indigo-600'
      },
      {
        icon: BookOpen,
        title: 'Toutes les Formations',
        description: 'Catalogue complet',
        link: '/formations',
        color: 'from-purple-500 via-purple-600 to-pink-600'
      },
      {
        icon: Laptop,
        title: 'E-learning',
        description: 'Plateforme de cours en ligne',
        link: '/elearning',
        color: 'from-amber-500 via-orange-500 to-red-500'
      },
      {
        icon: Users,
        title: 'Gouvernance',
        description: 'Structure et organes',
        link: '/gouvernance',
        color: 'from-green-500 via-emerald-500 to-teal-600'
      }
    ],
    reseau: [
      {
        icon: Globe,
        title: 'Qui sommes-nous',
        description: 'Notre histoire et mission',
        link: '/qui-sommes-nous',
        color: 'from-blue-600 via-cyan-500 to-teal-500'
      },
      {
        icon: Network,
        title: 'Réseau Partenaires',
        description: '50+ universités africaines',
        link: '/about#reseau',
        color: 'from-orange-500 via-red-500 to-pink-600'
      },
      {
        icon: Award,
        title: 'Notre Impact',
        description: '1200+ bénéficiaires',
        link: '/about#impact',
        color: 'from-yellow-500 via-amber-500 to-orange-600'
      },
      {
        icon: TrendingUp,
        title: 'Résultats',
        description: 'Statistiques et indicateurs',
        link: '/about#statistiques',
        color: 'from-emerald-500 via-green-500 to-teal-600'
      }
    ],
    contact: [
      {
        icon: Mail,
        title: 'Nous Contacter',
        description: 'Formulaire de contact',
        link: '/contact',
        color: 'from-indigo-500 via-blue-500 to-cyan-500'
      },
      {
        icon: FileText,
        title: 'Documentation',
        description: 'Guides et ressources',
        link: '/documentation',
        color: 'from-purple-500 via-violet-500 to-purple-600'
      }
    ]
  };

  // Sélection du contenu selon la section active
  const getMenuContent = () => {
    switch (activeSection) {
      case 'formations':
        return formationsContent;
      case 'elearning':
        return elearningContent;
      default:
        return generalContent;
    }
  };

  const menuCategories = getMenuContent();

  const categories = activeSection === 'formations' 
    ? [
        { id: 'principal', label: 'Nos Formations', icon: GraduationCap },
        { id: 'parcours', label: 'Parcours', icon: Target },
        { id: 'ressources', label: 'Ressources', icon: FileText }
      ]
    : activeSection === 'elearning'
    ? [
        { id: 'principal', label: 'Plateforme', icon: Laptop },
        { id: 'domaines', label: 'Domaines', icon: Lightbulb },
        { id: 'outils', label: 'Outils', icon: FileText }
      ]
    : [
        { id: 'principal', label: 'Principal', icon: Target },
        { id: 'reseau', label: 'Réseau & Impact', icon: Globe },
        { id: 'contact', label: 'Contact', icon: Mail }
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
      // Reset to first category when opening
      setActiveCategory(categories[0].id);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, categories]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 
                   animate-[fadeIn_0.3s_ease-out]"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        ref={menuRef}
        className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl 
                   bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                   rounded-2xl shadow-2xl z-50 overflow-hidden
                   animate-[slideUp_0.4s_ease-out] border border-white/10"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-aii-primary via-blue-600 to-aii-secondary p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative flex items-center justify-between animate-[fadeIn_0.5s_ease-out_0.2s_both]">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {activeSection === 'formations' ? 'Nos Formations' :
                 activeSection === 'elearning' ? 'Catalogue E-learning' :
                 'Académie Internationale Interuniversitaire'}
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                {activeSection === 'formations' ? 'Parcours certifiants et formations continues' :
                 activeSection === 'elearning' ? 'Apprenez à votre rythme, où que vous soyez' :
                 'Excellence académique et coopération scientifique'}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/20 hover:rotate-90
                       p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Categories Tabs */}
        <div className="lg:hidden bg-slate-800/30 border-t border-slate-700/50 px-4 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-3 min-w-max">
            {categories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium 
                    transition-all duration-300 whitespace-nowrap
                    animate-[slideIn_0.3s_ease-out_${idx * 0.1}s_both]
                    ${activeCategory === cat.id 
                      ? 'bg-aii-primary text-white shadow-lg shadow-aii-primary/30 scale-105' 
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 active:scale-95'}`}
                >
                  <CatIcon className="w-5 h-5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area with Desktop Sidebar */}
        <div className="flex">
          {/* Desktop Categories Sidebar */}
          <div className="hidden lg:block w-64 bg-slate-800/30 border-r border-slate-700/50 p-6">
            <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-aii-primary mr-3"></span>
              Catégories
            </h3>
            <nav className="space-y-2">
              {categories.map((cat, idx) => {
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center space-x-3 px-5 py-4 rounded-xl text-sm font-medium 
                      transition-all duration-300 group
                      animate-[slideIn_0.3s_ease-out_${idx * 0.1}s_both]
                      ${activeCategory === cat.id 
                        ? 'bg-gradient-to-r from-aii-primary to-blue-600 text-white shadow-lg shadow-aii-primary/30 scale-105' 
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:translate-x-1'}`}
                  >
                    <CatIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>{cat.label}</span>
                    {activeCategory === cat.id && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content Grid */}
          <div className="flex-1 p-6 md:p-8 max-h-[65vh] overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {currentSections.map((section: MenuSection, index: number) => {
                const Icon = section.icon;
                const hasSubMenu = section.subMenu && section.subMenu.length > 0;
                const isExpanded = expandedSection === section.title;
                
                return (
                  <div 
                    key={index} 
                    className="group relative
                             animate-[fadeIn_0.5s_ease-out_${index * 0.05}s_both]"
                  >
                    {/* Main Card */}
                    <div
                      className="bg-slate-800/50 backdrop-blur-sm 
                               border border-slate-700/50 rounded-xl p-6
                               hover:bg-slate-700/60 hover:border-slate-600/80
                               transition-all duration-300 hover:scale-[1.03]
                               hover:shadow-2xl hover:shadow-aii-primary/30
                               cursor-pointer"
                    >
                      <a href={section.link} onClick={onClose} className="block">
                        {/* Icon with gradient */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color}
                                      flex items-center justify-center mb-4
                                      group-hover:scale-110 group-hover:rotate-3 
                                      transition-all duration-300
                                      shadow-lg group-hover:shadow-2xl`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Title & Description */}
                        <h3 className="text-white font-semibold text-base md:text-lg mb-2 
                                     group-hover:text-aii-secondary transition-colors leading-tight">
                          {section.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
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
                      <div className="hidden lg:flex absolute bottom-5 right-5 opacity-0 group-hover:opacity-100
                                    transition-all duration-300 transform translate-x-4 group-hover:translate-x-0
                                    items-center justify-center w-8 h-8 bg-aii-secondary rounded-full">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* SubMenu Dropdown (Mobile) */}
                    {hasSubMenu && isExpanded && section.subMenu && (
                      <div className="lg:hidden mt-3 bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 
                                    rounded-xl p-4 space-y-2 animate-[slideDown_0.3s_ease-out]">
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
                      <div className="hidden lg:block absolute left-full top-0 ml-3 w-72 
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-300 z-10
                                    transform translate-x-2 group-hover:translate-x-0">
                        <div className="bg-slate-800/95 backdrop-blur-lg border border-slate-700/50 
                                    rounded-xl p-5 shadow-2xl">
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
        <div className="bg-slate-800/90 backdrop-blur-sm border-t border-slate-700/50 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center sm:text-left animate-[fadeIn_0.5s_ease-out_0.6s_both]">
              <p className="text-white font-semibold text-base md:text-lg mb-1">
                Besoin d'aide ou d'informations ?
              </p>
              <p className="text-slate-300 text-sm md:text-base">
                Notre équipe est à votre disposition pour vous accompagner
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto
                          animate-[fadeIn_0.5s_ease-out_0.7s_both]">
              <a
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto
                         bg-gradient-to-r from-aii-primary to-aii-secondary
                         text-white rounded-xl font-medium
                         hover:shadow-xl hover:shadow-aii-primary/40
                         transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Nous contacter
              </a>
              
              <a
                href="/about"
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto
                         bg-slate-700/80 text-white rounded-xl font-medium
                         hover:bg-slate-600 transition-all duration-300
                         border border-slate-600/50 hover:border-slate-500
                         hover:scale-105 active:scale-95"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        /* Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #0064B0, #0095D9);
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0095D9, #0064B0);
        }
        
        /* Hide scrollbar for mobile tabs */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default MegaMenuAII;
