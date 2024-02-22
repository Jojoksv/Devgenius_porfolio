
import MySelf from '../../assets/mySelf.jpg'
import '../../styles/FirstContainer.css'


function FirstContainer(){
    return(
        <div className='firstContentContainer'>
            <div className="background">
                <div className='on-descr'></div>
            </div>
            <div className="FirstContainer">
                <p>
                    Hi there, I am DevGenius and i am a web developer, 
                    a mobile application developer and a unity game developer 
                    based in Burkina Faso. I am ready to assist you as a developer 
                    to bring your projects to life by creating 
                    exeptional visual experiences.
                </p>
                <img src={MySelf} alt="" />
            </div>
        </div>
    )
}
export default FirstContainer