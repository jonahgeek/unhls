import { axios } from '@/lib/axios';
import { useQuery } from 'react-query';

export const getPatient = ({ patientId }) => {
  return axios.get(`/patients/${patientId}`);
};

export const usePatient = ({ patientId, config }) => {
  return useQuery({
    ...config,
    queryKey: ['patient', patientId],
    queryFn: () => getPatient({ patientId }),
  });
};
