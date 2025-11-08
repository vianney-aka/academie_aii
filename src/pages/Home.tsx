import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'
import NewsGrid from '../components/NewsGrid'
import StatsCards from '../components/StatsCards'
import ArticleCard from '../components/ArticleCard'
import VideoSection from '../components/VideoSection'
import HighlightSection from '../components/HighlightSection'
import CallToAction from '../components/CallToAction'
import { NEWS_ITEMS, ACTIVITIES_ITEMS, CONTENT_SECTIONS } from '../data/constants'

const Home = () => {
  const articles = [
    {
      title: "Lancement officiel du programme VEA",
      excerpt: "Un moment historique pour l'enseignement supérieur africain : le programme Valorisation de l'Excellence Africaine démarre officiellement avec 15 universités partenaires réparties dans 8 pays. Ce dispositif innovant vise à renforcer les capacités académiques, promouvoir la mobilité scientifique et valoriser les compétences africaines sur la scène internationale.",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      category: "Programme VEA",
      date: "15 Juil 2025",
      featured: true
    },
    {
      title: "Assemblée Générale 2025 : Cap sur l'avenir",
      excerpt: "L'Assemblée Générale de juillet 2025 a adopté la stratégie 2025-2030 de l'AII. Au programme : renforcement de la coopération interuniversitaire, élargissement du réseau à 20 pays et création d'un fonds d'innovation pédagogique. Une feuille de route ambitieuse pour transformer l'enseignement supérieur en Afrique.",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
      category: "Gouvernance",
      date: "20 Juil 2025"
    },
    {
      title: "Formation continue : trois parcours certifiants lancés",
      excerpt: "L'AII enrichit son offre de formation avec trois nouveaux parcours certifiants destinés aux enseignants-chercheurs : Pédagogie numérique avancée, Méthodologie de la recherche collaborative et Management académique. Ces formations, délivrées en format hybride, combinent expertise scientifique et pratiques innovantes.",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
      category: "Formation",
      date: "10 Oct 2025"
    },
    {
      title: "10 nouvelles universités rejoignent le réseau AII",
      excerpt: "Extension stratégique de notre réseau académique avec l'adhésion de dix institutions d'excellence : universités publiques d'Afrique de l'Ouest, institutions privées d'Afrique centrale et établissements de la diaspora. Cette dynamique de coopération renforce notre capacité d'action et notre rayonnement international.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Partenariats",
      date: "05 Nov 2025"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* First Content Section */}
      <ContentSection {...CONTENT_SECTIONS[0]} />

      {/* Highlight Section */}
      <HighlightSection />

      {/* Second Content Section */}
      <ContentSection {...CONTENT_SECTIONS[1]} />

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
            <p className="text-xl text-gray-600">Les dernières nouvelles de l'AII</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <NewsGrid 
        title="Nous œuvrons sur les continents"
        items={NEWS_ITEMS}
      />

      {/* Video Section */}
      <VideoSection 
        title="Notre impact sur l'enseignement supérieur africain"
        description="Découvrez comment l'AII contribue à la transformation des universités africaines. À travers nos programmes de formation, nos projets de recherche collaborative et notre réseau d'excellence, nous cultivons l'innovation pédagogique, renforçons les capacités institutionnelles et valorisons les talents scientifiques du continent. Témoignages, chiffres clés et perspectives d'avenir."
        videoThumbnail="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
      />

      {/* Stats Cards */}
      <StatsCards />

      {/* Third Content Section */}
      <ContentSection {...CONTENT_SECTIONS[2]} />

      {/* Call to Action */}
      <CallToAction />

      {/* Fourth Content Section */}
      <ContentSection {...CONTENT_SECTIONS[3]} />

      {/* Activities Grid */}
      <NewsGrid 
        title="Événements à venir"
        items={ACTIVITIES_ITEMS}
      />
    </>
  )
}

export default Home
