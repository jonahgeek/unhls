import { Button, ConfirmationDialog } from '@/components/Elements';
import { Authorization, ROLES } from '@/lib/authorization';
import { TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';

import { useDeletePatient } from '../api/deletePatient';

export const DeletePatient = ({ id }) => {
  const deletePatientMutation = useDeletePatient();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <ConfirmationDialog
        icon="danger"
        title="Delete Patient"
        body="Are you sure you want to delete this patient and all their records?"
        triggerButton={
          <Button variant="danger" startIcon={<TrashIcon className="h-4 w-4" />}>
            Delete Patient
          </Button>
        }
        confirmButton={
          <Button
            isLoading={deletePatientMutation.isLoading}
            type="button"
            className="bg-red-600"
            onClick={async () => await deletePatientMutation.mutateAsync({ patientId: id })}
          >
            Delete Patient
          </Button>
        }
      />
    </Authorization>
  );
};

DeletePatient.propTypes = {
  id: PropTypes.string.isRequired,
};
