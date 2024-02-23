
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Error.css'

function Error() {
    const navigateTo = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        const previousPage = location.state?.from || '/';
        navigateTo(previousPage);
    };


  return (
    <div className='errorcss'>
      <h1>Oups... Page non trouvée</h1>
      <p>Il semblerait que la page que vous cherchez n’existe pas.</p>
      <button onClick={handleGoBack}>Revenir en arrière</button>
    </div>
  );
}

export default Error;
