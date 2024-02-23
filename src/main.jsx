import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation  } from 'react-router-dom'
import Error from './components/Error.jsx';
import Index from './pages/Index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Works from './pages/works.jsx'
import Contact from './pages/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Navigate to="/Error" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
