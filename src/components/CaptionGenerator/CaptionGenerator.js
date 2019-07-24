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
    let fixedCaption = inputElement.value
    // this is the magic line that replaces normal line breaks with the invisible separator in UTF
    fixedCaption = fixedCaption.replace(/(?:\r\n|\r|\n)/g, "\u2063\n")
    inputElement.value = fixedCaption
    // // handle iOS as a special case thanks to https://apps4lifehost.com/Instagram/CaptionMaker.html and https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      let editable = inputElement.contentEditable
      let readOnly = inputElement.readOnly
      // convert to editable with readonly to stop iOS keyboard opening
      inputElement.contentEditable = true
      inputElement.readOnly = true
      // create selectable range
      let range = document.createRange()
      range.selectNodeContents(inputElement)
      // select range
      let selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      inputElement.setSelectionRange(0, 999999)
      // restore contentEditable/readOnly to original state
      inputElement.contentEditable = editable
      inputElement.readOnly = readOnly
    } else {
      inputElement.select()
    }
    document.execCommand("copy")
    this.setState({
      isSnackbarOpen: true,
    })
  }
  // reset snackbar to original state
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
