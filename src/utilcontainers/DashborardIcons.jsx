import React from "react";
import { FaBeer} from "react-icons/fa"; // Import icons you need
import { MdVaccines } from "react-icons/md";
import { PiPrescriptionFill } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";

const DashBoardIcons = ({ iconName }) => {
  const renderIcon = () => {
    switch (iconName) {
        case "Today’s Meds":
            return <GiMedicines />;
      case "Vaccine":
        return <MdVaccines />;
      case "Prescriptions":
        return <PiPrescriptionFill />;
      case "Schedule":
        return <GrSchedules />;
        case "Profile":
            return <IoPersonSharp />;
      default:
        return <FaBeer />;
    }
  };

  return (
    <>
      <button onClick={()=>{
        console.log("hello")
      }} className="sm:flex p-2 items-center hover:bg-[#73628A] rounded-xl shadow-2xs text-amber-50 transition-colors duration-100">
        <div>
          {renderIcon()}
        </div>
        <div className="ml-1">
          {iconName}
        </div>
      </button>
    </>
  );
};

export default DashBoardIcons;
