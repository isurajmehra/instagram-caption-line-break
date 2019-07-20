import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import CaptionGenerator from "../components/CaptionGenerator/CaptionGenerator"
import HeroIcon from "../images/hero-icon.svg"
import "../styles/app.scss"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="anoun-insta-main__section">
          <img src={HeroIcon} alt="Instagram Glyph Logo and block of text" />
          <h1>Instagram Caption Tool</h1>
          <p>
            Use this tool to create your instagram captions with simple and
            clean line breaks. It's super easy to use too!
          </p>
          <ol>
            <li>
              Write up your caption as you normally would with line breaks
            </li>
            <li>Paste it here</li>
            <li>Click the "Generate &amp; Copy Caption" Button</li>
            <li>Paste it as your Instagram caption! <span role="img" aria-label="emoji with sunglasses">😎</span></li>
          </ol>
          <CaptionGenerator/>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
