interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const HighlightSection = () => {
  const highlights: HighlightItem[] = [
    {
      title: "Programme VEA",
      description: "Valorisation de l'Excellence Académique africaine",
      icon: "🎓",
      link: "#vea"
    },
    {
      title: "Formation Continue",
      description: "Programmes certifiants pour enseignants-chercheurs",
      icon: "📚",
      link: "#formation"
    },
    {
      title: "Recherche Collaborative",
      description: "Projets interuniversitaires et publications scientifiques",
      icon: "🔬",
      link: "#recherche"
    },
    {
      title: "Réseau Universitaire",
      description: "Échanges académiques et coopération internationale",
      icon: "🌐",
      link: "#reseau"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos domaines d'action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'AII oeuvre pour l'excellence académique et le développement des universités africaines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0095D9] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              <a 
                href={item.link}
                className="inline-flex items-center text-[#0095D9] font-semibold group-hover:translate-x-2 transition-transform"
              >
                <span>En savoir plus</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
