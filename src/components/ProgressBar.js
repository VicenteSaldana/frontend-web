import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/styles.css';


function Vida() {
    const vida_healer = 70;
    const vida_mago = 15;
    const vida_tanque = 30;
    return (
      <div className = "BarrasVida">
        <div>
        <h5>Vida Healer</h5>
        <ProgressBar variant="success" now={vida_healer} label={`${vida_healer}%`}/>
        </div>
        <div>
        <h5>Vida Mago</h5>
        <ProgressBar variant="danger" now={vida_mago}  label={`${vida_mago}%`}/>
        </div>
        <div>
        <h5>Vida Tanque</h5>
        
        <ProgressBar variant="warning" now={vida_tanque}  label={`${vida_tanque}%`}/>
      </div>
      </div>

    );
  }
export default Vida;