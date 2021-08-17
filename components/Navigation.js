import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = props => (
  <div className={`${styles.navigation} d-flex flex-column flex-md-row align-items-center p-3 px-md-4 shadow-sm`}>
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <a href="/">
        D&amp;D Party Search
      </a>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2" href="/find-a-party">Search</a>
    </nav>
    <a className="btn btn-outline-primary" href="/login">Login</a>
  </div>
);

export default Navigation;