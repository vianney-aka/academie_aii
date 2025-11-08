import CallToAction from '../components/CallToAction'

const Gouvernance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 to-purple-700 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gouvernance
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Une structure démocratique et transparente au service de l'excellence académique
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Principes de Gouvernance
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                L'Académie Internationale Interuniversitaire repose sur des principes de gouvernance démocratique, participative et transparente. Notre organisation institutionnelle garantit l'implication de tous les membres, la prise de décision collégiale et le contrôle régulier de nos actions.
              </p>
              <p className="text-xl leading-relaxed">
                Les statuts et le règlement intérieur, adoptés par l'Assemblée Générale, définissent précisément les organes de décision, leurs prérogatives, les procédures et les mécanismes de transparence financière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organes de Gouvernance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Organes de Décision
          </h2>
          
          <div className="space-y-12">
            {/* Assemblée Générale */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-900 to-purple-700 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-3xl font-bold text-white">Assemblée Générale</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Instance Suprême de Décision</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    L'Assemblée Générale réunit l'ensemble des membres adhérents de l'AII. Elle se réunit au moins une fois par an en session ordinaire et peut se réunir en session extraordinaire si nécessaire.
                  </p>
                  <h5 className="font-bold text-gray-900 mb-2">Attributions :</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Adopter les orientations stratégiques et le plan d'action annuel</li>
                    <li>Approuver le budget et les comptes de l'académie</li>
                    <li>Élire les membres du Conseil d'Administration</li>
                    <li>Modifier les statuts et le règlement intérieur</li>
                    <li>Valider les admissions de nouveaux membres</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conseil d'Administration */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 bg-gradient-to-br from-[#0095D9] to-[#0064B0] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚖️</div>
                    <h3 className="text-3xl font-bold text-white">Conseil d'Administration</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Organe Exécutif</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Le Conseil d'Administration est composé de 15 membres élus par l'Assemblée Générale pour un mandat de 4 ans renouvelable. Il assure la gestion courante de l'académie et met en œuvre les décisions de l'AG.
                  </p>
                  <h5 className="font-bold text-gray-900 mb-2">Missions :</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Piloter la mise en œuvre de la stratégie adoptée</li>
                    <li>Gérer les ressources financières et humaines</li>
                    <li>Approuver les partenariats et conventions</li>
                    <li>Superviser les programmes et projets</li>
                    <li>Préparer les sessions de l'Assemblée Générale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bureau Exécutif */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-700 to-green-500 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <h3 className="text-3xl font-bold text-white">Bureau Exécutif</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Direction Opérationnelle</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Le Bureau Exécutif, élu parmi les membres du Conseil d'Administration, assure la direction quotidienne de l'académie. Il est composé d'un(e) Président(e), deux Vice-Président(e)s, un(e) Secrétaire Général(e) et un(e) Trésorier(e).
                  </p>
                  <h5 className="font-bold text-gray-900 mb-2">Responsabilités :</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Représenter l'AII auprès des partenaires</li>
                    <li>Coordonner les activités et programmes</li>
                    <li>Gérer l'équipe administrative</li>
                    <li>Exécuter les décisions du Conseil d'Administration</li>
                    <li>Assurer le suivi budgétaire et financier</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comités Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Comités Techniques et Scientifiques
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#0095D9] transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 Comité Académique</h3>
              <p className="text-gray-600 leading-relaxed">
                Évalue et valide les programmes de formation, les parcours certifiants et les contenus pédagogiques. Garantit l'excellence académique de nos formations.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#0095D9] transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔬 Comité Scientifique</h3>
              <p className="text-gray-600 leading-relaxed">
                Sélectionne et accompagne les projets de recherche collaborative. Organise les colloques et supervise les publications scientifiques.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#0095D9] transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💼 Comité des Partenariats</h3>
              <p className="text-gray-600 leading-relaxed">
                Développe et entretient les relations avec les universités partenaires, les institutions et les organisations internationales.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#0095D9] transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Comité de Contrôle Financier</h3>
              <p className="text-gray-600 leading-relaxed">
                Assure la transparence financière, contrôle l'utilisation des ressources et audite les comptes annuels de l'académie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparence */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Engagement pour la Transparence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'AII s'engage à une totale transparence dans sa gestion et ses actions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapports d'Activité</h3>
              <p className="text-gray-600">Publication annuelle de rapports détaillés accessibles à tous les membres</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comptes Certifiés</h3>
              <p className="text-gray-600">Audit externe des comptes et publication des bilans financiers</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documents Officiels</h3>
              <p className="text-gray-600">Accès libre aux statuts, règlements et procès-verbaux des AG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Gouvernance
