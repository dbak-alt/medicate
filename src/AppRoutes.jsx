// Routes.js
import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MedicateTodayMedicine = lazy(()=>import("./containers/MedicateTodayMedication" ))

const MedicateVaccine = lazy(()=>import("./containers/MedicateVaccine" ))

const MedicateSchedule = lazy(()=>import("./containers/MedicateSchedule" ))

const MedicateProfile = lazy(()=>import("./containers/MedicateProfile" ))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MedicateVaccine/>} />
      <Route path="/today’smeds" element={<MedicateTodayMedicine />} />
      <Route path="/vaccine" element={<MedicateVaccine />} />
      <Route path="/schedule" element={<MedicateSchedule />} />
      <Route path="/profile" element={<MedicateProfile />} />
    </Routes>
  );
};

export default AppRoutes;
