import './App.css';
import './styles/styles.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Routing from './components/Routing';
import Navbar from './components/Navbar';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';

axios.defaults.withCredentials = true;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// https://medium.com/how-to-react/create-a-login-form-using-formik-in-react-js-240428a2f480
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters'),
});

function App() {
  return (
    <CookieAuthProvider>
      <TokenAuthProvider>
        <div className="App-body">
          <div className="App">
            <header className="App-header">
              <h1 className="titulo">
                RATA VOLADORA
              </h1>
            </header>

            <Navbar />
            <Routing />

          </div>
        </div>
      </TokenAuthProvider>
    </CookieAuthProvider>
  );
}

export default App;
