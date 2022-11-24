import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/styles.css';

function Objetos() {
  const objetosObtenidos = 0;
  return (
    <div className="Objetos">
      <p>Objetos obtenidos:</p>
      <p>{objetosObtenidos}</p>
      <div className="flex-item-picture"><img src={require('../imgs/rata_nueva.PNG')} alt="miguelito" /></div>

    </div>

  );
}
export default Objetos;
