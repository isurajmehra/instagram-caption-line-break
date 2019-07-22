import React from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"
import { Snackbar } from "@material/react-snackbar"

class CaptionGenerator extends React.Component {
  textarea = null
  state = {
    value: "",
    isSnackbarOpen: false,
  }

  captionFixAndCopy = () => {
    let inputElement = this.textarea.inputElement
    if (inputElement.value.length === 0) {
      return false;
    } else {
      let fixedCaption = inputElement.value
      fixedCaption = fixedCaption.replace(/(?:\r\n|\r|\n)/g, "\u2063\n")
      inputElement.value = fixedCaption
      inputElement.select()
      document.execCommand("copy")
      this.setState({
        isSnackbarOpen: true,
      })
    }
  }

  closeSnackbar = () => {
    this.setState({
        isSnackbarOpen: false,
      })
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
            onChange={e => this.setState({ value: e.currentTarget.value })}
            ref={textarea => (this.textarea = textarea)}
          />
        </TextField>
        <Button
          raised
          className="insta-caption-generate__button"
          onClick={this.captionFixAndCopy}
        >
          Generate &amp; Copy Caption
        </Button>

        <Snackbar
          open={this.state.isSnackbarOpen}
          onClose={this.closeSnackbar}
          message="Copied! Now go paste it in Insta 😉"
          actionText="dismiss"
        />
      </>
    )
  }
}

export default CaptionGenerator
