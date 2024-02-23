import '../../styles/FeaturedWork.css'
import projet1 from '../../assets/projet1.png'
import projet2 from '../../assets/projet2.png'
import projet3 from '../../assets/projet3.png'
import { Link } from 'react-router-dom'


function FeaturedWork(){
    return(
        <section className='featurWork joseph Kossouvi jojoksv'>
            <div className='featured joseph Kossouvi jojoksv'>
                <span>Featured <strong>Work</strong></span>
                <Link to="/Works">ALL MY WORK</Link>
            </div>
            <div className='projetIMG joseph Kossouvi jojoksv'>
                <div className='projectItem'>
                    <img src={projet1} alt=" projet jojoksv joseph Kossouvi jojoksv" />
                    <div className='autrePro'>
                        <div className='imgprojet23'><img src={projet2} alt="projet2 joseph Kossouvi jojoksv" /></div>
                        <div className='imgprojet23'><img src={projet3} alt="projet3 joseph Kossouvi jojoksv" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedWork;
