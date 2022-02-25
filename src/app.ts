import express from 'express';
import { createUserControler } from './controllers/userController';
import { getUserByLoginController } from './controllers/loginController';
import { 
  usernameValidate, 
  classeValidate, 
  levelValidate, 
  passwordValidate, 
} from './middlewares/userValidate';

import { loginValidate } from './middlewares/loginValidate';

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

app.post(
  '/login',
  loginValidate,
  getUserByLoginController,
);

export default app;
