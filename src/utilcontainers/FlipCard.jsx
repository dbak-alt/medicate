import React, { useState } from 'react'
import RenderIcon from './RenderIcon'

const FlipCard = ({ medicine, index }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      key={index}
      className="relative w-full h-48 perspective" // Ensure enough space for the flip
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT */}
        <div className="bg-[#b7a5e180] flex flex-col cursor-pointer text-gray-800 gap-2 rounded shadow-lg transition-all duration-300 shadow-gray-300 backface-hidden p-2">
          <div className="bg-[#7055b180] flex flex-row justify-between items-center border-b border-dashed p-2 rounded-b-xs">
            <div className='flex flex-row gap-2 items-center'>
              <RenderIcon iconName="Today’s Meds" />
              <strong>{medicine.name}</strong>
            </div>

            <div className="font-bold" onClick={() => setFlipped(true)}>
              <RenderIcon iconName="Flip" />
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <div><strong>Time : </strong>{medicine.time}</div>
            <div><strong>Dose : </strong>{medicine.dose}</div>
            <div><strong>For : </strong>{medicine.tabFor}</div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#d8cfff] rounded shadow-lg text-gray-800 p-4 transform rotate-y-180 backface-hidden">
          <div className="bg-[#7055b180] flex flex-row justify-between items-center border-b border-dashed p-2 rounded-b-xs">
            <div className='flex flex-row gap-2 items-center'>
              <RenderIcon iconName="Today’s Meds" />
              <strong>{medicine.name}</strong>
            </div>

            <div className="font-bold" onClick={() => setFlipped(false)}>
              <RenderIcon iconName="Flip" />
            </div>
          </div>
          <p>{medicine.tabFor}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
