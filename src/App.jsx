import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import SpecificVenue from './pages/SpecificVenue'
import ContactPage from './pages/Contact'
import Terms from './pages/Terms'
import Register from './pages/Register'
import AllVenues from './pages/Venues'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SpecificVenue />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/venues" element={<AllVenues />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
