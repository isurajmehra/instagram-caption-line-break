import React, { Component } from "react"
import jaydanLogo from "../../images/jaydan-urwin-logo.svg"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <div>
          <a
            href="https://jaydanurwin.com"
            target="_blank noopener noreferrer"
            className="anoun-title"
          >
            <img src={jaydanLogo} width="150px" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
