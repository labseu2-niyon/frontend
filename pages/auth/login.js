// import nookies from 'nookies';
// import jwt from 'jsonwebtoken';
import Login from '../../components/auth/Login';
// import redirect from '../../lib/redirect';

function Page() {
  return (
    <div>
      <Login />
    </div>
  );
}

// Redirects user to dashboard if they are already logged in
// Page.getInitialProps = ctx => {
//   const cookies = nookies.get(ctx);
//   let validToken = false;

//   if (cookies.token) {
//     const { exp } = jwt.decode(cookies.token);
//     validToken = exp > Math.floor(Date.now() / 1000);
//   }

//   if (validToken) {
//     redirect(ctx, '/');
//   }
//   return {};
// };

export default Page;
