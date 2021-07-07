import { transporter } from '../common/nodemailer.config';
import { ContactOfList } from '../list/list.interfaces';
import { getContactsByListId } from '../list/list.services';
import Mail from './mail.model';

export const getContacts = async (listId: string): Promise<ContactOfList[]> => {
  const body: URLSearchParams = new URLSearchParams();
  body.append('uuid', listId || '');

  return await getContactsByListId(body);
};

export const sendEmailToContacts = async (
  contacts: ContactOfList[],
  subject: string,
  content: string
): Promise<void> => {
  const emailsForSending = contacts.map(
    (contact: ContactOfList) => contact.email
  );

  const mailSettings = {
    from: process.env.MAIL_USERNAME,
    to: emailsForSending,
    subject: subject,
    text: content,
  };

  await transporter.sendMail(mailSettings);
};

export const addEmailToDB = async (
  title: string,
  content: string,
  listId: string
): Promise<void> => {
  await Mail.create({ title, content, listId });
};
