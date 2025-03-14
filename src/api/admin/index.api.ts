import api from '@/lib/axios';

const addCompany = async (data: any) => {
  const response = await api.post('/travel-companies', data);
  return response.data;
};

export { addCompany };
