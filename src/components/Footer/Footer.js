import React, { Component } from "react"
import instagramIcon from "../../images/icons/instagram-glyph-24px.svg"
import youtubeIcon from "../../images/icons/youtube-icon-24px.svg"
import githubIcon from "../../images/icons/github-icon-24px.svg"
import facebookIcon from "../../images/icons/facebook-icon-24px.svg"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <div>
          <h2>
            by{" "}
            <a href="https://anoun.company" className="anoun-title">
              ANOUN
            </a>
          </h2>
        </div>
        <div className={styles.footerSocialLinks}>
          <a
            href="https://www.youtube.com/channel/UCr6HXKDblu-_gxDxCZMbRoQ?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youtubeIcon}
              className={styles.footerSocialIcon}
              width="32px"
              alt="youtube-social-link"
            />
          </a>
          <a
            href="https://www.instagram.com/anoun.company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              className={styles.footerSocialIcon}
              width="32px"
              alt="instagram-social-link"
            />
          </a>
          <a
            href="https://github.com/anoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              className={styles.footerSocialIcon}
              width="32px"
              alt="github-social-link"
            />
          </a>
          <a
            href="https://www.facebook.com/anouncompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              className={styles.footerSocialIcon}
              width="32px"
              alt="github-social-link"
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
