
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigateTo = useNavigate();

  const handleGoBack = () => {
    navigateTo(-1);
  };

  return (
    <div>
      <h1>Oups... Page non trouvée</h1>
      <p>Il semblerait que la page que vous cherchez n’existe pas.</p>
      <button onClick={handleGoBack}>Revenir en arrière</button>
    </div>
  );
}

export default Error;
