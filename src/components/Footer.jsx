import '../styles/Footer.css'


function Footer(){
    return(
        <footer>
            <div className="footerFooter">
                <div className='footerTitle'>
                    <div className="footerdoted"></div>
                    <h1>DEV<span>GENIUS</span></h1>
                </div>
                <div className='AboutMe'>
                    <span>BURKINA FASO, Ouagadougou</span>
                    <a href="tel:+22656146917">Tel: +226 56146917</a>
                    <a href="mailto:jkossouvi@gmail.com">jkossouvi@gmail.com</a>
                    <div className='socialMedia'>

                    </div>
                </div>
            </div>
            <div>
                <span>© By <strong>Joseph KOSSOUVI</strong></span>
            </div>
        </footer>
    )
}
export default Footer