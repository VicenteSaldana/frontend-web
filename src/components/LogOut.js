import useCookieAuth from "../hooks/useCookieAuth";
import axios from "axios";
import { SERVER_URL } from '../App';
import useTokenAuth from '../hooks/useTokenAuth';
import BlueButton from "./BlueButton";


function LogOut(){
    const {handleUserLogout} = useCookieAuth();
    const { handleTokenChange } = useTokenAuth(); 

    const logout = async () => {
        const response = await axios.post(`${SERVER_URL}/auth/logout`)
                .then(() => console.log('cerramos sesión'))
                .catch(err => console.log(err));
        handleUserLogout();
        handleTokenChange('', 'logout');
        window.location.href='/';
      }

      return <>
 
        <BlueButton title={"Cerrar sesión"} onClick={()=>{logout()}} />
      
      </>
}

export default LogOut