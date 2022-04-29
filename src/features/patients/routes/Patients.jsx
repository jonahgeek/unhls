import { ContentLayout } from '@/components/Layout';

import { CreatePatient } from '../components/CreatePatient';
import { PatientsList } from '../components/PatientsList';

export const Patients = () => {
  return (
    <ContentLayout title="Patients">
      <div className="flex justify-end">
        <CreatePatient />
      </div>
      <div className="mt-4">
        <PatientsList />
      </div>
    </ContentLayout>
  );
};
