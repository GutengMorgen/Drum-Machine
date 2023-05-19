// import React, { useEffect, useState } from 'react';


function GetAudio(id: string) {
  const soundsFiles = [
    {name: "Heater-1",  path: "/sounds/Heater-1.mp3"},
    {name: "Heater-2", path: "/sounds/Heater-2.mp3"},
    {name: "Heater-3", path: "/sounds/Heater-3.mp3"},
    {name: "Heater-4_1", path: "/sounds/Heater-4_1.mp3"},
    {name: "Heater-6", path: "/sounds/Heater-6.mp3"},
    {name: "Cev_H2", path: "/sounds/Cev_H2.mp3"},
    {name: "Dsc_Oh", path: "/sounds/Dsc_Oh.mp3"},
    {name: "Kick_n_Hat", path: "/sounds/Kick_n_Hat.mp3"},
    {name: "RP4_KICK_1", path: "/sounds/RP4_KICK_1.mp3"}
  ];

  for (let i = 0; i < soundsFiles.length; i++) {
    if (soundsFiles[i].name === id) {
      return soundsFiles[i].path;
    }
  }
}

const Buttons: React.FC<ButtonsProps> = ({RefDisplay}) => {

  document.onkeydown = (e) => {
    const doc = document.querySelectorAll('.drum-pad');
    const buttons = Array.from(doc);

    const button = buttons.find(item => item.textContent?.toLowerCase() === e.key.toLowerCase());

    if(button) (button as HTMLButtonElement).click();
  }

  const HandleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const audio = new Audio(GetAudio(e.currentTarget.id));
    audio.play();
  }


  return(
    <>
      <button className='drum-pad' 
      id="Heater-1"
      onClick={HandleClick}>Q</button>
      <button className='drum-pad' 
      id="Heater-2"
      onClick={HandleClick}>W</button>
      <button className='drum-pad' 
      id="Heater-3"
      onClick={HandleClick}>E</button>
      <button className='drum-pad' 
      id="Heater-4_1"
      onClick={HandleClick}>A</button>
      <button className='drum-pad' 
      id="Heater-6"
      onClick={HandleClick}>S</button>
      <button className='drum-pad' 
      id="Cev_H2"
      onClick={HandleClick}>D</button>
      <button className='drum-pad' 
      id="Dsc_Oh"
      onClick={HandleClick}>Z</button>
      <button className='drum-pad' 
      id="Kick_n_Hat"
      onClick={HandleClick}>X</button>
      <button className='drum-pad' 
      id="RP4_KICK_1"
      onClick={HandleClick}>C</button>
    </>
  )
}

interface ButtonsProps {
  RefDisplay: React.MutableRefObject<HTMLDivElement | null>;
}

export default Buttons;