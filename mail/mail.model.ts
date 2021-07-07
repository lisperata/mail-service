import Sequelize from 'sequelize';
import sequelize from '../database/config';

const Mail = sequelize.define('mails', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    unique: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  listId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
});

export default Mail;
