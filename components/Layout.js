import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.module.css'

const Layout = props => {
  
  return (
    <div>
        <Header />
        <div className="container">
          <div className="Content">{props.children}</div>
        </div>
        <Footer />
    </div>
  );
};

export default Layout;