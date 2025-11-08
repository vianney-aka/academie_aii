// Configuration et données centralisées du site AII

export const SITE_CONFIG = {
  title: 'AII',
  description: 'Académie Internationale Interuniversitaire - Promouvoir l\'Excellence Académique et la Coopération Scientifique Mondiale',
  url: 'http://localhost:5174',
};

export const NAVIGATION_LINKS = [
  { label: 'Programme VEA', href: '/programme-vea' },
  { label: 'Gouvernance', href: '/gouvernance' },
  { label: 'Formations', href: '/formations' },
  { label: 'Recherche', href: '/recherche' },
  { label: 'À propos', href: '/a-propos' },
];

export const FOOTER_LINKS = {
  about: [
    { label: 'Mission', href: '#mission' },
    { label: 'Gouvernance', href: '#gouvernance' },
    { label: 'Partenaires', href: '#partenaires' },
    { label: 'Rejoindre l\'AII', href: '#rejoindre' },
  ],
  themes: [
    { label: 'Programme VEA', href: '#vea' },
    { label: 'Formation Continue', href: '#formation' },
    { label: 'Recherche', href: '#recherche' },
    { label: 'Innovation', href: '#innovation' },
  ],
  resources: [
    { label: 'Publications Scientifiques', href: '#publications' },
    { label: 'Bibliothèque Numérique', href: '#bibliotheque' },
    { label: 'Documents Officiels', href: '#documents' },
    { label: 'Rapports d\'Activité', href: '#rapports' },
  ],
  contact: [
    { label: 'Nous contacter', href: '#contact' },
    { label: 'Adhésion', href: '#adhesion' },
  ],
};

export const SOCIAL_LINKS = [
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/aii',
    icon: 'facebook'
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/aii',
    icon: 'twitter'
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/aii',
    icon: 'instagram'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/aii',
    icon: 'linkedin'
  },
];

export const STATS = [
  {
    number: '50+',
    label: 'Universités Partenaires',
    color: 'bg-blue-900',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop'
  },
  {
    number: '15',
    label: 'Pays Représentés',
    color: 'bg-purple-600',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop'
  },
  {
    number: '1200+',
    label: 'Bénéficiaires Formés',
    color: 'bg-blue-500',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop'
  },
  {
    number: '200+',
    label: 'Projets Collaboratifs',
    color: 'bg-purple-800',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop'
  }
];

export const HERO_CONTENT = {
  title: "Bâtir l'Avenir de l'Enseignement Supérieur en Afrique",
  description: "L'Assemblée Générale de juillet 2025 marque une étape décisive : adoption de la stratégie 2025-2030, lancement du Programme VEA et renforcement de notre réseau de 50 universités partenaires à travers 15 pays. Ensemble, cultivons l'excellence académique et l'innovation pédagogique.",
  buttonText: "Découvrir notre vision",
  backgroundImage: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920&h=1080&fit=crop"
};

export const CONTENT_SECTIONS = [
  {
    title: "Programme VEA : Valorisation de l'Excellence Africaine",
    description: "Initiative phare de l'AII, le programme VEA incarne notre engagement envers l'excellence académique africaine. À travers un réseau dynamique d'universités partenaires, nous développons des formations innovantes, facilitons les mobilités académiques et valorisons les talents du continent et de la diaspora. VEA, c'est la reconnaissance et la célébration des compétences africaines au service du développement universitaire mondial.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    imagePosition: "left" as const,
    buttonText: "Explorer le programme VEA",
  },
  {
    title: "Une Gouvernance Démocratique et Transparente",
    description: "L'AII repose sur des principes de gouvernance démocratique et participative. Nos statuts et règlement intérieur, adoptés lors de l'Assemblée Générale, définissent précisément les organes de décision, les procédures et les mécanismes de contrôle. Cette architecture institutionnelle garantit la transparence de nos actions, l'implication de tous les membres et la pérennité de notre mission académique au service de l'excellence.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    imagePosition: "right" as const,
    buttonText: "Découvrir notre organisation",
  },
  {
    title: "Notre Mission : Excellence, Innovation, Coopération",
    description: "L'Académie Internationale Interuniversitaire se consacre à l'excellence académique et à l'innovation pédagogique dans l'enseignement supérieur. Notre mission s'articule autour de trois piliers : le renforcement des capacités universitaires par la formation continue, la promotion de la recherche collaborative internationale et le développement de programmes adaptés aux enjeux contemporains. Nous répondons aux défis de l'Afrique tout en nous inscrivant dans une dynamique mondiale d'excellence scientifique.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    imagePosition: "left" as const,
    buttonText: "En savoir plus sur l'AII",
  },
  {
    title: "Recherche et Production Scientifique",
    description: "La production scientifique de l'AII contribue significativement au débat académique international. Nous publions régulièrement travaux de recherche, rapports d'activité, études prospectives et analyses critiques sur les transformations de l'enseignement supérieur. Nos publications valorisent les bonnes pratiques, diffusent les résultats de recherches collaboratives et alimentent la réflexion sur les politiques universitaires en Afrique et dans le monde. Un engagement fort pour une science ouverte et accessible.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    imagePosition: "right" as const,
    buttonText: "Accéder à nos publications",
  }
];

export const NEWS_ITEMS = [
  {
    title: "Déploiement du Programme VEA : 8 pays, 15 universités partenaires",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    date: "15 Oct 2025"
  },
  {
    title: "Signature de conventions avec 10 institutions d'excellence africaines",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    date: "12 Oct 2025"
  },
  {
    title: "Lancement de 3 parcours certifiants pour enseignants-chercheurs",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
    date: "08 Oct 2025"
  },
  {
    title: "50 projets de recherche collaborative retenus pour financement",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop",
    date: "05 Oct 2025"
  }
];

export const ACTIVITIES_ITEMS = [
  {
    title: "2ème Congrès International AII - Dakar, 10-12 Décembre 2025",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop"
  },
  {
    title: "Atelier : Pédagogie Active et Numérique - 15-17 Novembre 2025",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop"
  },
  {
    title: "Forum Doctoral : Enjeux de la Recherche en Afrique - 5-7 Décembre",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
  },
  {
    title: "Journée Scientifique Interuniversitaire - 20 Novembre 2025",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop"
  }
];
