import React from 'react'

const DrumPad = ({name, sound, display, handleClick}) => {
  return (
    <div title={display} onClick={handleClick} className='drum-pad w-10 h-10 text-white bg-gray-500 rounded-lg flex justify-center items-center hover:cursor-pointer' id={`${name}-button`}>
        {name}
        <audio className='clip' id={name} src={sound}></audio>
    </div>
  )
}

export default DrumPad