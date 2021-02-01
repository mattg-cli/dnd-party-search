import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = props => (
  <nav className={`fixed-top ${styles.navigation}`}>
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className={`list-inline text-right ${styles.left}`}>
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