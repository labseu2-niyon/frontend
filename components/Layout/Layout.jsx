import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
