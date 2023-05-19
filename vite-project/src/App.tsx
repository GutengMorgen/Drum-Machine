import { useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Buttons from './buttons';
import './App.css'

function App() {
  const refDisplay = useRef<HTMLDivElement | null>(null);


  return (
    <>
    <div id='drum-machine'>
      <div id='display' ref={refDisplay}>
        <Buttons RefDisplay={refDisplay}/>
      </div>
    </div>
    </>
  )
}

export default App
