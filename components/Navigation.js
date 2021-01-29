import styles from './Navigation.module.css';

const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Logo</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarToggler" 
        aria-controls="navbarToggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarToggler" className="navbar-collapse collapse w-100 order-3 dual-collapse2">
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