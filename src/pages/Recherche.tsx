import CallToAction from '../components/CallToAction'

const Recherche = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 to-indigo-700 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recherche
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Promouvoir l'innovation scientifique et la collaboration interuniversitaire
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une Approche Collaborative de la Recherche
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                L'AII place la recherche collaborative au cœur de sa mission. Nous favorisons les partenariats scientifiques entre universités africaines et internationales pour produire des connaissances innovantes, pertinentes et ancrées dans les réalités du continent.
              </p>
              <p className="text-xl leading-relaxed">
                Notre approche privilégie l'interdisciplinarité, la co-création de savoirs et la valorisation des résultats auprès des décideurs politiques, du secteur privé et de la société civile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Axes de Recherche */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Axes de Recherche Prioritaires
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement Durable</h3>
              <p className="text-gray-600 leading-relaxed">
                Recherches sur les transitions écologiques, les énergies renouvelables, la gestion des ressources naturelles et l'adaptation au changement climatique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Santé Publique</h3>
              <p className="text-gray-600 leading-relaxed">
                Études sur les systèmes de santé, les maladies émergentes, la santé communautaire et l'accès aux soins dans les contextes africains.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Éducation & Formation</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation pédagogique, qualité de l'enseignement supérieur, technologies éducatives et politiques universitaires.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies & Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligence artificielle, blockchain, IoT, transformation numérique et entrepreneuriat technologique en Afrique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gouvernance & Société</h3>
              <p className="text-gray-600 leading-relaxed">
                Démocratie, décentralisation, politiques publiques, migrations et dynamiques sociales contemporaines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Économie & Développement</h3>
              <p className="text-gray-600 leading-relaxed">
                Croissance inclusive, entrepreneuriat, marchés africains, intégration régionale et développement local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes de Financement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Programmes de Financement
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="border-l-4 border-indigo-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Projets de Recherche Collaborative (PRC)
              </h3>
              <p className="text-gray-600 mb-3">
                Financement de projets de recherche impliquant au minimum trois universités partenaires. Budget : 10 000 à 50 000 €. Durée : 18 à 36 mois.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">📅 2 appels par an</span>
                <span>💰 Enveloppe globale : 500 000 €</span>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Bourses de Recherche Doctorale
              </h3>
              <p className="text-gray-600 mb-3">
                Soutien aux doctorants en cotutelle entre universités du réseau AII. Financement de séjours de recherche et participation à des colloques internationaux.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">📅 Appel permanent</span>
                <span>💰 5 000 à 15 000 € par bourse</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mobilité Scientifique
              </h3>
              <p className="text-gray-600 mb-3">
                Financement de séjours de recherche de courte durée (1 à 6 mois) pour enseignants-chercheurs et post-doctorants au sein des universités partenaires.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">📅 3 sessions par an</span>
                <span>💰 2 000 à 8 000 € par séjour</span>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Valorisation et Publications
              </h3>
              <p className="text-gray-600 mb-3">
                Soutien à la publication d'articles dans des revues indexées, à l'édition d'ouvrages scientifiques et à l'organisation de colloques de restitution.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">📅 Sur demande</span>
                <span>💰 1 000 à 10 000 € par projet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de Soumission */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Comment Soumettre un Projet ?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-200"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation des Appels à Projets</h3>
                    <p className="text-gray-600">
                      Consultez régulièrement notre plateforme pour découvrir les appels à projets ouverts, les thématiques prioritaires et les critères d'éligibilité.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Constitution du Consortium</h3>
                    <p className="text-gray-600">
                      Formez une équipe de recherche avec au moins trois chercheurs de trois universités partenaires différentes. Désignez un coordinateur principal.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dépôt du Dossier</h3>
                    <p className="text-gray-600">
                      Remplissez le formulaire en ligne, téléchargez les documents requis (note conceptuelle, budget prévisionnel, CV des chercheurs) avant la date limite.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Évaluation Scientifique</h3>
                    <p className="text-gray-600">
                      Votre projet est évalué par le Comité Scientifique selon les critères de qualité scientifique, pertinence, faisabilité et impact potentiel.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                    ✓
                  </div>
                  <div className="ml-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Notification et Contractualisation</h3>
                    <p className="text-gray-600">
                      Les projets retenus reçoivent une notification officielle. Une convention de financement est signée et le premier versement effectué.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Publications Scientifiques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Articles publiés dans des revues indexées</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
              <p className="text-gray-600">Ouvrages scientifiques édités</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">80+</h3>
              <p className="text-gray-600">Thèses de doctorat soutenues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Recherche
