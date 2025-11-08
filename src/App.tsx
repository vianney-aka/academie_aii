import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ProgressBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme-vea" element={<ProgrammeVEA />} />
          <Route path="/gouvernance" element={<Gouvernance />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
