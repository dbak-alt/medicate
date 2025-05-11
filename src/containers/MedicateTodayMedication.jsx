import React from 'react'
import todaysMedicines from '../data/todayMedicine'
import FlipCard from '../utilcontainers/FlipCard'
import RenderIcon from '../utilcontainers/RenderIcon'

const MedicateTodayMedicine = () => {
  return (
    <div className="flex items-center justify-center p-4 h-[95dvh] w-full bg-gradient-to-r from-purple-300 to-indigo-300">
      {/* Glass container */}
      <div className="w-[90%] h-[80%] rounded-xl bg-white/30 backdrop-blur-lg shadow-md p-1">
        {/* Opaque inner wrapper */}
        <div className="flex flex-col w-full h-full bg-[#eeddee]  rounded-xl p-4 overflow-auto">
          
          {/* Header */}
          <div className="bg-[#7055b180] flex flex-row justify-between items-center border border-dashed p-2 rounded-b-xs mb-4">
            <div className="flex text-3xl flex-row gap-2 items-center">
              <RenderIcon iconName="Today’s Meds" />
              <h1>Morning</h1>
            </div>
          </div>

          {/* Medicine Grid */}
          <div className="grid grid-cols-4 gap-4">
            {todaysMedicines.medicines.map((medicine, index) => (
              <FlipCard key={index} medicine={medicine} index={index} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MedicateTodayMedicine
