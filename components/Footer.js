import Icon from './Icon';
import styles from './Footer.module.css';

const Footer = props => {

  const footerSocialMediaLinksAndIcons = [
    {
      link: "https://discord.com/",
      icon: 'fab fa-discord'
    },
    {
      link: "https://twitter.com/",
      icon: 'fab fa-twitter'
    },
    {
      link: "https://www.reddit.com/",
      icon: 'fab fa-reddit'
    },
    {
      link: "https://www.youtube.com/",
      icon: 'fab fa-youtube'
    }
  ];
  
  return (
    <div className={`shadow-lg ${styles.footerWrapper}`}>
      <div className={`pb-5 ${styles.footer}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3 pt-5">
              Logo
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 pt-5">
              <h5>Explore</h5>
              <ul className="clean">
                <li>Find a Party</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 pt-5">
              <h5>Resources</h5>
              <ul className="clean">
                <li><a href="https://www.dndbeyond.com/" target="_blank">D&amp;D Beyond</a></li>
                <li><a href="https://company.wizards.com/" target="_blank">Wizards of the Coast</a></li>
                <li><a href="https://www.dmsguild.com/" target="_blank">Dungeon Master's Guild</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 pt-5">
              <h5>Social Media</h5>
              <ul className="list-inline">
                {
                  footerSocialMediaLinksAndIcons.map((value, index) => {
                    return (
                      <li key={index} className="list-inline-item">
                        <Icon link={value.link} icon={value.icon} />
                      </li>
                      )
                  })
                }
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