import CallToAction from '../components/CallToAction'

const Ethique = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-amber-600 to-orange-900 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Éthique
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Promouvoir l'intégrité académique et les valeurs éthiques dans l'enseignement et la recherche
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'Éthique au Cœur de l'Excellence
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII place l'éthique au centre de sa mission. Nous promouvons l'intégrité académique, la déontologie professionnelle et les principes éthiques dans toutes nos activités.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Notre engagement éthique se traduit par la promotion de la transparence, de l'honnêteté intellectuelle et du respect des principes moraux dans l'enseignement, la recherche et la gouvernance universitaire.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous accompagnons les institutions dans l'élaboration et la mise en œuvre de codes éthiques, de chartes déontologiques et de mécanismes de régulation éthique.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                alt="Éthique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principes Éthiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Principes Éthiques Fondamentaux
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrité Académique</h3>
              <p className="text-gray-600">
                Lutte contre le plagiat, valorisation de l'honnêteté intellectuelle et respect de la propriété intellectuelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité Sociale</h3>
              <p className="text-gray-600">
                Engagement pour le bien commun, justice sociale et contribution au développement durable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparence</h3>
              <p className="text-gray-600">
                Gouvernance ouverte, redevabilité et accès à l'information pour tous les acteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Intervention */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Domaines d'Intervention Éthique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🔬 Éthique de la Recherche</h3>
              <ul className="space-y-2">
                <li>• Comités d'éthique de la recherche</li>
                <li>• Protection des participants</li>
                <li>• Gestion des données sensibles</li>
                <li>• Publication responsable</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🤖 Éthique du Numérique & IA</h3>
              <ul className="space-y-2">
                <li>• Intelligence artificielle responsable</li>
                <li>• Protection des données personnelles</li>
                <li>• Algorithmes équitables</li>
                <li>• Utilisation éthique des technologies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">📝 Éthique Professionnelle</h3>
              <ul className="space-y-2">
                <li>• Déontologie enseignante</li>
                <li>• Conduite professionnelle</li>
                <li>• Conflits d'intérêts</li>
                <li>• Responsabilité pédagogique</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🌍 Éthique Environnementale</h3>
              <ul className="space-y-2">
                <li>• Responsabilité écologique</li>
                <li>• Recherche environnementale</li>
                <li>• Campus durables</li>
                <li>• Éco-citoyenneté académique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Éthique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Formation à l'Éthique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développer une culture éthique forte au sein des institutions académiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modules de Formation</h3>
              <p className="text-gray-600">
                Cours et ateliers sur l'éthique académique, la recherche responsable et l'intégrité scientifique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
              <p className="text-gray-600">
                Programmes de certification en éthique de la recherche et déontologie professionnelle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sensibilisation</h3>
              <p className="text-gray-600">
                Campagnes de sensibilisation et événements sur les enjeux éthiques contemporains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charte Éthique */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Notre Charte Éthique
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Un engagement fort envers l'excellence éthique dans toutes nos actions
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Télécharger la Charte Éthique
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Ethique
