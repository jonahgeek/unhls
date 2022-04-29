import { axios } from '@/lib/axios';
import { useQuery } from 'react-query';

export const getPatients = () => {
  return axios.get('/patients');
};

export const usePatients = ({ config } = {}) => {
  return useQuery({
    ...config,
    queryKey: ['patients'],
    queryFn: () => getPatients(),
  });
};
