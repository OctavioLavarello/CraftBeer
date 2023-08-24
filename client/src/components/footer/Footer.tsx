/// IMPORTS
import React from "react";
// STYLES
import InstagramIcon  from '../../assets/icons/Instagram_icon.png.webp';
import twitterIcon from '../../assets/icons/Logo_of_Twitter.svg.png';
import facebookIcon from '../../assets/icons/2021_Facebook_icon.svg.png';
import styles from "./Footer.module.css";

// FOOTER
const Footer: React.FC = () => {
  return (
    <div
      className={styles.container}
    >
        <div className={styles.p_container}>
            <p>
                The sale of alcoholic beverages is prohibited for minors under 18 years of age.
            </p>
            <p>
            If you do not meet these specifications, we recommend that you do not continue the purchase process on this platform.
            </p>
        </div>
        <div className={styles.links}>
            <div className={styles.a_container}>
                <a
                    className={styles.a}
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={InstagramIcon} alt="Instagram" width="40" height="40" />
                </a>
                <a
                    className={styles.a}
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={twitterIcon} alt="twitter" width="40" height="40" />
                </a>
                <a
                    className={styles.a}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={facebookIcon} alt="facebook" width="40" height="40" />
                </a>
            </div>
            <h2>Our Networks</h2>
        </div>
    </div>
  );
};

export default Footer;
