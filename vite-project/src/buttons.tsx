const Buttons: React.FC<ButtonsProps> = (props) => {

  document.onkeydown = (e) => {
    const doc = document.querySelectorAll('.drum-pad');
    const buttons = Array.from(doc);
    const button = buttons.find(item => item.textContent?.toLowerCase() === e.key.toLowerCase());

    if(button){
      (button as HTMLButtonElement).click();
      button.classList.add('active');
      setTimeout(() => {
        button.classList.remove('active');
      }, 100);
    }
  }

  const HandleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const audio = document.querySelector(`#${e.currentTarget.textContent}`) as HTMLAudioElement;
    audio.play();
    props.SetClipName(e.currentTarget.id);
  }

  return(
    <>
      <button className='drum-pad' 
      id="Heater-1"
      onClick={HandleClick}
      >Q
      <audio id='Q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Heater-2"
      onClick={HandleClick}
      >W
      <audio id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Heater-3"
      onClick={HandleClick}
      >E
      <audio id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Heater-4_1"
      onClick={HandleClick}
      >A
      <audio id='A' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Heater-6"
      onClick={HandleClick}
      >S
      <audio id='S' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Cev_H2"
      onClick={HandleClick}
      >D
      <audio id='D' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Dsc_Oh"
      onClick={HandleClick}
      >Z
      <audio id='Z' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="Kick_n_Hat"
      onClick={HandleClick}
      >X
      <audio id='X' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip'></audio>
      </button>
      <button className='drum-pad' 
      id="RP4_KICK_1"
      onClick={HandleClick}
      >C
      <audio id='C' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip'></audio>
      </button>
    </>
  )
}

interface ButtonsProps {
  SetClipName: React.Dispatch<React.SetStateAction<string | null>>;
}

export default Buttons;