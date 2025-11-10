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

      {/* Initiatives Culturelles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Initiatives Phares
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">🌍 Atlas Culturel Africain</h3>
              <p className="text-lg">
                Cartographie interactive du patrimoine culturel matériel et immatériel du continent africain.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">🎨 Festival des Arts Universitaires</h3>
              <p className="text-lg">
                Événement annuel réunissant artistes et étudiants pour célébrer la créativité africaine.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">📖 Bibliothèque Numérique du Patrimoine</h3>
              <p className="text-lg">
                Numérisation et mise en ligne de documents historiques, manuscrits anciens et archives culturelles.
              </p>
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
