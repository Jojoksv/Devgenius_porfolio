
import '../../styles/ThreeSliders.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import projet1 from '../../assets/projet1.png'
import projet2 from '../../assets/projet2.png'
import projet3 from '../../assets/projet3.png'
import projet4 from '../../assets/projet4.png'
import projet5 from '../../assets/projet5.png'
import projet6 from '../../assets/projet6.png'
import projet7 from '../../assets/projet7.png'
import projet8 from '../../assets/projet8.png'
import projet9 from '../../assets/projet9.png'
import projet10 from '../../assets/projet10.png'
import projet11 from '../../assets/projet11.png'
import projet12 from '../../assets/projet12.png'
import projet13 from '../../assets/projet13.png'
import projet14 from '../../assets/projet14.png'
import projet15 from '../../assets/projet15.png'


function FeaturedWork(){
    
  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbar');
    const content = document.querySelector('.scroll');

    content.innerHTML += content.innerHTML;

    // Ajustez la vitesse du défilement en modifiant cette variable
    const scrollSpeed = 1;

    function scroll() {
      scrollContainer.scrollLeft >= content.scrollWidth / 2
        ? (scrollContainer.scrollLeft -= content.scrollWidth / 2)
        : (scrollContainer.scrollLeft += scrollSpeed);
      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbarRight');
    const content = document.querySelector('.scrollRight');
  
    content.innerHTML += content.innerHTML;
  
    // Ajustez la vitesse du défilement en modifiant cette variable
    const scrollSpeed = 1;
  
    function scrollRight() {
      scrollContainer.scrollLeft <= 0
        ? (scrollContainer.scrollLeft += content.scrollWidth / 2)
        : (scrollContainer.scrollLeft -= scrollSpeed);
      requestAnimationFrame(scrollRight);
    }
  
    scrollRight();
  }, []);
  
  useEffect(() => {
    const scrollContainer = document.querySelector('.scrollbarLeftA');
    const content = document.querySelector('.scrollLeftA');

    content.innerHTML += content.innerHTML;

    // Ajustez la vitesse du défilement en modifiant cette variable
    const scrollSpeed = 1;

    function scroll() {
      scrollContainer.scrollLeft >= content.scrollWidth / 2
        ? (scrollContainer.scrollLeft -= content.scrollWidth / 2)
        : (scrollContainer.scrollLeft += scrollSpeed);
      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

    return(
       <main>
        <div className='hireMe joseph Kossouvi jojoksv devgenius'>
          <div className='hireBack'>
            <h1>Become a Sponsor</h1>
            <span>Grow your reach by supporting the event and show to more than 20k people who you are.</span>
            <Link to="/Contact"><button>LET&apos;S TALK</button></Link>
          </div>
        </div>

        <div className="scrollbar joseph Kossouvi jojoksv devgenius">
          <div className="scroll taille">
            <img src={projet1} alt="joseph Kossouvi jojoksv devgenius" />
            <img src={projet2} alt="joseph Kossouvi jojoksv devgenius" />
            <img src={projet3} alt="joseph Kossouvi jojoksv devgenius" />
            <img src={projet4} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet5} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet6} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
          </div>
        </div>

        <div className="scrollbarRight">
          <div className="scrollRight taille">
            <img src={projet7} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet8} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet9} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet10} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet11} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet12} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
          </div>
        </div>

        <div className="scrollbarLeftA">
          <div className="scrollLeftA taille">
            <img src={projet13} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet14} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet15} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet6} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet2} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
            <img src={projet1} alt="projetdevgenius joseph Kossouvi jojoksv devgenius" />
          </div>
        </div>
      </main>
    )
}

export default FeaturedWork
