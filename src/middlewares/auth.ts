import jwt from 'jsonwebtoken';
import 'dotenv/config';

type Payload = {
  id: number,
  username: string,
};

export const generateToken = (payload: Payload): string => {
  const secret = 'mysecret';

  let token = '';

  if (secret) {
    token = jwt.sign({ data: payload }, secret);
  }

  return token;
};

export default generateToken;