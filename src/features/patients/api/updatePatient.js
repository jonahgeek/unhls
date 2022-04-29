import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';

export const updatePatient = ({ data, patientId }) => {
  return axios.patch(`/patients/${patientId}`, data);
};

updatePatient.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    facilityName: PropTypes.string.isRequired,
    patientName: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    village: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    nextOfKin: PropTypes.string.isRequired,
    contactNextOfKin: PropTypes.string.isRequired,
  }).isRequired,
  patientId: PropTypes.string.isRequired,
};

export const useUpdatePatient = ({ config } = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingPatient) => {
      await queryClient.cancelQueries(['patient', updatingPatient?.patientId]);

      const previousPatient = queryClient.getQueryData[('patient', updatingPatient?.patientId)];

      queryClient.setQueryData(['patient', updatingPatient?.patientId], {
        ...previousPatient,
        ...updatingPatient.data,
        id: updatingPatient.patientId,
      });

      return { previousPatient };
    },
    onError: (_, __, context) => {
      if (context?.previousPatient) {
        queryClient.setQueryData(['patient', context.previousPatient.id], context.previousPatient);
      }
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(['patient', data.id]);
      addNotification({
        type: 'success',
        title: 'Patient Updated',
      });
    },
    ...config,
    mutationFn: updatePatient,
  });
};
