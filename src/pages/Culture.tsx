import CallToAction from '../components/CallToAction'

const Culture = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 to-purple-900 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Culture
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Préserver et valoriser la diversité culturelle africaine et mondiale
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                La Culture au Cœur de Notre Mission
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII reconnaît la culture comme un pilier fondamental du développement humain et de la cohésion sociale. Nous œuvrons pour la préservation et la promotion des patrimoines culturels matériels et immatériels.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Nos programmes culturels visent à valoriser la diversité culturelle africaine, à encourager le dialogue interculturel et à soutenir les industries créatives.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous accompagnons les initiatives de sauvegarde du patrimoine, de développement des arts et de promotion de l'éducation culturelle.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=600&fit=crop" 
                alt="Culture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Domaines d'Action
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patrimoine Culturel</h3>
              <p className="text-gray-600">
                Préservation et restauration des sites historiques et monuments du patrimoine africain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arts Vivants</h3>
              <p className="text-gray-600">
                Soutien aux artistes et promotion du théâtre, de la danse, de la musique et des arts performatifs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries Créatives</h3>
              <p className="text-gray-600">
                Développement de l'économie créative, cinéma, mode, design et médias culturels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Culturels Concrets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Projets Culturels en Action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-3xl font-bold mb-4">Atlas du Patrimoine Universitaire Africain</h3>
              <p className="text-white/90 mb-6">
                Plateforme numérique répertoriant 3,500+ éléments du patrimoine matériel et immatériel de 25 universités africaines : archives, collections scientifiques, savoirs traditionnels, architecture.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center"><span className="mr-2">✓</span> 25 universités documentées</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 3,500+ éléments patrimoniaux</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 450 fiches publiées</div>
                <div className="flex items-center"><span className="mr-2">✓</span> Accès gratuit et open source</div>
              </div>
              <div className="text-sm text-white/80">🌐 atlas-patrimoine.aii-academie.org</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-3xl font-bold mb-4">Festival Interuniversitaire des Arts</h3>
              <p className="text-white/90 mb-6">
                Événement annuel itinérant : spectacles, expositions, conférences, masterclass. 2 éditions organisées (Dakar 2023, Abidjan 2024), prochaine à Yaoundé 2025.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center"><span className="mr-2">✓</span> 120 artistes participants</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 5,000+ visiteurs/édition</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 15 pays représentés</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 30 spectacles présentés</div>
              </div>
              <div className="text-sm text-white/80">🎪 Prochaine édition : Yaoundé, 15-22 juin 2025</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-4">Programme Numérisation Patrimoine</h3>
              <p className="text-white/90 mb-6">
                Numérisation de manuscrits anciens, thèses historiques, revues scientifiques, photos d'archives. Partenariat Internet Archive et BnF.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center"><span className="mr-2">✓</span> 12,000 documents numérisés</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 450 manuscrits anciens</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 1,200 thèses de doctorat</div>
                <div className="flex items-center"><span className="mr-2">✓</span> Accès mondial garanti</div>
              </div>
              <div className="text-sm text-white/80">💰 Budget : 350,000€ (AFD + UNESCO)</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4">Chaires UNESCO Cultures Africaines</h3>
              <p className="text-white/90 mb-6">
                3 chaires UNESCO : Patrimoine Immatériel (Dakar), Arts Contemporains (Abidjan), Langues et Multilinguisme (Yaoundé). Enseignement, recherche et diffusion.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center"><span className="mr-2">✓</span> 3 chaires UNESCO actives</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 18 enseignants-chercheurs</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 80+ étudiants Master/Doctorat</div>
                <div className="flex items-center"><span className="mr-2">✓</span> 45 publications scientifiques</div>
              </div>
              <div className="text-sm text-white/80">🤝 Partenaire officiel UNESCO (Secteur Culture)</div>
            </div>
          </div>

          {/* Événements 2025 */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Agenda Culturel 2025</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border-l-4 border-purple-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-purple-600">15-22 Juin</span>
                    <h4 className="font-bold text-gray-900">Festival Arts Universitaires</h4>
                    <p className="text-sm text-gray-600">Yaoundé, Cameroun</p>
                  </div>
                  <span className="text-2xl">🎭</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-blue-600">5-7 Sept</span>
                    <h4 className="font-bold text-gray-900">Colloque Patrimoine & Numérique</h4>
                    <p className="text-sm text-gray-600">Dakar, Sénégal</p>
                  </div>
                  <span className="text-2xl">💻</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border-l-4 border-orange-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-orange-600">20-25 Oct</span>
                    <h4 className="font-bold text-gray-900">Semaine Cinéma Universitaire</h4>
                    <p className="text-sm text-gray-600">Multi-campus</p>
                  </div>
                  <span className="text-2xl">🎥</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border-l-4 border-green-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-green-600">10-12 Déc</span>
                    <h4 className="font-bold text-gray-900">Forum Langues Africaines</h4>
                    <p className="text-sm text-gray-600">Abidjan, Côte d'Ivoire</p>
                  </div>
                  <span className="text-2xl">🗣️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Langues et Diversité */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Diversité Linguistique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Promouvoir le multilinguisme et la préservation des langues africaines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🗣️</div>
              <h4 className="font-bold text-lg mb-2">2000+</h4>
              <p className="text-gray-600">Langues africaines</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">📝</div>
              <h4 className="font-bold text-lg mb-2">Documentation</h4>
              <p className="text-gray-600">Préservation linguistique</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="font-bold text-lg mb-2">Formation</h4>
              <p className="text-gray-600">Traducteurs & interprètes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="font-bold text-lg mb-2">Multilinguisme</h4>
              <p className="text-gray-600">Éducation plurilingue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Culture
