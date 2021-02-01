import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = props => (
  <nav className={`fixed-top ${styles.navigation}`}>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ul className={`list-inline`}>
            <li className="list-inline-item px-1">
              <Link href="/">HOME</Link>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className={`list-inline text-right ${styles.right}`}>
            <li className="list-inline-item px-1">
              <Link href="/login">LOGIN</Link>
            </li>
            <li className="list-inline-item px-1">
              <Link href="/register">REGISTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;