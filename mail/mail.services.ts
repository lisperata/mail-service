import { getContactsByListId } from '../list/list.services';

const getContacts = async (
  listId: string,
  title: string,
  content: string
): Promise<void> => {
  const body: URLSearchParams = new URLSearchParams();
  body.append('uuid', listId || '');

  console.log(await getContactsByListId(body));
};

export default getContacts;
