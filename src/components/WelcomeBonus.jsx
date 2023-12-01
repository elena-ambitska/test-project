import Button from "./common/Button.jsx";
import WelcomeButton from "./WelcomeButton.jsx";
import InputTypeText from "./common/InputTypeText.jsx";
import '../styles/welcome-bonus.css';
import { useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/src";


const WelcomeBonusPromo = () => {
    const [isCopied, setIsCopied] = useState(false);
    const promoCode = 'WITCHER';

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

  return(
      <div className='welcome-bonus'>
          <h1 className='welcome-bonus__value'>300%</h1>
          <h2 className='welcome-bonus__title'>WELCOME BONUS</h2>
          <div className="welcome-bonus__promo">
              <InputTypeText type={'text'} value={promoCode} className={'welcome-bonus__input'} />
              <CopyToClipboard text={promoCode} onCopy={handleCopy}>
              <Button
                  id={'btnCopy'}
                  type={'button'}
                  text={isCopied ? 'Copied!' : 'COPY CODE'}
                  className={'welcome-bonus__button'}
              />
              </CopyToClipboard>
          </div>
          <WelcomeButton />
      </div>
  );
};

export default WelcomeBonusPromo;