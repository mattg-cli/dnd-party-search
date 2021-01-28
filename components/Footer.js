import styles from './Footer.module.css';

const Footer = props => {
  
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col">
              Logo
            </div>
            <div className="col">
              <h5>Explore</h5>
              <ul className="clean">
                <li>Find a Party</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col">
              <h5>Resources</h5>
              <ul className="clean">
                <li>D&amp;D Beyond</li>
                <li>Wizards of the Coast</li>
                <li>DMs Guild</li>
              </ul>
            </div>
            <div className="col">
              <h5>Social Media</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><i className="fab fa-discord fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-twitter fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-reddit fa-2x"></i></li>
                <li className="list-inline-item"><i className="fab fa-youtube fa-2x"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBase}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              &copy; 2021 Copyright. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;