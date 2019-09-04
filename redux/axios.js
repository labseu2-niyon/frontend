import axios from 'axios';
import nookies from 'nookies';

export default function (ctx = {}) {
  const cookies = nookies.get(ctx);
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      token: cookies.token,
    },
  });
  return instance;
}
