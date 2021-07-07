import { instance } from '../common/axios.client';
import { ContactOfList } from './list.interfaces';

export const getContactsByListId = async (
  body: URLSearchParams
): Promise<ContactOfList[]> => {
  return (await instance.post('/lists', body)).data;
};
