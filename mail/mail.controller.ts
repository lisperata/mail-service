import { Response } from 'express';
import {
  sendEmailToContacts,
  getContacts,
  addEmailToDB,
} from './mail.services';

export const sendMail = async (
  res: Response,
  listId: string,
  title: string,
  content: string
): Promise<void> => {
  try {
    const contactsOfList = await getContacts(listId);
    await sendEmailToContacts(contactsOfList, title, content);
    await addEmailToDB(title, content, listId);

    res.type('plain').status(200).send('Email was sent successfully');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};
