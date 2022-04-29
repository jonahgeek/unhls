import { Spinner } from '@/components/Elements';
import { Head } from '@/components/Head';
import { ContentLayout } from '@/components/Layout';
import { formatDate } from '@/utils/format';
import { useParams } from 'react-router-dom';

import { usePatient } from '../api/getPatient';
import { UpdatePatient } from '../components/UpdatePatient';

export const Patient = () => {
  const { patientId } = useParams();
  const patientQuery = usePatient({ patientId });

  if (patientQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const Entry = ({ label, value }) => (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
    </div>
  );

  if (!patientQuery.data) return null;

  return (
    <>
      <Head title={patientQuery.data.patientName} />
      <ContentLayout title={patientQuery.data.patientName}>
        <span className="text-xs font-bold">{formatDate(patientQuery.data.createdAt)}</span>
        <div className="mt-6 flex flex-col space-y-16">
          <div className="flex justify-end">
            <UpdatePatient patientId={patientId} />
          </div>
          <div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <Entry label="Name" value={patientQuery.data.patientName} />
                <Entry label="Facility" value={patientQuery.data.facilityName} />
                <Entry label="Contact" value={patientQuery.data.contact} />
                <Entry label="Age" value={patientQuery.data.age} />
                <Entry label="Sex" value={patientQuery.data.sex} />
                <Entry label="Village" value={patientQuery.data.village} />
                <Entry label="District" value={patientQuery.data.district} />
                <Entry label="Region" value={patientQuery.data.region} />
                <Entry label="Next of Kin" value={patientQuery.data.nextOfKin} />
                <Entry label="Contact (Next of Kin)" value={patientQuery.data.contactNextOfKin} />
                <Entry label="Registered" value={patientQuery.data.createdAt} />
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};
