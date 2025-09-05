import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router';
import './index.css'
import MainLayout from './common/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Solution from './pages/Solution.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';


createRoot(document.getElementById('root')).render(

  <HashRouter basename="/Blown-Insulation">
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="solution" element={<Solution />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>

)
