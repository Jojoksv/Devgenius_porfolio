import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Works from './pages/works.jsx'
import Contact from './pages/Contact.jsx'
import Error from './components/Error'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' element={<Index />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
        <Route>
              <Error />
            </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
)
