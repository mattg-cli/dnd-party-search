import styles from './Navigation.module.css';

const Navigation = props => (
  <div className="shadow-lg">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">Left</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="//codeply.com">Codeply</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">LOG IN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SIGN UP</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;