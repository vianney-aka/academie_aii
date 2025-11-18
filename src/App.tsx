import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderPremium from './components/HeaderPremium'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProgressBar from './components/ProgressBar'
import Home from './pages/Home'
import ProgrammeVEA from './pages/ProgrammeVEA'
import Gouvernance from './pages/Gouvernance'
import Formations from './pages/Formations'
import Recherche from './pages/Recherche'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import QuiSommesNous from './pages/QuiSommesNous'
import Education from './pages/Education'
import Environnement from './pages/Environnement'
import Culture from './pages/Culture'
import Numerique from './pages/Numerique'
import Ethique from './pages/Ethique'
import EtatDeDroit from './pages/EtatDeDroit'
import Seminaires from './pages/Seminaires'
import ForumPPP from './pages/ForumPPP'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import Elearning from './pages/Elearning'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ProgressBar />
        <HeaderPremium />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme-vea" element={<ProgrammeVEA />} />
          <Route path="/gouvernance" element={<Gouvernance />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/education" element={<Education />} />
          <Route path="/environnement" element={<Environnement />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/numerique" element={<Numerique />} />
          <Route path="/ethique" element={<Ethique />} />
          <Route path="/etat-de-droit" element={<EtatDeDroit />} />
          <Route path="/seminaires" element={<Seminaires />} />
          <Route path="/forum-ppp" element={<ForumPPP />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/elearning" element={<Elearning />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
