import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import awkwardKidGif from "../images/awkward-kid.gif"

// import SEO from "../components/seo"

import Button from "@material/react-button"

// Styles
import "../styles/app.scss"

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        {/* <SEO title="404: Not Found" /> */}
          <img src={awkwardKidGif} width="300px" alt="awkward kid gif" />
          <h1>Uh...this is awkward</h1>
          <p>
            Uh oh! It looks like the place you were looking for is no longer
            here or there's a typo. Please check the URL for mistakes and try
            again.{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </p>
          <Link to="/">
            {/* // TODO add back icon */}
            <Button raised>Go Back Home</Button>
          </Link>
      </Layout>
    )
  }
}
export default NotFoundPage
