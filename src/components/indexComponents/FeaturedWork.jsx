import '../../styles/FeaturedWork.css'
import projet1 from '../../assets/projet1.png'
import projet2 from '../../assets/projet2.png'
import projet3 from '../../assets/projet3.png'


function FeaturedWork(){
    return(
        <section className='featurWork'>
            <div className='featured'>
                <span>Featured <strong>Work</strong></span>
                <a href="/Works">ALL MY WORK</a>
            </div>
            <div className='projetIMG'>
                <div className='projectItem'>
                    <img src={projet1} alt="" />
                    <div className='autrePro'>
                        <div className='imgprojet23'><img src={projet2} alt="projet2" /></div>
                        <div className='imgprojet23'><img src={projet3} alt="projet3" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedWork;