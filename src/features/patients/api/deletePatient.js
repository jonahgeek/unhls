import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';

export const deletePatient = ({ patientId }) => {
  return axios.delete(`/patients/${patientId}`);
};

deletePatient.propTypes = {
  patientId: PropTypes.string.isRequired,
};

export const useDeletePatient = ({ config } = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (deletedPatient) => {
      await queryClient.cancelQueries('patients');

      const previousPatients = queryClient.getQueryData('patients');

      queryClient.setQueryData(
        'patients',
        previousPatients?.filter((patient) => patient.id !== deletedPatient.patientId)
      );

      return { previousPatients };
    },
    onError: (_, __, context) => {
      if (context?.previousPatients) {
        queryClient.setQueryData('patients', context.previousPatients);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('patients');
      addNotification({
        type: 'success',
        title: 'Patient Deleted',
      });
    },
    ...config,
    mutationFn: deletePatient,
  });
};
