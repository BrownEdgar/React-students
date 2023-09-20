import './App.css' 
 
import{FcAndroidOs} from 'react-icons/fc' 
import{BiLogoYoutube} from 'react-icons/bi' 
import{BiLogoReact} from 'react-icons/bi' 
 
export default function App() { 
    return ( 
      <div className='contanier'> 
        <h1>React Icons</h1> 
        <ul className='contanier-list'> 
            <li> 
                <FcAndroidOs/> 
            </li> 
            <li> 
              <BiLogoYoutube/> 
            </li> 
            <li> 
              <BiLogoReact className='contanier-icon_react'/> 
            </li> 
        </ul> 
      </div> 
    ) 
  }