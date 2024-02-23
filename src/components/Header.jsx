import { useEffect } from 'react';
import '../styles/Header.css';

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
    <header className='headerHead'>
      <div className='toogleHover'>
        <div className='linkList'>
          <a href="/About" className='applyLink'>about</a>
          <a href="/Works" className='applyLink'>work</a>
          <a href="/Contact" className='applyLink'>contact</a>
          <a href="/"><div className='headerSTitle'>
              <div className="doted"></div>
              <h1>DEV<span>GENIUS</span></h1>
          </div>
          </a>
        </div>
      </div>
        <nav className='headernav'>
            <a href="/">
              <div className='headerTitle'>
                  <div className="doted"></div>
                  <h1>DEV<span>GENIUS</span></h1>
              </div>
            </a>
            <div className='headerMenu'>
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
