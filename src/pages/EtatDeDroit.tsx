import CallToAction from '../components/CallToAction'

const EtatDeDroit = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-700 to-slate-900 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            État de Droit
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Renforcer la gouvernance démocratique et l'État de droit dans l'enseignement supérieur
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Promouvoir l'État de Droit et la Bonne Gouvernance
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII s'engage pour le renforcement de l'État de droit, la promotion des droits humains et le développement d'une gouvernance démocratique dans les institutions d'enseignement supérieur.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Nous soutenons les universités dans l'adoption de pratiques de gouvernance transparentes, inclusives et respectueuses des principes démocratiques.
                </p>
                <p className="text-xl leading-relaxed">
                  Notre action vise à former des citoyens éclairés, conscients de leurs droits et responsabilités, et capables de contribuer au développement de sociétés justes et équitables.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=600&fit=crop" 
                alt="État de Droit"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Piliers de l'État de Droit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Les Piliers de notre Action
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Justice & Équité</h3>
              <p className="text-gray-600">
                Promotion de la justice sociale, de l'égalité des chances et du respect des droits fondamentaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gouvernance Démocratique</h3>
              <p className="text-gray-600">
                Renforcement de la participation démocratique, de la transparence et de la redevabilité institutionnelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">📜</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Droits Humains</h3>
              <p className="text-gray-600">
                Protection et promotion des droits humains fondamentaux dans l'espace universitaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Programmes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-600 to-slate-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🎓 Formation Juridique</h3>
              <ul className="space-y-2">
                <li>• Droit constitutionnel</li>
                <li>• Droit international</li>
                <li>• Droits humains</li>
                <li>• Droit de la gouvernance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🏛️ Gouvernance Universitaire</h3>
              <ul className="space-y-2">
                <li>• Autonomie institutionnelle</li>
                <li>• Liberté académique</li>
                <li>• Gestion participative</li>
                <li>• Transparence administrative</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">👥 Éducation Civique</h3>
              <ul className="space-y-2">
                <li>• Citoyenneté active</li>
                <li>• Culture démocratique</li>
                <li>• Participation citoyenne</li>
                <li>• Leadership responsable</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🔍 Lutte contre la Corruption</h3>
              <ul className="space-y-2">
                <li>• Intégrité institutionnelle</li>
                <li>• Mécanismes de contrôle</li>
                <li>• Dénonciation protégée</li>
                <li>• Éthique administrative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Thématiques Clés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Thématiques Clés
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accès à la Justice</h3>
              <p className="text-sm text-gray-600">Faciliter l'accès au droit pour tous</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Processus Électoraux</h3>
              <p className="text-sm text-gray-600">Élections démocratiques et transparentes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Liberté d'Expression</h3>
              <p className="text-sm text-gray-600">Protection de la liberté académique</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusion Sociale</h3>
              <p className="text-sm text-gray-600">Lutte contre toutes formes de discrimination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Partenaires Institutionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaboration avec des organisations nationales et internationales pour renforcer l'État de droit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Organisations Internationales</h3>
              <p className="text-gray-600">Nations Unies, Union Africaine, organisations régionales</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏛️ Institutions Juridiques</h3>
              <p className="text-gray-600">Cours suprêmes, ordres professionnels, facultés de droit</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Société Civile</h3>
              <p className="text-gray-600">ONGs de défense des droits humains et de la démocratie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Notre Engagement pour l'État de Droit
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Construire ensemble des institutions académiques justes, transparentes et démocratiques
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Nos Initiatives
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default EtatDeDroit
