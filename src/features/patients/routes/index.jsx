import { Navigate, Route, Routes } from 'react-router-dom';

import { Patient } from './Patient';
import { Patients } from './Patients';

export const PatientsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Patients />} />
      <Route path=":patientId" element={<Patient />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
