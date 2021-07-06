import express from 'express';
import { PORT } from './common/common.constants';
import mailRouter from './mail/mail.routers';

const app = express();

app.use(express.urlencoded());
app.use(mailRouter);

app.listen(PORT, () => {
  console.log();
});
