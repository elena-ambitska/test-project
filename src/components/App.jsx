import HeroImage from "./HeroImage.jsx";
import WelcomeBonusPromo from "./WelcomeBonus.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
        <div className='content'>
            <WelcomeBonusPromo/>
            <HeroImage/>
        </div>
        <Footer/>
    </>
  )
}

export default App;
