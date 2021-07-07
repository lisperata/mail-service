import { Response } from 'express';
import getContacts from './mail.services';

export const sendMail = async (
  res: Response,
  listId: string,
  title: string,
  content: string
): Promise<void> => {
  try {
    await getContacts(listId, title, content);
    res.type('plain').status(200).send('Email was sent successfully');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};
