import React, { useState } from 'react'

const ExpandableList = ({ listData }) => {
  const [isOpen, setIsOpen] = useState(-1)
  const [added, setIsAdded] = useState({})
  console.log(added)
  return (
    <ul className="w-full">
      {listData['timelines'].map((vaccineData, index0) => (
        <li
          onClick={() => {
            setIsOpen(isOpen !== index0 ? index0 : -1)
          }}
          key={index0}
          className="cursor-pointer rounded-xl bg-gradient-to-r from-purple-100 to-indigo-100 hover:from-purple-200 hover:to-indigo-200 transition-all px-4 py-2 mb-2 shadow-md"
        >
          <div className="flex justify-between items-center">
            <strong className="text-indigo-700">{vaccineData.timeline}</strong>
            <span className="text-sm text-gray-500">
              {isOpen === index0 ? '▲' : '▼'}
            </span>
          </div>

          <ul
            className={`pl-4 mt-2 transition-all duration-300 ${
              isOpen === index0 ? 'block' : 'hidden'
            }`}
          >
            {vaccineData.vaccines.map((vaccine, index1) => (
              <li
                key={index1}
                className="bg-white/70 backdrop-blur-md text-gray-800 hover:text-indigo-800 rounded-lg px-3 py-1 my-1 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between">
                  {vaccine}
                  <button
                    className="cursor-pointer text-indigo-600 font-bold"
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      setIsAdded((prev) => ({
                        ...prev,
                        [index1]: prev[index1] ? 0 : 1,
                      }))
                    }}
                  >
                    {added[index1] ? '-' : '+'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default ExpandableList
