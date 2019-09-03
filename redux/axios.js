import axios from 'axios';
// import nookies from 'nookies';

export default function () {
  const token = localStorage.getItem('token');
  // const cookies = nookies.get(ctx);

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  });
  return instance;
}
