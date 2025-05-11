import React from "react";

import { FaBeer} from "react-icons/fa"; // Import icons you need
import { MdVaccines } from "react-icons/md";
import { PiPrescriptionFill } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { GrSchedules } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { GiAlarmClock } from "react-icons/gi";
import { MdFlipCameraAndroid } from "react-icons/md";

const RenderIcon = ({iconName}) => {
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
      case "Time":
        return <GiAlarmClock/>; 
      case "Flip":
        return  <MdFlipCameraAndroid/>   
      default:
        return <FaBeer />;
    }
  };

  export default RenderIcon;