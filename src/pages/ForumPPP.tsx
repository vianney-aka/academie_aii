import { MessageSquare, Users, TrendingUp, Award, BookOpen, Target, Globe, ChevronRight, Calendar } from 'lucide-react';

const ForumPPP = () => {
  const forumCategories = [
    {
      icon: BookOpen,
      title: "Gouvernance & Leadership",
      description: "Discussions sur la gouvernance universitaire et le leadership académique",
      topics: 245,
      posts: 1820,
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Pédagogie & Innovation",
      description: "Partage de pratiques pédagogiques innovantes et retours d'expérience",
      topics: 189,
      posts: 1456,
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Recherche & Partenariats",
      description: "Opportunités de collaboration et appels à projets internationaux",
      topics: 167,
      posts: 1234,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Financement & Développement",
      description: "Stratégies de financement et développement institutionnel",
      topics: 134,
      posts: 987,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const recentTopics = [
    {
      title: "Stratégies d'internationalisation pour universités africaines",
      author: "Dr. Amara Diallo",
      category: "Recherche & Partenariats",
      replies: 45,
      views: 892,
      lastActivity: "Il y a 2 heures",
      tags: ["Internationalisation", "Stratégie", "Partenariats"]
    },
    {
      title: "Retour d'expérience : Mise en place de l'APC",
      author: "Prof. Kofi Mensah",
      category: "Pédagogie & Innovation",
      replies: 38,
      views: 756,
      lastActivity: "Il y a 5 heures",
      tags: ["APC", "Réforme", "Pédagogie"]
    },
    {
      title: "Appel à projet Erasmus+ 2026 : conseils et astuces",
      author: "Dr. Fatima El Mansouri",
      category: "Financement & Développement",
      replies: 62,
      views: 1234,
      lastActivity: "Il y a 1 jour",
      tags: ["Erasmus+", "Financement", "Europe"]
    }
  ];

  const stats = [
    { label: "Membres actifs", value: "2,450+" },
    { label: "Discussions", value: "735" },
    { label: "Contributions", value: "5,497" },
    { label: "Universités", value: "52" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 -mt-[80px] pt-[140px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Forum PPP
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Plateforme de Partage de Pratiques Professionnelles entre acteurs de l'enseignement supérieur africain
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/connexion"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold
                         hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Rejoindre le forum
              </a>
              <a
                href="#categories"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold
                         border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Explorer les discussions
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

      {/* About Forum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Un Espace d'Échange et de Collaboration
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le Forum PPP est la communauté en ligne de l'AII dédiée au partage d'expériences, 
                à l'entraide et à la collaboration entre professionnels de l'enseignement supérieur.
              </p>
              <div className="space-y-4">
                {[
                  "Posez vos questions et obtenez des réponses d'experts",
                  "Partagez vos réussites et challenges",
                  "Trouvez des opportunités de collaboration",
                  "Accédez à des ressources exclusives"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-600">Taux d'engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Catégories du Forum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez les espaces de discussion thématiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {category.topics} discussions
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {category.posts} messages
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Discussions Récentes
              </h2>
              <p className="text-gray-600">Les échanges les plus actifs de la communauté</p>
            </div>
            <a
              href="/connexion"
              className="hidden md:flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold
                       hover:bg-purple-700 transition-all"
            >
              Voir toutes les discussions
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="space-y-4">
            {recentTopics.map((topic, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {topic.author}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {topic.category}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {topic.lastActivity}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {topic.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 ml-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{topic.replies}</div>
                      <div className="text-xs text-gray-500">réponses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{topic.views}</div>
                      <div className="text-xs text-gray-500">vues</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a
              href="/connexion"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold
                       hover:bg-purple-700 transition-all"
            >
              Voir toutes les discussions
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pourquoi Rejoindre le Forum PPP ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Une communauté dynamique au service de l'excellence académique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Réseau d'Experts",
                description: "Connectez-vous avec plus de 2,400 professionnels de l'enseignement supérieur africain"
              },
              {
                icon: TrendingUp,
                title: "Veille Stratégique",
                description: "Restez informé des dernières tendances, opportunités et bonnes pratiques du secteur"
              },
              {
                icon: Award,
                title: "Reconnaissance",
                description: "Gagnez en visibilité en partageant votre expertise et vos réalisations"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à Rejoindre la Communauté ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Inscrivez-vous gratuitement et commencez à échanger avec vos pairs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/inscription"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold
                       hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Créer un compte
            </a>
            <a
              href="/connexion"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-200 text-gray-900 rounded-xl font-semibold
                       hover:bg-slate-300 transition-all duration-300"
            >
              Se connecter
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForumPPP;
