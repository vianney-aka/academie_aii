import { Play, BookOpen, Award, Clock, Users, TrendingUp, Download, ChevronRight, Star, Video } from 'lucide-react';

const Elearning = () => {
  const featuredCourses = [
    {
      title: "Leadership Académique Transformationnel",
      description: "Développez vos compétences en gouvernance universitaire et management stratégique",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      duration: "8 semaines",
      level: "Avancé",
      students: 245,
      rating: 4.8,
      modules: 12,
      certificate: true,
      category: "Management"
    },
    {
      title: "Innovation Pédagogique et Numérique",
      description: "Maîtrisez les outils et méthodes d'enseignement du 21ème siècle",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      duration: "6 semaines",
      level: "Intermédiaire",
      students: 389,
      rating: 4.9,
      modules: 10,
      certificate: true,
      category: "Pédagogie"
    },
    {
      title: "Recherche Collaborative et Financement",
      description: "Stratégies pour développer des partenariats de recherche internationaux",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      duration: "5 semaines",
      level: "Intermédiaire",
      students: 312,
      rating: 4.7,
      modules: 8,
      certificate: true,
      category: "Recherche"
    }
  ];

  const categories = [
    { name: "Management Académique", courses: 45, icon: Users, color: "from-blue-500 to-indigo-600" },
    { name: "Pédagogie Innovante", courses: 38, icon: BookOpen, color: "from-purple-500 to-pink-600" },
    { name: "Recherche & Innovation", courses: 32, icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { name: "Gouvernance", courses: 28, icon: Award, color: "from-amber-500 to-orange-600" }
  ];

  const stats = [
    { label: "Cours disponibles", value: "120+" },
    { label: "Heures de contenu", value: "850+" },
    { label: "Apprenants actifs", value: "2,450" },
    { label: "Taux de complétion", value: "87%" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 -mt-[80px] pt-[140px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Catalogue E-learning
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Formez-vous à votre rythme avec nos cours en ligne certifiants
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/inscription"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold
                         hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Commencer gratuitement
              </a>
              <a
                href="#courses"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold
                         border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Explorer les cours
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Notre Plateforme ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience d'apprentissage adaptée aux professionnels de l'enseignement supérieur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Formation Flexible",
                description: "Apprenez à votre rythme, 24/7, depuis n'importe où dans le monde"
              },
              {
                icon: Award,
                title: "Certificats Reconnus",
                description: "Obtenez des certifications valorisées dans le secteur académique"
              },
              {
                icon: Users,
                title: "Communauté Active",
                description: "Échangez avec des pairs et experts à travers des forums de discussion"
              },
              {
                icon: Video,
                title: "Contenu Multimédia",
                description: "Vidéos HD, quiz interactifs, études de cas et ressources téléchargeables"
              },
              {
                icon: TrendingUp,
                title: "Suivi Personnalisé",
                description: "Tableau de bord avec progression détaillée et recommandations adaptées"
              },
              {
                icon: Download,
                title: "Ressources Premium",
                description: "Accès illimité à une bibliothèque de documents et outils professionnels"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Domaines de Formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos cours par thématique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.courses} cours disponibles
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Explorer
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Cours Populaires
              </h2>
              <p className="text-gray-600">Les formations les plus suivies de la plateforme</p>
            </div>
            <a
              href="/connexion"
              className="hidden md:flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold
                       hover:bg-purple-700 transition-all"
            >
              Voir tous les cours
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-purple-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1 text-purple-600" />
                      {course.modules} modules
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-purple-600" />
                      {course.students} inscrits
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        {course.level}
                      </span>
                      {course.certificate && (
                        <div title="Certificat inclus">
                          <Award className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                    </div>
                    <a
                      href="/connexion"
                      className="flex items-center text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors"
                    >
                      Commencer
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/connexion"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold
                       hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Découvrir tous les cours
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Votre Parcours d'Apprentissage
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Un processus simple en 4 étapes pour développer vos compétences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inscription", description: "Créez votre compte gratuit" },
              { step: "2", title: "Sélection", description: "Choisissez vos cours" },
              { step: "3", title: "Apprentissage", description: "Suivez à votre rythme" },
              { step: "4", title: "Certification", description: "Obtenez votre diplôme" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à Commencer Votre Formation ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez plus de 2,400 professionnels qui développent leurs compétences avec nous
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold
                         hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Créer un compte gratuit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-200 text-gray-900 rounded-xl font-semibold
                         hover:bg-slate-300 transition-all duration-300"
              >
                Parler à un conseiller
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Elearning;
