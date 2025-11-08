import CallToAction from '../components/CallToAction'

const Formations = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-700 to-green-500 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Formations
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Des parcours certifiants pour l'excellence pédagogique et académique
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Renforcer les Compétences Académiques
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                L'AII propose une offre de formation continue innovante destinée aux enseignants-chercheurs, doctorants et personnels administratifs des universités africaines. Nos parcours certifiants combinent expertise scientifique, pédagogie active et accompagnement personnalisé.
              </p>
              <p className="text-xl leading-relaxed">
                Toutes nos formations sont délivrées en format hybride (présentiel et distanciel) pour garantir l'accessibilité et la flexibilité, tout en favorisant les échanges et la création de réseaux professionnels durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Certifiants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Parcours Certifiants
          </h2>
          
          <div className="space-y-8">
            {/* Formation 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop" 
                    alt="Pédagogie Numérique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">6 mois</span>
                    <span className="ml-3 text-gray-600">Format Hybride</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Pédagogie Numérique Avancée</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Maîtrisez les outils et méthodes de l'enseignement numérique : création de contenus interactifs, animation de classes virtuelles, évaluation en ligne, learning analytics. Certificat reconnu à l'international.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">120h de formation (60h présentiel + 60h distanciel)</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Projet pratique de création de cours en ligne</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Accompagnement par des experts en e-learning</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>

            {/* Formation 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop" 
                    alt="Méthodologie Recherche"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#0095D9] text-white px-3 py-1 rounded-full text-sm font-semibold">8 mois</span>
                    <span className="ml-3 text-gray-600">Format Hybride</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Méthodologie de la Recherche Collaborative</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Développez vos compétences en recherche interdisciplinaire : construction de partenariats, gestion de projets collaboratifs, méthodologies qualitatives et quantitatives, rédaction scientifique et valorisation des résultats.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-[#0095D9] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">150h de formation théorique et pratique</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-[#0095D9] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Montage d'un projet de recherche interuniversitaire</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-[#0095D9] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Ateliers d'écriture scientifique et publication</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-[#0095D9] hover:bg-[#0077B6] text-white px-6 py-3 rounded-full font-semibold transition">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>

            {/* Formation 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" 
                    alt="Management Académique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">10 mois</span>
                    <span className="ml-3 text-gray-600">Format Hybride</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Management et Leadership Académique</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Préparez-vous aux fonctions de direction universitaire : stratégie institutionnelle, gestion des ressources humaines, gouvernance académique, pilotage budgétaire, développement de partenariats et conduite du changement.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">180h incluant coaching personnalisé</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Études de cas réels et simulations</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Réseau d'anciens et mentorat</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format Hybride */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Format Hybride Innovant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le meilleur des deux mondes pour une formation flexible et efficace
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0095D9] to-[#0064B0] text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Sessions en Ligne</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cours interactifs avec formateurs experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ressources pédagogiques accessibles 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forums de discussion et travail collaboratif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Suivi individualisé par les tuteurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold mb-4">Séminaires Présentiels</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ateliers pratiques dans les universités partenaires</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Travaux de groupe et études de cas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Networking et création de réseaux professionnels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Échanges d'expériences entre pairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Témoignages de nos Alumni
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Amina Diallo</h4>
                  <p className="text-sm text-gray-600">Université de Dakar</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La formation en pédagogie numérique m'a permis de transformer complètement mes cours. Mes étudiants sont plus engagés et les résultats sont remarquables."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Pr. Jean-Marc Koné</h4>
                  <p className="text-sm text-gray-600">Université d'Abidjan</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Le parcours en recherche collaborative m'a ouvert les portes de nombreux partenariats internationaux. Un investissement qui en vaut la peine."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Fatou Sow</h4>
                  <p className="text-sm text-gray-600">Université de Yaoundé</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Grâce au certificat en management académique, j'ai été promue directrice de département. Une formation de très haute qualité."
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

export default Formations
