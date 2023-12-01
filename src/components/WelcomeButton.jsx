import Button from "./common/Button.jsx";

const WelcomeButton = () => {
  return(
      <Button
        id={'btnPlayGame'}
        type={'button'}
        text={'PLAY NOW'}
        className={'btn primary'}
      />
  )
}

export default WelcomeButton;