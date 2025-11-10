import StatsCards from '../components/StatsCards'
import CallToAction from '../components/CallToAction'

const QuiSommesNous = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0064B0] to-[#0095D9] -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Découvrez l'Académie Internationale Interuniversitaire, notre vision et nos valeurs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'Académie Internationale Interuniversitaire
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'Académie Internationale Interuniversitaire (AII) est une institution dédiée à la promotion de l'excellence académique et au renforcement des capacités universitaires, particulièrement en Afrique et dans les pays en développement.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Fondée sur les principes de coopération, d'innovation et d'équité, l'AII rassemble un réseau d'universités, de chercheurs et d'experts engagés dans la transformation de l'enseignement supérieur.
                </p>
                <p className="text-xl leading-relaxed">
                  Notre mission est de créer des ponts entre les institutions académiques du monde entier, de faciliter les échanges de connaissances et de promouvoir une recherche collaborative de haut niveau.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Équipe AII"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Objectifs Stratégiques
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#0095D9] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence Académique</h3>
              <p className="text-gray-600">
                Promouvoir les meilleurs standards internationaux dans l'enseignement supérieur et la recherche scientifique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coopération Internationale</h3>
              <p className="text-gray-600">
                Renforcer les partenariats entre universités africaines et institutions internationales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Pédagogique</h3>
              <p className="text-gray-600">
                Développer et diffuser des méthodes d'enseignement innovantes adaptées aux défis contemporains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Historique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre Parcours depuis 2020
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0095D9]"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0095D9] rounded-full flex items-center justify-center text-white font-bold z-10">
                    2020
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="md:text-right">
                    <div className="bg-gray-50 p-6 rounded-xl inline-block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fondation de l'AII</h3>
                      <p className="text-gray-600">Création par un collectif de 12 universitaires africains et de la diaspora avec une vision commune : promouvoir l'excellence académique en Afrique.</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0095D9] rounded-full flex items-center justify-center text-white font-bold z-10">
                    2021
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div></div>
                  <div>
                    <div className="bg-gray-50 p-6 rounded-xl inline-block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Premiers Partenariats</h3>
                      <p className="text-gray-600">Signature de conventions avec 15 universités pionnières au Sénégal, Côte d'Ivoire, Cameroun et Mali. Lancement des premiers programmes de mobilité académique.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0095D9] rounded-full flex items-center justify-center text-white font-bold z-10">
                    2023
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="md:text-right">
                    <div className="bg-gray-50 p-6 rounded-xl inline-block">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Extension du Réseau</h3>
                      <p className="text-gray-600">35 universités partenaires dans 12 pays. Première édition du Congrès International AII à Dakar avec 300 participants de 18 pays africains.</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    2025
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div></div>
                  <div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl inline-block border-2 border-green-600">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Programme VEA & Expansion</h3>
                      <p className="text-gray-600">Lancement du Programme VEA, 50+ universités partenaires, 15 pays, 1200+ bénéficiaires formés. Adoption de la stratégie 2025-2030.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <StatsCards />

      {/* Leadership et Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe d'experts reconnus, engagés pour l'excellence académique africaine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-[#0095D9] to-[#0064B0]"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pr. Amadou Diallo</h3>
                <p className="text-[#0095D9] font-semibold mb-3">Président du Conseil d'Administration</p>
                <p className="text-gray-600 text-sm">Professeur émérite en Sciences de l'Éducation, Université Cheikh Anta Diop (Sénégal). 30 ans d'expérience dans la gouvernance universitaire et la coopération académique internationale.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Fatima N'Diaye</h3>
                <p className="text-purple-600 font-semibold mb-3">Directrice Exécutive</p>
                <p className="text-gray-600 text-sm">Docteure en Management de l'Enseignement Supérieur, ancienne Vice-Rectrice à Abidjan. Spécialiste de l'assurance qualité et de l'innovation pédagogique en Afrique.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pr. Jean-Marc Kouassi</h3>
                <p className="text-green-600 font-semibold mb-3">Président du Comité Scientifique</p>
                <p className="text-gray-600 text-sm">Professeur de Recherche, Université de Yaoundé I (Cameroun). Expert en méthodologie de la recherche collaborative et évaluation scientifique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Concrètes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Réalisations Majeures
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0095D9] to-[#0064B0] text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3">Formation de 1200+ Académiciens</h3>
              <p className="text-white/90 mb-4">Enseignants-chercheurs, doctorants et personnels administratifs formés via nos parcours certifiants en pédagogie numérique, méthodologie de recherche et management académique.</p>
              <div className="text-sm text-white/80">Taux de satisfaction : 94%</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">200+ Projets de Recherche Financés</h3>
              <p className="text-white/90 mb-4">Projets collaboratifs interuniversitaires dans les domaines de la santé, de l'éducation, du développement durable et des technologies. Budget total : 5M€.</p>
              <div className="text-sm text-white/80">150+ publications scientifiques</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-3">Réseau de 50 Universités</h3>
              <p className="text-white/90 mb-4">Partenariats stratégiques avec des institutions d'excellence académique dans 15 pays africains et de la diaspora, facilitant les échanges et la mobilité.</p>
              <div className="text-sm text-white/80">500+ mobilités académiques réalisées</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">3 Revues Scientifiques Lancées</h3>
              <p className="text-white/90 mb-4">Revues académiques bilingues (français/anglais) : Innovation Pédagogique en Afrique, African Higher Education Review, Cahiers de la Recherche Collaborative.</p>
              <div className="text-sm text-white/80">Indexées dans plusieurs bases internationales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires Clés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Partenaires Stratégiques
            </h2>
            <p className="text-xl text-gray-600">
              Collaborations avec des organisations internationales de renom
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-gray-900 mb-2">Union Africaine</h3>
              <p className="text-sm text-gray-600">Programme d'harmonisation de l'enseignement supérieur en Afrique</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-bold text-gray-900 mb-2">UNESCO</h3>
              <p className="text-sm text-gray-600">Coopération sur l'éducation de qualité et la science ouverte</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold text-gray-900 mb-2">Union Européenne</h3>
              <p className="text-sm text-gray-600">Programmes Erasmus+ et projets de renforcement des capacités</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Agence Universitaire Francophonie</h3>
              <p className="text-sm text-gray-600">Mobilité académique et coopération scientifique francophone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure et Gouvernance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Structure et Gouvernance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une organisation transparente et participative au service de notre mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0095D9] to-[#0064B0] text-white p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Conseil d'Administration</h3>
              <p className="text-lg leading-relaxed mb-4">
                Composé d'éminents universitaires et de personnalités du monde académique, notre conseil d'administration définit les orientations stratégiques de l'AII.
              </p>
              <p className="text-lg leading-relaxed">
                Il assure la supervision de nos activités et garantit l'alignement de nos actions avec notre mission fondamentale.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Comité Scientifique</h3>
              <p className="text-lg leading-relaxed mb-4">
                Notre comité scientifique réunit des experts reconnus dans divers domaines pour garantir la qualité académique de nos programmes.
              </p>
              <p className="text-lg leading-relaxed">
                Il évalue les projets de recherche, valide les formations et assure la pertinence de nos initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default QuiSommesNous
