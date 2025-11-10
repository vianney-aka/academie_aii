import CallToAction from '../components/CallToAction'

const Ethique = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-amber-600 to-orange-900 -mt-[180px] pt-[250px]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Éthique
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Promouvoir l'intégrité académique et les valeurs éthiques dans l'enseignement et la recherche
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'Éthique au Cœur de l'Excellence
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  L'AII place l'éthique au centre de sa mission. Nous promouvons l'intégrité académique, la déontologie professionnelle et les principes éthiques dans toutes nos activités.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Notre engagement éthique se traduit par la promotion de la transparence, de l'honnêteté intellectuelle et du respect des principes moraux dans l'enseignement, la recherche et la gouvernance universitaire.
                </p>
                <p className="text-xl leading-relaxed">
                  Nous accompagnons les institutions dans l'élaboration et la mise en œuvre de codes éthiques, de chartes déontologiques et de mécanismes de régulation éthique.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                alt="Éthique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principes Éthiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Principes Éthiques Fondamentaux
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intégrité Académique</h3>
              <p className="text-gray-600">
                Lutte contre le plagiat, valorisation de l'honnêteté intellectuelle et respect de la propriété intellectuelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité Sociale</h3>
              <p className="text-gray-600">
                Engagement pour le bien commun, justice sociale et contribution au développement durable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparence</h3>
              <p className="text-gray-600">
                Gouvernance ouverte, redevabilité et accès à l'information pour tous les acteurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Intervention */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Domaines d'Intervention Éthique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🔬 Éthique de la Recherche</h3>
              <ul className="space-y-2">
                <li>• Comités d'éthique de la recherche</li>
                <li>• Protection des participants</li>
                <li>• Gestion des données sensibles</li>
                <li>• Publication responsable</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🤖 Éthique du Numérique & IA</h3>
              <ul className="space-y-2">
                <li>• Intelligence artificielle responsable</li>
                <li>• Protection des données personnelles</li>
                <li>• Algorithmes équitables</li>
                <li>• Utilisation éthique des technologies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">📝 Éthique Professionnelle</h3>
              <ul className="space-y-2">
                <li>• Déontologie enseignante</li>
                <li>• Conduite professionnelle</li>
                <li>• Conflits d'intérêts</li>
                <li>• Responsabilité pédagogique</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">🌍 Éthique Environnementale</h3>
              <ul className="space-y-2">
                <li>• Responsabilité écologique</li>
                <li>• Recherche environnementale</li>
                <li>• Campus durables</li>
                <li>• Éco-citoyenneté académique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Éthique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Formation à l'Éthique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développer une culture éthique forte au sein des institutions académiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modules de Formation</h3>
              <p className="text-gray-600">
                Cours et ateliers sur l'éthique académique, la recherche responsable et l'intégrité scientifique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certifications</h3>
              <p className="text-gray-600">
                Programmes de certification en éthique de la recherche et déontologie professionnelle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sensibilisation</h3>
              <p className="text-gray-600">
                Campagnes de sensibilisation et événements sur les enjeux éthiques contemporains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comités d'Éthique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Comités d'Éthique
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                  ⚖️
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Comité Central d'Éthique (CCE)</h3>
                  <p className="text-gray-600 mb-4">
                    Instance de régulation éthique pour l'ensemble du réseau AII. Évalue les projets de recherche sensibles, supervise les codes de conduite et traite les alertes éthiques.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-amber-600 mb-1">Composition</div>
                      <div className="text-sm text-gray-700">15 membres (chercheurs, juristes, représentants société civile)</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-amber-600 mb-1">Réunions</div>
                      <div className="text-sm text-gray-700">Mensuel + sessions extraordinaires si nécessaire</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-amber-600 mb-1">Dossiers traités</div>
                      <div className="text-sm text-gray-700">120+ projets évalués depuis 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                  🔬
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Comité d'Éthique de la Recherche (CER)</h3>
                  <p className="text-gray-600 mb-4">
                    Spécialisé dans l'évaluation éthique des protocoles de recherche impliquant des humains, des animaux ou des données sensibles. Certification conforme aux standards internationaux.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-blue-600 mb-1">Composition</div>
                      <div className="text-sm text-gray-700">12 experts (bioéthiciens, médecins, juristes)</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-blue-600 mb-1">Certification</div>
                      <div className="text-sm text-gray-700">Agréé OMS et conformé Déclaration Helsinki</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-blue-600 mb-1">Protocoles évalués</div>
                      <div className="text-sm text-gray-700">250+ projets approuvés depuis 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mr-6">
                  💻
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Comité Éthique Numérique & IA (CENIA)</h3>
                  <p className="text-gray-600 mb-4">
                    Évalue l'utilisation éthique des technologies numériques, de l'intelligence artificielle et des algorithmes dans l'enseignement et la recherche. Créé en 2024.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-green-600 mb-1">Composition</div>
                      <div className="text-sm text-gray-700">10 experts (data scientists, juristes RGPD)</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-green-600 mb-1">Focus</div>
                      <div className="text-sm text-gray-700">IA responsable, protection données, biais algorithmes</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-sm font-bold text-green-600 mb-1">Outils développés</div>
                      <div className="text-sm text-gray-700">Grilles évaluation IA, guides bonnes pratiques</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charte Éthique Détaillée */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Charte Éthique AII (Version 2.0 - 2025)
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-900 text-white p-8">
              <h3 className="text-3xl font-bold mb-4">Les 10 Engagements Fondamentaux</h3>
              <p className="text-white/90">Adoptée par l'Assemblée Générale le 15 juillet 2025</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Intégrité Académique</h4>
                    <p className="text-sm text-gray-600">Lutte active contre le plagiat, fraude et falsification de données</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Protection des Participants</h4>
                    <p className="text-sm text-gray-600">Consentement éclairé, confidentialité et respect de la dignité humaine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Transparence Financière</h4>
                    <p className="text-sm text-gray-600">Déclaration des conflits d'intérêts et traçabilité des fonds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Respect de la Diversité</h4>
                    <p className="text-sm text-gray-600">Non-discrimination, égalité des chances et inclusion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Responsabilité Environnementale</h4>
                    <p className="text-sm text-gray-600">Recherche éco-responsable et campus durables</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Protection Données Personnelles</h4>
                    <p className="text-sm text-gray-600">Conformité RGPD et sécurisation des informations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">7</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">IA Responsable</h4>
                    <p className="text-sm text-gray-600">Algorithmes transparents, équitables et non-biaisés</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">8</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Propriété Intellectuelle</h4>
                    <p className="text-sm text-gray-600">Respect des droits d'auteur et valorisation éthique</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">9</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Liberté Académique</h4>
                    <p className="text-sm text-gray-600">Protection de l'indépendance scientifique et expression libre</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-3">10</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Redevabilité</h4>
                    <p className="text-sm text-gray-600">Rapports publics, audits et mécanismes de contrôle</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center">
                <button className="bg-gradient-to-r from-amber-600 to-orange-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition">
                  📎 Télécharger la Charte Complète (PDF)
                </button>
                <p className="text-sm text-gray-500 mt-3">Disponible en français, anglais, portugais et arabe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procédures de Signalement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Signaler un Manquement Éthique
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plateforme de Signalement</h3>
              <p className="text-gray-600 mb-4">Formulaire sécurisé et confidentiel accessible 24/7</p>
              <div className="text-sm text-gray-700">
                <strong>Email :</strong> ethique@aii-academie.org<br/>
                <strong>Garantie :</strong> Anonymat protégé
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border-2 border-yellow-200">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Délai de Traitement</h3>
              <p className="text-gray-600 mb-4">Accusé de réception sous 48h, évaluation sous 15 jours</p>
              <div className="text-sm text-gray-700">
                <strong>Suivi :</strong> Numéro de dossier<br/>
                <strong>Réponse :</strong> Décision motivée
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Protection des Lanceurs d'Alerte</h3>
              <p className="text-gray-600 mb-4">Aucune représaille, protection juridique garantie</p>
              <div className="text-sm text-gray-700">
                <strong>Loi :</strong> Conforme directive UE<br/>
                <strong>Accompagnement :</strong> Juridique si nécessaire
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  )
}

export default Ethique
