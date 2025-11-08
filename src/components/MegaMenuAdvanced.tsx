import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Search, X, Globe, Grid3X3 } from 'lucide-react';

interface MegaMenuAdvancedProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenuAdvanced = ({ isOpen, onClose }: MegaMenuAdvancedProps) => {
  const [activeTab, setActiveTab] = useState('Notre travail');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  // Structure complète du menu AII
  const menuStructure = {
    'Actualités et événements': {
      'Calendrier des événements': [
        'Réunions statutaires',
        'Organes directeurs',
        'Réunions des États membres',
        'Événements culturels au Siège',
        'Les commémorations de l\'AII'
      ],
      'Articles': [
        'Actualités',
        'Témoignages',
        'Communiqués de presse',
        'International Days and Years'
      ]
    },
    'Qui sommes-nous': {
      'À propos': [
        'L\'AII en bref',
        'Notre histoire',
        'Données de référence',
        'Laboratoire d\'idées',
        'Rendez nous visite'
      ],
      'Gouvernance': [
        'Portail des États membres',
        'Conférence Générale',
        'Conseil Exécutif',
        'Directrice générale',
        'Conseil de direction stratégique',
        'Bureau des normes internationales et affaires juridiques',
        'Textes fondamentaux'
      ],
      'Transparence financière': [
        'Portail de données',
        'Stratégie et budget',
        'Service d\'évaluation et d\'audit',
        'Réforme / Transformation stratégique',
        'Besoins de financement et données',
        'Règlement financier',
        'Accès à l\'information'
      ],
      'Réseaux': [
        'Bureaux hors-Siège',
        'ONGs et fondations',
        'Réseau des universités partenaires de l\'AII',
        'Unitwin',
        'Ambassadeurs de l\'AII',
        'Instituts et centres'
      ],
      'Participez': [
        'Parlez-en',
        'Faire un don',
        'Devenir partenaire',
        'Carrières à l\'AII',
        'S\'abonner à nos lettres d\'information'
      ]
    },
    'Notre travail': {
      'Notre expertise': [
        'Éducation',
        'Sciences naturelles',
        'Science de l\'océan',
        'Sciences sociales et humaines',
        'Culture',
        'Communication et information'
      ],
      'Priorités globales': [
        'Égalité des genres',
        'Priorité Afrique'
      ],
      'Notre impact': [
        'Normes internationales et textes juridiques',
        'Outils de coopération',
        'Listes et appellations',
        'Laboratoire d\'idées'
      ],
      'Défis majeurs': [
        'Les futurs de l\'éducation',
        'L\'esprit de Mosul',
        'Éthique de l\'IA',
        'Biodiversité',
        'Tous les défis majeurs'
      ]
    },
    'Où nous travaillons': {
      'Listes et désignations de l\'AII': [
        'Villes Créatives',
        'Réserves de biosphère',
        'Mémoire du monde',
        'Patrimoine Culturel Immatériel',
        'Géoparcs mondiaux AII',
        'Patrimoine Mondial',
        'Prix'
      ],
      'L\'AII dans le Monde': [
        'États Membres',
        'Bureaux hors-Siège',
        'Réseaux'
      ]
    },
    'Pour les États membres': {
      'Gouvernance': [
        'Conseil exécutif',
        'Conférence générale',
        'Comité du siège',
        'Profils des pays',
        'Portail des États membres',
        'Conseil de direction stratégique'
      ],
      'Calendrier des événements': [
        'Réunions statutaires',
        'Tous les événements',
        'Organes directeurs',
        'Réunions des États membres',
        'Événements culturels au Siège',
        'Les commémorations de l\'UNESCO'
      ],
      'Activités récentes': [
        'Actualités',
        'Lettres de créances',
        'Appels'
      ],
      'Ressources': [
        'Textes fondamentaux',
        'Répartition géographique',
        'Extranet',
        'Conventions de l\'AII',
        'Notes azur',
        'Comité du Siège',
        'Répertoires',
        'Portail de données'
      ],
      'Documents statutaires': [
        'Comité du Siège',
        'Documents de la Conférence générale',
        'Documents du Conseil exécutif',
        'Stratégie à moyen terme pour 2022-2029 (41 C/4)',
        'Programme et budget approuvés 2022-2025'
      ]
    },
    'Ressources': {
      'Documents': [
        'UNESDOC - Bibliothèque Numérique',
        'Collection des Œuvres d\'art',
        'Archives Multimedia',
        'Archives',
        'Courrier de l\'AII',
        'Galerie Photo Officielle',
        'Textes fondamentaux'
      ],
      'Bases de données et statistiques': [
        'Portail de données',
        'Données de référence',
        'Observatoire des journalistes tués',
        'Institut de Statistique de l\'AII',
        'World Inequality Database on Education'
      ],
      'Salle de classe AII': [
        'AII Campus',
        'Cours en ligne',
        'Ressources pédagogiques'
      ],
      'AII Shop': [],
      'Careers': [
        'Job openings',
        'Internships',
        'Volunteer programmes'
      ]
    }
  };

  const websitesList = [
    { letter: 'C', name: 'Convention du patrimoine mondial', link: 'https://whc.unesco.org/fr' },
    { letter: 'C', name: 'Core Data Portal', link: 'https://core.unesco.org/fr' },
    { letter: 'D', name: 'Diversité des expressions culturelles', link: '#' },
    { letter: 'I', name: 'Institut de l\'AII pour l\'apprentissage', link: '#' },
    { letter: 'I', name: 'Institut international de planification', link: '#' },
    { letter: 'L', name: 'Le Courrier de l\'AII', link: '#' },
    { letter: 'P', name: 'Patrimoine culturel immatériel', link: 'https://ich.unesco.org/fr' },
    { letter: 'R', name: 'Repenser les politiques créatives', link: '#' }
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const getContent = () => {
    if (activeTab === 'Tous les sites web de l\'AII') {
      return null; // Handled separately
    }
    return menuStructure[activeTab as keyof typeof menuStructure] || {};
  };

  if (!isOpen) return null;

  const content = getContent();
  const tabs = Object.keys(menuStructure);
  tabs.push('Tous les sites web de l\'AII');

  return (
    <div className="fixed inset-0 z-50 bg-unesco-primary overflow-hidden" ref={menuRef}>
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="border-b border-white/20 bg-unesco-primary sticky top-0 z-10">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-white">
                  <Grid3X3 className="w-5 h-5" />
                  <span className="font-medium">Liens utiles</span>
                </div>
                <div className="flex items-center space-x-3 border-l border-white/30 pl-6">
                  <img src="/logo.png" alt="AII" className="h-10 brightness-0 invert" />
                  <span className="text-white font-bold text-lg">AII</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-6">
                <button className="text-white text-sm hover:underline">
                  go to www.aii.org
                </button>
                
                {/* Search */}
                <div className="relative hidden lg:block">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Chercher dans tout l'AII"
                    className="bg-white/10 border border-white/20 text-white placeholder-white/60 
                             px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 
                             focus:bg-white/20 w-96 text-sm transition-all"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
                </div>

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200
                           flex items-center space-x-2 border border-white/20"
                >
                  <span className="text-sm hidden md:inline">Fermer</span>
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-white/20 bg-unesco-primary/95 sticky top-[72px] z-10">
          <div className="max-w-[1400px] mx-auto px-6">
            <nav className="flex items-center overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 text-[13px] font-medium whitespace-nowrap transition-all relative
                    ${activeTab === tab
                      ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : 'text-white/70 hover:text-white'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          {activeTab === 'Tous les sites web de l\'AII' ? (
            /* Websites List */
            <div>
              <h2 className="text-white text-2xl font-bold mb-8">
                Tous les sites web de l'AII
              </h2>
              
              {/* Search for websites */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Rechercher un site ou une entité de l'AII"
                  className="w-full md:w-96 bg-white/10 border border-white/20 text-white 
                           placeholder-white/60 px-4 py-3 rounded-lg focus:outline-none 
                           focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all"
                />
              </div>

              {/* Websites Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {websitesList.map((site, index) => (
                  <a
                    key={index}
                    href={site.link}
                    className="bg-white/10 border border-white/20 rounded-lg p-4 
                             hover:bg-white/20 hover:border-white/30 transition-all group"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-white/40 text-xs font-bold bg-white/10 
                                     w-8 h-8 rounded-full flex items-center justify-center">
                        {site.letter}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm group-hover:underline">
                          {site.name}
                        </h4>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            /* Regular Menu Content */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8">
              {content && Object.entries(content).map(([category, items]) => (
                <div key={category}>
                  <button
                    onClick={() => toggleExpanded(category)}
                    className="flex items-center justify-between w-full text-left group mb-4"
                  >
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {category}
                    </h3>
                    <ChevronDown 
                      className={`w-4 h-4 text-white/60 transition-transform md:hidden
                        ${expandedItems.includes(category) ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <div className={`space-y-2.5 ${
                    expandedItems.includes(category) || window.innerWidth >= 768 ? 'block' : 'hidden'
                  }`}>
                    {items.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group flex items-center text-white/80 hover:text-white text-sm 
                                 transition-all hover:translate-x-1"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="border-t border-white/20 bg-unesco-primary/50 mt-12">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <button className="text-white/60 hover:text-white text-sm transition">
                  <Globe className="w-4 h-4 inline mr-2" />
                  Français
                </button>
                <span className="text-white/40 text-xs">
                  © AII 2025
                </span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white/60 hover:text-white text-sm transition">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition">
                  Conditions d'utilisation
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuAdvanced;
