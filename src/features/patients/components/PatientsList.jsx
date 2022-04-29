import { Table, Spinner, Link } from '@/components/Elements';
import { formatDate } from '@/utils/format';

import { usePatients } from '../api/getPatients';

import { DeletePatient } from './DeletePatient';

export const PatientsList = () => {
  const patientsQuery = usePatients();

  if (patientsQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!patientsQuery.data) return null;

  return (
    <Table
      data={patientsQuery.data}
      columns={[
        {
          title: 'Name',
          field: 'patientName',
        },
        {
          title: 'Facility',
          field: 'facilityName',
        },
        {
          title: 'District',
          field: 'district',
        },
        {
          title: 'Registered',
          field: 'createdAt',
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(createdAt)}</span>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <Link to={`./${id}`}>View</Link>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeletePatient id={id} />;
          },
        },
      ]}
    />
  );
};
