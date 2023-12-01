import logoImage from '../assets/logo.png';
import '../styles/logo.css';
const Logo = () => {
  return(
      <img src={logoImage} alt='logo' className='logo'/>
  )
}

export default Logo;