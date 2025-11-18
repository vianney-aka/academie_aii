import { Calendar, Clock, MapPin, Users, Video, ChevronRight, Download, BookOpen } from 'lucide-react';

const Seminaires = () => {
  const upcomingSeminars = [
    {
      title: "Leadership Académique Transformationnel",
      date: "15-17 Janvier 2026",
      location: "Dakar, Sénégal",
      format: "Hybride",
      participants: "40 places",
      duration: "3 jours",
      description: "Formation intensive sur les compétences de leadership pour présidents d'université et directeurs académiques.",
      topics: ["Gouvernance stratégique", "Management du changement", "Vision institutionnelle"],
      status: "Inscriptions ouvertes",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
    {
      title: "Innovation Pédagogique et Outils Numériques",
      date: "12-14 Février 2026",
      location: "Abidjan, Côte d'Ivoire",
      format: "Présentiel",
      participants: "35 places",
      duration: "3 jours",
      description: "Découverte des dernières innovations en pédagogie universitaire et des outils numériques pour l'enseignement.",
      topics: ["Classes inversées", "Learning analytics", "Gamification"],
      status: "Inscriptions ouvertes",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    },
    {
      title: "Recherche Collaborative et Financement International",
      date: "20-22 Mars 2026",
      location: "En ligne",
      format: "100% virtuel",
      participants: "80 places",
      duration: "3 jours",
      description: "Stratégies pour développer des partenariats de recherche et obtenir des financements internationaux.",
      topics: ["Montage de projets", "Horizon Europe", "Partenariats stratégiques"],
      status: "Bientôt disponible",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
    }
  ];

  const pastSeminars = [
    {
      title: "Assurance Qualité dans l'Enseignement Supérieur",
      date: "Novembre 2025",
      participants: 45,
      satisfaction: "96%",
      videoAvailable: true
    },
    {
      title: "Mobilité Académique et Internationalisation",
      date: "Octobre 2025",
      participants: 38,
      satisfaction: "94%",
      videoAvailable: true
    },
    {
      title: "Gestion Financière des Institutions Académiques",
      date: "Septembre 2025",
      participants: 42,
      satisfaction: "98%",
      videoAvailable: true
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-aii-primary via-blue-600 to-aii-secondary -mt-[80px] pt-[140px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Séminaires Internationaux
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Des formations intensives pour développer vos compétences académiques et managériales
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#upcoming"
                className="inline-flex items-center px-8 py-4 bg-white text-aii-primary rounded-xl font-semibold
                         hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Voir le calendrier
              </a>
              <a
                href="#archives"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold
                         border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Video className="w-5 h-5 mr-2" />
                Replays disponibles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-aii-primary mb-2">12</div>
              <div className="text-slate-600">Séminaires / an</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-aii-primary mb-2">45+</div>
              <div className="text-slate-600">Participants moy.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-aii-primary mb-2">96%</div>
              <div className="text-slate-600">Taux satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-aii-primary mb-2">15</div>
              <div className="text-slate-600">Pays représentés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prochains Séminaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inscrivez-vous dès maintenant à nos formations intensives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingSeminars.map((seminar, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={seminar.image} 
                    alt={seminar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      seminar.status === 'Inscriptions ouvertes' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {seminar.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-aii-primary transition-colors">
                    {seminar.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {seminar.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-aii-primary" />
                      {seminar.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-aii-primary" />
                      {seminar.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-aii-primary" />
                      {seminar.duration} • {seminar.format}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-aii-primary" />
                      {seminar.participants}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {seminar.topics.map((topic, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-aii-primary text-xs font-medium rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/inscription"
                    className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-aii-primary to-aii-secondary
                             text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {seminar.status === 'Inscriptions ouvertes' ? 'S\'inscrire maintenant' : 'En savoir plus'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Details */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Formats de Séminaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le format qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Présentiel",
                description: "Immersion totale avec networking et ateliers pratiques",
                features: ["Interaction directe", "Ateliers hands-on", "Networking intensif", "Matériel fourni"]
              },
              {
                icon: Video,
                title: "100% Virtuel",
                description: "Formation complète accessible depuis partout dans le monde",
                features: ["Accès mondial", "Replays disponibles", "Chat en direct", "Certificat digital"]
              },
              {
                icon: BookOpen,
                title: "Hybride",
                description: "Le meilleur des deux mondes avec flexibilité maximale",
                features: ["Choix du mode", "Équité pédagogique", "Enregistrements", "Support continu"]
              }
            ].map((format, index) => {
              const Icon = format.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-aii-primary to-aii-secondary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{format.title}</h3>
                  <p className="text-gray-600 mb-6">{format.description}</p>
                  <ul className="space-y-3">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-aii-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Seminars & Archives */}
      <section id="archives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Archives & Replays
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accédez aux enregistrements de nos séminaires passés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastSeminars.map((seminar, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {seminar.title}
                    </h3>
                    <p className="text-sm text-gray-600">{seminar.date}</p>
                  </div>
                  {seminar.videoAvailable && (
                    <Video className="w-6 h-6 text-aii-primary" />
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Participants :</span>
                    <span className="font-semibold text-gray-900">{seminar.participants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Satisfaction :</span>
                    <span className="font-semibold text-green-600">{seminar.satisfaction}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-aii-primary text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    <Video className="w-4 h-4 mr-2" />
                    Voir replay
                  </button>
                  <button className="px-4 py-2 border-2 border-slate-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/elearning"
              className="inline-flex items-center px-8 py-4 bg-slate-200 text-gray-900 rounded-xl font-semibold
                       hover:bg-slate-300 transition-all duration-300"
            >
              Voir toutes les archives
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aii-primary to-aii-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à rejoindre notre prochain séminaire ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Développez vos compétences avec les meilleurs experts du secteur académique africain
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/inscription"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-aii-primary rounded-xl font-semibold
                       hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              S'inscrire maintenant
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold
                       border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Demander des informations
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seminaires;
