import nookies from 'nookies';
import Login from '../../components/auth/Login';
import redirect from '../../lib/redirect';

function Page() {
  return (
    <div>
      <p>Navbar from Marketing</p>
      <Login />
    </div>
  );
}

// Redirects user to dashboard if already logged in
Page.getInitialProps = (ctx) => {
  const cookies = nookies.get(ctx);
  if (cookies.token) {
    redirect(ctx, '/');
  }

  return {};
};

export default Page;
