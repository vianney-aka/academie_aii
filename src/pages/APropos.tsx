import StatsCards from '../components/StatsCards'
import CallToAction from '../components/CallToAction'

const APropos = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0064B0] to-[#0095D9] -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            À Propos de l'AII
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Une académie internationale au service de l'excellence universitaire africaine
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'Académie Internationale Interuniversitaire (AII) a été créée en 2020 par un groupe d'universitaires africains et de la diaspora partageant une vision commune : promouvoir l'excellence académique et renforcer les capacités des universités africaines.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Née d'une volonté de créer des synergies entre institutions d'enseignement supérieur, l'AII s'est rapidement imposée comme un acteur clé de la transformation universitaire en Afrique. En cinq ans, nous avons construit un réseau de 50 universités partenaires à travers 15 pays.
                </p>
                <p className="text-xl leading-relaxed">
                  Aujourd'hui, l'AII est reconnue comme une plateforme d'excellence favorisant la mobilité académique, la recherche collaborative et l'innovation pédagogique au service du développement du continent.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" 
                alt="Histoire AII"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0095D9] to-[#0064B0] text-white p-10 rounded-2xl">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
              <p className="text-lg leading-relaxed mb-4">
                Promouvoir l'excellence académique, renforcer les capacités universitaires et faciliter la coopération scientifique entre institutions d'enseignement supérieur africaines et internationales.
              </p>
              <p className="text-lg leading-relaxed">
                Nous œuvrons pour que les universités africaines soient reconnues comme des pôles d'excellence et d'innovation au service du développement durable du continent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white p-10 rounded-2xl">
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
              <p className="text-lg leading-relaxed mb-4">
                Devenir la référence continentale en matière de coopération universitaire, de valorisation des talents africains et de production de connaissances scientifiques innovantes.
              </p>
              <p className="text-lg leading-relaxed">
                Un réseau universitaire africain fort, autonome et reconnu internationalement pour sa contribution au progrès scientifique et social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Valeurs Fondamentales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#0095D9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous visons les plus hauts standards de qualité dans toutes nos actions et programmes académiques.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                La coopération entre institutions est au cœur de notre approche pour créer des synergies durables.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous encourageons la créativité et l'adoption de pratiques pédagogiques et scientifiques innovantes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Équité</h3>
              <p className="text-gray-600">
                Nous garantissons un accès égal aux opportunités pour tous les membres de notre réseau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <StatsCards />

      {/* Réseau de Partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Réseau de Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un écosystème d'excellence réparti à travers l'Afrique et au-delà
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌍 Afrique de l'Ouest</h3>
              <p className="text-gray-600 mb-3">Sénégal, Mali, Côte d'Ivoire, Burkina Faso, Bénin, Togo, Ghana, Nigeria</p>
              <p className="text-sm text-gray-500">18 universités partenaires</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌍 Afrique Centrale</h3>
              <p className="text-gray-600 mb-3">Cameroun, RD Congo, Congo-Brazzaville, Gabon, Tchad, RCA</p>
              <p className="text-sm text-gray-500">15 universités partenaires</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌍 Afrique de l'Est</h3>
              <p className="text-gray-600 mb-3">Kenya, Tanzanie, Ouganda, Rwanda, Éthiopie, Djibouti</p>
              <p className="text-sm text-gray-500">12 universités partenaires</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🌐 Diaspora</h3>
              <p className="text-gray-600 mb-3">France, Canada, États-Unis, Belgique, Royaume-Uni</p>
              <p className="text-sm text-gray-500">8 institutions partenaires</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🤝 Partenaires Institutionnels</h3>
              <p className="text-gray-600 mb-3">Organisations internationales, fondations, ONG</p>
              <p className="text-sm text-gray-500">15 partenaires stratégiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre Équipe
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'AII est animée par une équipe de professionnels dévoués et d'experts académiques reconnus. Ensemble, nous travaillons chaque jour pour concrétiser notre mission et accompagner le développement des universités africaines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous souhaitez nous rejoindre ?</h3>
            <p className="text-gray-600 mb-6">
              Nous recherchons régulièrement des talents passionnés par l'éducation supérieure et le développement du continent africain.
            </p>
            <button className="bg-[#0095D9] hover:bg-[#0077B6] text-white px-8 py-3 rounded-full font-semibold transition">
              Voir les offres d'emploi
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default APropos
