import CallToAction from '../components/CallToAction'

const Education = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0064B0] to-[#0095D9] -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Éducation
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Transformer l'enseignement supérieur pour un avenir meilleur
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Vision de l'Éducation
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'éducation est au cœur de la mission de l'AII. Nous croyons que l'accès à une éducation de qualité est un droit fondamental et un levier essentiel pour le développement socio-économique.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Nos programmes visent à renforcer les capacités des institutions d'enseignement supérieur, à promouvoir l'innovation pédagogique et à garantir l'excellence académique.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous travaillons avec les universités partenaires pour développer des formations adaptées aux besoins du 21ème siècle et favoriser la mobilité étudiante.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                alt="Éducation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Programmes Éducatifs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#0095D9] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Formations Diplômantes</h3>
              <p className="text-gray-600">
                Masters et doctorats en partenariat avec des universités de renommée internationale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications Professionnelles</h3>
              <p className="text-gray-600">
                Programmes courts et intensifs pour le développement de compétences spécifiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Formation des Formateurs</h3>
              <p className="text-gray-600">
                Renforcement des capacités pédagogiques du corps professoral universitaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Académiques Spécifiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Programmes Académiques en Partenariat
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Master</span>
                    <span className="text-gray-600">2 ans | 120 ECTS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Master en Management de l'Enseignement Supérieur</h3>
                  <p className="text-gray-600 mb-4">
                    Programme conjoint avec l'Université Cheikh Anta Diop (Sénégal) et l'Université de Yaoundé I (Cameroun). Formation de futurs dirigeants d'institutions académiques en gouvernance, assurance qualité et stratégie universitaire.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Gouvernance Universitaire</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Assurance Qualité</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Politiques Éducatives</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    🎓 <strong>95 diplômés</strong> depuis 2021 | 📊 <strong>Taux d'insertion : 92%</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Doctorat</span>
                    <span className="text-gray-600">3-4 ans | Cotutelle internationale</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Programme Doctoral en Innovation Pédagogique</h3>
                  <p className="text-gray-600 mb-4">
                    Doctorats en cotutelle entre universités du réseau AII. Recherches sur les transformations de l'enseignement supérieur, l'innovation pédagogique, les technologies éducatives et les politiques universitaires en Afrique.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Pédagogie Numérique</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Didactique Universitaire</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Technologies Éducatives</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    🎓 <strong>45 thèses soutenues</strong> | 📚 <strong>120+ doctorants en cours</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-600">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">Licence</span>
                    <span className="text-gray-600">3 ans | 180 ECTS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Licence en Sciences de l'Éducation</h3>
                  <p className="text-gray-600 mb-4">
                    Programme mutualisé entre 10 universités partenaires avec modules communs et spécialisations locales. Formation initiale des futurs enseignants et spécialistes de l'éducation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Psychopédagogie</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Didactique</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Société et Éducation</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    🎓 <strong>300+ étudiants inscrits</strong> | 📊 <strong>Taux de réussite : 87%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats Universitaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Universités Partenaires d'Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Un réseau de 50+ institutions académiques de premier plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇸🇳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université Cheikh Anta Diop</h3>
              <p className="text-gray-600 text-sm mb-3">Dakar, Sénégal</p>
              <p className="text-gray-600 text-sm">Partenaire fondateur. Cohébergement du Master en Management de l'Enseignement Supérieur et du Campus AII Dakar.</p>
              <div className="mt-4 text-xs text-blue-600 font-semibold">Partenariat depuis 2020</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇨🇮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université Félix Houphouët-Boigny</h3>
              <p className="text-gray-600 text-sm mb-3">Abidjan, Côte d'Ivoire</p>
              <p className="text-gray-600 text-sm">Excellence en sciences exactes et naturelles. Accueil de doctorants AII en recherche collaborative et hôte du laboratoire d'innovation pédagogique.</p>
              <div className="mt-4 text-xs text-green-600 font-semibold">Partenariat depuis 2021</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇨🇲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université de Yaoundé I</h3>
              <p className="text-gray-600 text-sm mb-3">Yaoundé, Cameroun</p>
              <p className="text-gray-600 text-sm">Pôle d'excellence en recherche scientifique. Coordination du Programme Doctoral en Innovation Pédagogique et formation méthodologique.</p>
              <div className="mt-4 text-xs text-purple-600 font-semibold">Partenariat depuis 2020</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇲🇱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université des Sciences Sociales</h3>
              <p className="text-gray-600 text-sm mb-3">Bamako, Mali</p>
              <p className="text-gray-600 text-sm">Spécialisation en sciences humaines et sociales. Centre de ressources pédagogiques numériques et plateforme de formation à distance.</p>
              <div className="mt-4 text-xs text-orange-600 font-semibold">Partenariat depuis 2021</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇨🇩</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université de Kinshasa</h3>
              <p className="text-gray-600 text-sm mb-3">Kinshasa, RD Congo</p>
              <p className="text-gray-600 text-sm">Plus grande université francophone d'Afrique. Programmes de mobilité étudiante et échanges d'enseignants-chercheurs très actifs.</p>
              <div className="mt-4 text-xs text-red-600 font-semibold">Partenariat depuis 2022</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇫🇷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Université Paris-Saclay</h3>
              <p className="text-gray-600 text-sm mb-3">Paris, France (Diaspora)</p>
              <p className="text-gray-600 text-sm">Partenariat stratégique pour la formation doctorale, l'accueil de chercheurs africains et les projets de recherche de haut niveau.</p>
              <div className="mt-4 text-xs text-indigo-600 font-semibold">Partenariat depuis 2023</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Et 44 autres universités partenaires dans 15 pays</p>
            <button className="bg-[#0095D9] hover:bg-[#0077B6] text-white px-8 py-3 rounded-full font-semibold transition">
              Voir tous nos partenaires
            </button>
          </div>
        </div>
      </section>

      {/* Domaines d'Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Domaines d'Excellence
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Sciences & Technologies</h3>
              <p className="text-sm">Programmes innovants en STEM</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Sciences Humaines</h3>
              <p className="text-sm">Recherche en sciences sociales</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Économie & Gestion</h3>
              <p className="text-sm">Formation aux métiers du management</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Droit & Sciences Politiques</h3>
              <p className="text-sm">Excellence juridique et diplomatique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-r from-[#0064B0] to-[#0095D9] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Étudiants formés</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl">Universités partenaires</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-xl">Programmes actifs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15</div>
              <p className="text-xl">Pays couverts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Education
