import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurTeam from './pages/OurTeam'
import GetInvolved from './pages/GetInvolved'
import Gallery from './pages/Gallery'
import Partners from './pages/Partners'
import Donate from './pages/Donate'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App