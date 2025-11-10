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

      {/* Plateformes Numériques Concrètes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Plateformes Numériques Déployées
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-3xl font-bold mb-4">Campus AII LMS</h3>
              <p className="text-white/90 mb-6">
                Plateforme de gestion de l'apprentissage basée sur Moodle, personnalisée pour le réseau AII. Accessible 24/7 pour les étudiants, enseignants et administrateurs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>35 universités connectées</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>12,000+ utilisateurs actifs</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>500+ cours en ligne disponibles</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Taux de satisfaction : 89%</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                Accéder à Campus AII
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">📹</div>
              <h3 className="text-3xl font-bold mb-4">AII Classroom Pro</h3>
              <p className="text-white/90 mb-6">
                Solution de classe virtuelle synchrone utilisant Zoom Education avec fonctionnalités avancées : breakout rooms, enregistrement automatique, intégration LMS.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>1,200+ sessions par mois</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Jusqu'à 500 participants/session</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Enregistrements archivés (Cloud)</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Support technique 24/7</span>
                </div>
              </div>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Découvrir Classroom Pro
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-3xl font-bold mb-4">Bibliothèque Numérique AII</h3>
              <p className="text-white/90 mb-6">
                Accès centralisé à 50,000+ ressources académiques : livres, articles, thèses, revues scientifiques. Partenariats avec JSTOR, Cairn, Springer.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>50,000+ documents accessibles</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>8,500+ utilisateurs inscrits</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>200,000+ téléchargements/an</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Recherche avancée multicritères</span>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
                Explorer la bibliothèque
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8 rounded-2xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-3xl font-bold mb-4">AII Analytics Dashboard</h3>
              <p className="text-white/90 mb-6">
                Tableau de bord pour le pilotage pédagogique : taux d'achèvement, engagement étudiant, résultats d'apprentissage, indicateurs de performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Suivi en temps réel</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Rapports automatiques hebdomadaires</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Alertes prédictives (décrochage)</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✔️</span>
                  <span>Tableaux de bord personnalisables</span>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
                Voir le tableau de bord
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'Usage Concrets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Témoignages et Cas d'Usage
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🇸🇳</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Université Cheikh Anta Diop</h3>
                    <span className="ml-auto text-sm text-gray-500">Dakar, Sénégal</span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Campus AII LMS nous a permis de maintenir la continuité pédagogique pendant la pandémie et de transformer durablement nos pratiques d'enseignement. Nos 3,500 étudiants accèdent désormais à 120 cours en ligne."
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="font-semibold mr-2">Pr. Amadou Diallo</span>
                    <span className="text-gray-500">| Vice-Recteur chargé du Numérique</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">120 cours en ligne</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">3,500 étudiants</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">85% taux de complétion</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🇨🇮</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Université Félix Houphouët-Boigny</h3>
                    <span className="ml-auto text-sm text-gray-500">Abidjan, Côte d'Ivoire</span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "La bibliothèque numérique AII a révolutionné l'accès aux ressources scientifiques pour nos chercheurs. Plus besoin de se déplacer en Europe pour consulter les revues indexeés !"
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="font-semibold mr-2">Dr. Mariama Koffi</span>
                    <span className="text-gray-500">| Directrice de la Recherche</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">2,100+ chercheurs</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">45,000 documents consultés</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Gain de temps : 70%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🇨🇲</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">Université de Yaoundé I</h3>
                    <span className="ml-auto text-sm text-gray-500">Yaoundé, Cameroun</span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "AII Classroom Pro nous permet d'organiser des soutenances de thèse en visioconférence avec des jurys internationaux. La qualité audio-vidéo est excellente même avec une connexion limitée."
                  </p>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="font-semibold mr-2">Pr. Jean-Marc Kouassi</span>
                    <span className="text-gray-500">| Doyen de la Faculté des Sciences</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">85 soutenances en ligne</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Jurys de 15 pays</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">100% satisfaits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="py-20 bg-white">
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
