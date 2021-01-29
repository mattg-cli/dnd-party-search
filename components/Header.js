import Navigation from './Navigation';
import Head from 'next/head';
import styles from'./Header.module.css';

const Header = props => {
  
  return (
    <div>
        <Head>
            <title>title</title>
        </Head>
        <Navigation/>
    </div>
  );
};

export default Header;