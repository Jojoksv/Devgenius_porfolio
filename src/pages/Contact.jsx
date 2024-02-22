
import '../styles/Contact.css'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import gmail from '../assets/gmail.svg'


function Contact() {
    return(
        <div>
            <div className='contactinner'>
                <div className='letstalk'>
                    <div className='backcolor'></div>
                    <h1>Let&apos;s <span>Talk ...</span></h1>
                    <p>I am always eager to hear from my visitors, whether you have a question, feedback, or just want to say hello. Here&apos;s how you can get in rouch with me</p>
                </div>
                <div className='classContainer'>
                    <div className='contactMeLinks'>
                        <div className='contentLinks'>
                            <span>Email</span>
                            <a href="mailto:jkossouvi@gmail.com">jkossouvi@gmail.com</a>
                        </div>
                        <div className='contentLinks'>
                            <span>Phone</span>
                            <a href="tel:+22656146917">+226 56146917</a>
                        </div>
                        <div className='contentLinks'>
                            <span>Address</span>
                            <span>Burkina Faso, Ouagadougou, Cissin</span>
                        </div>
                        <div className='socialMedia'>
                            <a href="https://www.linkedin.com/in/joseph-kossouvi-19968320a" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://www.facebook.com/joseph.kossouvi" target="_blank">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="mailto:jkossouvi@gmail.com">
                                <img src={gmail} alt="" />
                            </a>
                        </div>
                    </div>
                    <form>
                        <input type="text" name="" id="" placeholder='Name'/>
                        <input type="email" name="" id="" placeholder='Email'/>
                        <textarea name="" id="" cols="30" rows="6" placeholder='Message' />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact