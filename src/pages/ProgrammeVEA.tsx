import CallToAction from '../components/CallToAction'

const ProgrammeVEA = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0064B0] to-[#0095D9] -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Programme VEA
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Valorisation de l'Excellence Africaine
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une initiative transformatrice pour l'enseignement supérieur africain
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Le Programme VEA (Valorisation de l'Excellence Africaine) est l'initiative phare de l'Académie Internationale Interuniversitaire. Lancé en 2025, il incarne notre engagement envers la reconnaissance et la promotion des talents académiques africains sur la scène internationale.
              </p>
              <p className="text-xl leading-relaxed">
                À travers un réseau dynamique de 50 universités partenaires réparties dans 15 pays, le programme VEA crée un écosystème favorable à l'excellence académique, à l'innovation pédagogique et à la mobilité scientifique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Objectifs du Programme
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#0095D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Renforcement des capacités</h3>
              <p className="text-gray-600 leading-relaxed">
                Développer les compétences académiques et pédagogiques des enseignants-chercheurs à travers des formations continues innovantes et des programmes d'échanges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobilité académique</h3>
              <p className="text-gray-600 leading-relaxed">
                Faciliter les échanges de chercheurs, étudiants et enseignants entre universités partenaires pour enrichir les perspectives et créer des synergies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconnaissance internationale</h3>
              <p className="text-gray-600 leading-relaxed">
                Valoriser et promouvoir les talents africains, les recherches innovantes et les bonnes pratiques pédagogiques sur la scène académique mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Axes Stratégiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Axes Stratégiques
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0095D9] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Formation Continue et Certifications</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Développement de parcours certifiants pour enseignants-chercheurs : pédagogie numérique avancée, méthodologie de la recherche collaborative, management académique et innovation pédagogique.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0095D9] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bourses de Mobilité Académique</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Programme de bourses pour faciliter les séjours de recherche, les échanges d'enseignants et les cotutelles de thèse entre universités partenaires du réseau AII.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0095D9] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Projets de Recherche Collaborative</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Financement et accompagnement de projets de recherche interuniversitaires portant sur les enjeux africains : développement durable, santé, éducation, technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0095D9] text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Valorisation et Communication</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Publication et diffusion des travaux de recherche, organisation de colloques internationaux, création de revues scientifiques et participation aux grands débats académiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="py-20 bg-[#0095D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Programme VEA en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 text-lg">Universités Partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15</div>
              <div className="text-white/90 text-lg">Pays Représentés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-white/90 text-lg">Projets Financés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1200+</div>
              <div className="text-white/90 text-lg">Bénéficiaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default ProgrammeVEA
