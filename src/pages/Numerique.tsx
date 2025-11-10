import CallToAction from '../components/CallToAction'

const Numerique = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-indigo-900 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Numérique
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Accélérer la transformation numérique de l'enseignement supérieur
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                La Révolution Numérique au Service de l'Éducation
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII accompagne la transformation numérique des universités africaines pour garantir un accès équitable aux technologies éducatives et aux ressources numériques.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Nos programmes visent à développer les infrastructures numériques, à former aux compétences digitales et à promouvoir l'innovation technologique dans l'enseignement.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous croyons que le numérique est un levier essentiel pour démocratiser l'accès au savoir et améliorer la qualité de l'éducation.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" 
                alt="Numérique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Solutions Numériques
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plateformes d'e-Learning</h3>
              <p className="text-gray-600">
                Développement et déploiement de plateformes de formation en ligne pour l'enseignement à distance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications Éducatives</h3>
              <p className="text-gray-600">
                Création d'applications mobiles pour faciliter l'apprentissage et l'accès aux ressources académiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Académique</h3>
              <p className="text-gray-600">
                Infrastructure cloud pour le stockage, le partage et la collaboration sur les travaux académiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Axes Stratégiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Axes Stratégiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🎓 Formation Numérique</h3>
              <ul className="space-y-2">
                <li>• Cours en ligne (MOOCs)</li>
                <li>• Certifications numériques</li>
                <li>• Formation aux outils digitaux</li>
                <li>• Pédagogie innovante</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🔬 Recherche & Innovation</h3>
              <ul className="space-y-2">
                <li>• Intelligence artificielle</li>
                <li>• Big Data & Analytics</li>
                <li>• Internet des Objets (IoT)</li>
                <li>• Blockchain académique</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🌐 Infrastructure Digitale</h3>
              <ul className="space-y-2">
                <li>• Connectivité internet</li>
                <li>• Équipement informatique</li>
                <li>• Salles multimédias</li>
                <li>• Cybersécurité</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">📚 Ressources Numériques</h3>
              <ul className="space-y-2">
                <li>• Bibliothèques digitales</li>
                <li>• Bases de données scientifiques</li>
                <li>• Contenus éducatifs ouverts</li>
                <li>• Archives numériques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Digitales */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Développement des Compétences Digitales
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Former la prochaine génération de leaders technologiques africains
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">👨‍💻</div>
              <p className="font-semibold">Programmation</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="font-semibold">Data Science</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">🔐</div>
              <p className="font-semibold">Cybersécurité</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">🎨</div>
              <p className="font-semibold">Design UX/UI</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center">
              <div className="text-4xl mb-3">🤖</div>
              <p className="font-semibold">IA & ML</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre Impact Numérique
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-xl text-gray-600">Plateformes déployées</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-indigo-600 mb-2">50,000+</div>
              <p className="text-xl text-gray-600">Étudiants connectés</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-cyan-600 mb-2">500+</div>
              <p className="text-xl text-gray-600">Cours en ligne</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-purple-600 mb-2">40</div>
              <p className="text-xl text-gray-600">Universités équipées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Numerique
