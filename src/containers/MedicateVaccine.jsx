import React, { useState } from 'react';
import vaccineData from '../data/vaccine';
import ExpandableList from '../utilcontainers/ExpandableList';
import RenderIcon from '../utilcontainers/RenderIcon';

const MedicateVaccine = () => {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <div className="flex w-full h-screen overflow-hidden bg-gradient-to-br from-purple-300 to-indigo-300 to-blue-100">
      {/* Left Panel */}
      <div className="p-6 flex-1 flex flex-col justify-center items-center max-w-[50%]">
        <div className="backdrop-blur-mdshadow-xl rounded-2xl h-[80%] overflow-scroll scrollbar-hide scroll- w-[80%] p-6 border border-white/30 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-2 text-[#7746b7]">Vaccines - <span className='text-black'>one shot at a time</span></h3>
          <p className="mb-6 text-sm text-gray-700">
            Vaccines protect lives by turning prevention into powerful protection !!
          </p>

          {vaccineData.map((vaccine, index) => (
            <div key={index} className="mb-2">
              <div
                onClick={() => setIsOpen(isOpen === index ? -1 : index)}
                className="cursor-pointer font-medium bg-gradient-to-r from-indigo-100 to-white hover:from-indigo-200 hover:to-white transition-all rounded-xl p-3 flex items-center shadow-sm hover:shadow-md"
              >
                <RenderIcon iconName={"Vaccine"} />
                <span className="ml-2 text-[#73628A] font-bold">{vaccine.stage}</span>
              </div>

              <div
                className={`ml-4 transition-all duration-300 ${
                  isOpen === index ? "block max-h-[300px] overflow-auto scrollbar-hide mt-2" : "hidden"
                }`}
              >
                <ExpandableList listData={vaccine} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-6 flex-1 flex flex-col justify-center items-center max-w-[50%]">
        <div className="backdrop-blur-mdshadow-xl bg-white/30 shadow-xl rounded-2xl h-[80%] w-[80%] p-6 border border-white/30 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-2 text-[#7746b7]">My Vaccines <span className='text-black'></span></h3>
          <p className="mb-6 text-sm text-gray-700">
            Vaccines protect lives by turning prevention into powerful protection !!
          </p>

        </div>
      </div>
    </div>
  );
};

export default MedicateVaccine;
