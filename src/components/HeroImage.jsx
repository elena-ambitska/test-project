import MainImage from '../assets/witcher.png';
import '../styles/hero-image.css';
const HeroImage = () => {
  return(
      <img src={MainImage} alt='witcher image' className='hero-image'/>
  )
}

export default HeroImage;