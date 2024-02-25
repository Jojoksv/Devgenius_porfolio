
import '../styles/Contact.css'

import { useState } from 'react';
import axios from 'axios';

import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import gmail from '../assets/gmail.svg'


function Contact() {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Envoi des données du formulaire au serveur
        axios.post('http://localhost:3000/Mail.php', {
            nom: nom,
            email: email,
            message: message
        })
        .then((response) => {
            console.log(response.data);
            // Traitez la réponse du serveur ici si nécessaire
        })
        .catch((error) => {
            console.error('Une erreur s\'est produite:', error);
        });
    };


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
                                <img src={linkedin} alt="joseph kossouvi linkedin" />
                            </a>
                            <a href="https://www.facebook.com/joseph.kossouvi" target="_blank">
                                <img src={facebook} alt="joseph kossouvi facebook" />
                            </a>
                            <a href="mailto:jkossouvi@gmail.com">
                                <img src={gmail} alt="joseph kossouvi emal" />
                            </a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="" id="" placeholder='Name' value={nom} onChange={(e) => setNom(e.target.value)}/>
                        <input type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea name="" id="" cols="30" rows="6" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact