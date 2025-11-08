import { useState } from 'react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [activeTab, setActiveTab] = useState('Notre travail');

  if (!isOpen) return null;

  const tabs = [
    'Actualités et événements',
    'Qui sommes-nous',
    'Notre travail',
    'Où nous travaillons',
    'Pour les États membres',
    'Ressources',
    'Tous les sites web de l\'AII'
  ];

  // Content for "Notre travail" tab
  const notreTravailContent = {
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
      'Lieux et appellations',
      'Laboratoire d\'idées'
    ],
    'Défis majeurs': [
      'Les futurs de l\'éducation',
      'L\'esprit de Moscou',
      'Éthique de l\'IA',
      'Biodiversité',
      'Tous les défis majeurs'
    ]
  };

  // Content for "Qui sommes-nous" tab
  const quiSommesNousContent = {
    'À propos': [
      'L\'AII en bref',
      'Notre histoire',
      'Données de référence',
      'Laboratoire d\'idées',
      'Rendez-nous visite'
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
  };

  const getContent = () => {
    if (activeTab === 'Notre travail') return notreTravailContent;
    if (activeTab === 'Qui sommes-nous') return quiSommesNousContent;
    return notreTravailContent; // default
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-50 bg-[#0064B0] overflow-auto">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 border-2 border-white px-3 py-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 20h2V10H2v10zm4 0h2V4H6v16zm4 0h2V14h-2v6zm4 0h2V8h-2v12zm4 0h2V12h-2v8z"/>
                <rect x="2" y="2" width="20" height="2"/>
              </svg>
              <div className="text-lg font-bold tracking-wider text-white">AII</div>
            </div>

            {/* Search and Close */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Chercher dans tout l'AII"
                  className="bg-white/20 border border-white/30 text-white placeholder-white/70 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 w-80 text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <button 
                onClick={onClose}
                className="text-white hover:bg-white/10 p-2 rounded transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(content).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/20">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/90 hover:text-white text-sm transition-colors leading-relaxed block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
