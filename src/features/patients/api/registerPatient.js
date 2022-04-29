import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';

export const registerPatient = ({ data }) => {
  return axios.post(`/patients`, data);
};

registerPatient.propTypes = {
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
};

export const useRegisterPatient = ({ config } = {}) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newPatient) => {
      await queryClient.cancelQueries('patients');

      const previousPatients = queryClient.getQueryData('patients');

      queryClient.setQueryData('patients', [...(previousPatients || []), newPatient.data]);

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
        title: 'Patient Created',
      });
    },
    ...config,
    mutationFn: registerPatient,
  });
};
