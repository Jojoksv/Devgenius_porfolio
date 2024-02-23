import { useEffect } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom'

function Header() {
  useEffect(() => {
    const hamburgers = document.querySelectorAll(".hamburger");
    

    const toggleActive = function() {
      this.classList.toggle("is-active");
    };
 
    if (hamburgers.length > 0) {
      hamburgers.forEach(hamburger => {
        hamburger.addEventListener("click", toggleActive);
      });
    }
    return () => {
      if (hamburgers.length > 0) {
        hamburgers.forEach(hamburger => {
          hamburger.removeEventListener("click", toggleActive);
        });
      }
    };
  }, []);

  function openHover() {
    const linkHover = document.querySelectorAll(".toogleHover");
    linkHover.forEach(element => {
      element.classList.toggle('custom-class');
    });
  }
  

  return (
    <header className='headerHead projetdevgenius joseph Kossouvi jojoksv devgenius'>
      <div className='toogleHover projetdevgenius joseph Kossouvi jojoksv devgenius'>
        <div className='linkList'>
          <Link to="/About" className='applyLink'>about</Link>
          <Link to="/Works" className='applyLink'>work</Link>
          <Link to="/Contact" className='applyLink'>contact</Link>
          <Link to="/"><div className='headerSTitle'>
              <div className="doted"></div>
              <h1>DEV<span>GENIUS</span></h1>
          </div>
          </Link>
        </div>
      </div>
        <nav className='headernav'>
            <Link to="/">
              <div className='headerTitle'>
                  <div className="doted"></div>
                  <h1>DEV<span>GENIUS</span></h1>
              </div>
            </Link>
            <div className='headerMenu projetdevgenius joseph Kossouvi jojoksv devgenius'>
                <span className='menu'>menu</span>
                <button className="hamburger hamburger--spring" type="button" onClick={openHover}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </nav>
    </header>
  );
}

export default Header;
