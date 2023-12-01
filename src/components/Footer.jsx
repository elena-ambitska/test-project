import Logo from "./Logo.jsx";
import '../styles/footer.css';

const Footer = () => {
  return(
      <div className='footer'>
          <Logo/>
          <p className='footer__remark--bottom'><a href='#'>*Terms and Conditions Apply</a></p>
      </div>
  )
}

export default Footer;