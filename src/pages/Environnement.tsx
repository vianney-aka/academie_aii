import CallToAction from '../components/CallToAction'

const Environnement = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 to-green-800 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Environnement
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Promouvoir le développement durable et la protection de notre planète
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Engagement Environnemental
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII place la durabilité environnementale au cœur de ses préoccupations. Nous croyons que les universités ont un rôle essentiel à jouer dans la lutte contre le changement climatique et la promotion de pratiques durables.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Nos programmes intègrent les principes du développement durable, de la conservation de la biodiversité et de la transition écologique.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous accompagnons les institutions académiques dans l'adoption de pratiques écoresponsables et dans la formation de leaders environnementaux.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" 
                alt="Environnement"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Actions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Actions Prioritaires
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recherche Climatique</h3>
              <p className="text-gray-600">
                Programmes de recherche sur l'adaptation au changement climatique et l'atténuation de ses effets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">💧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion de l'Eau</h3>
              <p className="text-gray-600">
                Formation et recherche sur la gestion durable des ressources en eau et l'accès à l'eau potable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Énergies Renouvelables</h3>
              <p className="text-gray-600">
                Développement de compétences en énergies propres et transition énergétique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thématiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Thématiques d'Intervention
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🌳 Biodiversité & Écosystèmes</h3>
              <p>Protection de la faune et de la flore, conservation des habitats naturels</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🌊 Océans & Mers</h3>
              <p>Préservation des ressources marines et lutte contre la pollution océanique</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🏙️ Villes Durables</h3>
              <p>Urbanisation écologique et développement de smart cities</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">♻️ Économie Circulaire</h3>
              <p>Réduction des déchets, recyclage et valorisation des ressources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs de Développement Durable */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Alignement avec les ODD
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Nos programmes environnementaux contribuent directement à l'atteinte des Objectifs de Développement Durable des Nations Unies
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-3">🎯</div>
              <p className="font-semibold">ODD 13: Action climatique</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-3">🌊</div>
              <p className="font-semibold">ODD 14: Vie aquatique</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-3">🌳</div>
              <p className="font-semibold">ODD 15: Vie terrestre</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-semibold">ODD 7: Énergie propre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Environnement
