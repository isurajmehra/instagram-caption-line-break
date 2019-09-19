import React, { Component } from "react"
import Button from "@material/react-button"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import CaptionGenerator from "../components/CaptionGenerator/CaptionGenerator"
import ExampleModal from "../components/ExampleModal/ExampleModal"

import HeroIcon from "../images/hero-icon.svg"

import "../styles/app.scss"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  showExampleModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }
  closeExampleModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    return (
      <Layout>
        <SEO />
        {/* <a
          href="https://www.producthunt.com/posts/instagram-line-break?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-instagram-line-break"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=168306&theme=dark"
            alt="Instagram Line Break - Simple clean line breaks for your Instagram captions | Product Hunt Embed"
            className="anoun-insta-ph-badge__image"
          />
        </a> */}
        <section className="anoun-insta-main__section">
          <img
            src={HeroIcon}
            className="anoun-insta-hero__image"
            alt="Instagram Line Break App Logo"
          />
          <h1>Instagram Line Break</h1>
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
            <li>
              Paste it as your Instagram caption!{" "}
              <span role="img" aria-label="emoji with sunglasses">
                😎
              </span>
            </li>
          </ol>
          <CaptionGenerator />
          <Button onClick={this.showExampleModal}>Show Example</Button>
          <ExampleModal
            open={this.state.isModalOpen}
            onClose={this.closeExampleModal}
          />
        </section>
      </Layout>
    )
  }
}

export default IndexPage
