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

      {/* Statistiques */}
      <StatsCards />

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
