import React from "react"
// import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Container from '../Container/Container'
import MetaLinks from "../MetaLinks/MetaLinks"

import styles from "./layout.module.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.siteWrapper}>
        <MetaLinks />
        {/* <Header /> */}
        <Container>{children}</Container>
        <Footer />
      </div>
    )
  }
}

export default Layout
