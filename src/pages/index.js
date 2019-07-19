import React, { Component } from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import Layout from "../components/Layout/Layout"
import InstagramGlyph from "../images/icons/instagram-glyph.svg"
import "../styles/app.scss"

class IndexPage extends Component {
  state = { value: "" }
  render() {
    return (
      <Layout>
        <section className="anoun-insta-main__section">
          <img src={InstagramGlyph} alt="Instagram Glyph Logo" />
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
          <TextField
            label="Paste Instagram caption here..."
            textarea="true"
            // helperText={<HelperText>Help Me!</HelperText>}
            onTrailingIconSelect={() => this.setState({ value: "" })}
            trailingIcon={<MaterialIcon role="button" icon="delete" />}
          >
            <Input
              value={this.state.value}
              onChange={e =>
                this.setState({ value: e.currentTarget.value })
              }
            />
          </TextField>
          <Button raised onClick={() => console.log("clicked!")}>
            Generate &amp; Copy Caption
          </Button>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
