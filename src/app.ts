import express from 'express';
import { createUserControler } from './controllers/userController';
import { 
  usernameValidate, 
  classeValidate, 
  levelValidate, 
  passwordValidate, 
} from './middlewares/userValidate';

const app = express();

app.use(express.json());

app.post(
  '/users',
  usernameValidate,

  classeValidate,

  levelValidate,

  passwordValidate,

  createUserControler,
);

export default app;
