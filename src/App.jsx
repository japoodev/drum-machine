import { useState } from "react";
import DrumPad from "./components/DrumPad";

const App = () => {
  const soundBank = [
    {
      key: "Q",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "Heater 1",
    },
    {
      key: "W",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "Heater 2",
    },
    {
      key: "E",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      id: "Heater 3",
    },
    {
      key: "A",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      id: "Heater 4",
    },
    {
      key: "S",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      id: "Clap",
    },
    {
      key: "D",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      id: "Open HH",
    },
    {
      key: "Z",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      id: "Kick n' Hat",
    },
    {
      key: "X",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      id: "Kick",
    },
    {
      key: "C",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      id: "Closed HH",
    },
  ];

  const [display, setDisplay] = useState(
    ""
  );

  const handleClick = (e) => {
    const sound = document.getElementById(e.target.innerText);
    sound.currentTime = 0;
    sound.play();
    setDisplay(e.target.title);
  };

  const handleKeyPress = (e) => {
    const sound = document.getElementById(e.key.toUpperCase());
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      setDisplay(sound.parentElement.title);
    }
  };

  window.addEventListener("keydown", handleKeyPress);

  const drumpads = soundBank.map((sound) => (
    <DrumPad
      handleClick={handleClick}
      key={sound.key}
      display={sound.id}
      name={sound.key}
      sound={sound.sound}
    />
  ));
  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl text-white text-center mb-10">Drum Machine</h1>
      <div
        id="drum-machine"
        className="bg-red-400 p-10 rounded-md mx-auto flex flex-col gap-4 items-center shadow-lg border-2 shadow-slate-300"
      >
        <div id="display" className="col-span-3 text-black flex justify-center items-center bg-gray-300 h-10 w-36">
          {display}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">{drumpads}</div>
      </div>
    </div>
  );
};

export default App;
