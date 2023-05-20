import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Buttons from './buttons';
import './otherStyle.css';
import './App.css'

function App() {
  const refDisplay = useRef<HTMLDivElement | null>(null);
  const [clipName, setClipName] = useState<(string | null)>('');


  return (
    <>
    <div id='drum-machine'>
      <div id='display' ref={refDisplay}>
        <Buttons SetClipName={setClipName}/>
        <p><span>{clipName}</span></p>
      </div>
    </div>
    </>
  )
}

export default App
