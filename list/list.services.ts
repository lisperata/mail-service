import { instance } from '../common/axios.client';
import { ContactsOfList } from './list.interfaces';

export const getContactsByListId = async (
  body: URLSearchParams
): Promise<ContactsOfList> => {
  return (await instance.post('/lists', body)).data;
};
