import React from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import { Snackbar } from "@material/react-snackbar"
import { CopyToClipboard } from "react-copy-to-clipboard"

class CaptionGenerator extends React.Component {
  state = {
    value: "",
    copied: false,
  }
  render() {
    return (
      <>
        <TextField
          label="Paste your caption here..."
          textarea="true"
          // helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => this.setState({ value: "" })}
          trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input
            value={this.state.value}
            onChange={({ target: { value } }) =>
              this.setState({ value, copied: false })
            }
          />
        </TextField>
        <CopyToClipboard
          text={this.state.value.replace(/(?:\r\n|\r|\n)/g, "\u2063\n")}
          onCopy={() => this.setState({ copied: true })}
        >
          <Button raised className="insta-caption-generate__button">
            Generate &amp; Copy Caption
          </Button>
        </CopyToClipboard>
        {this.state.copied ? (
          <Snackbar
            message="Copied! Now go paste it in Insta 😉"
            actionText="dismiss"
          />
        ) : null}
      </>
    )
  }
}

export default CaptionGenerator
