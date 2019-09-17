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
    let el = this.textarea.inputElement
    let fixedCaption = el.value
    // this is the magic line that replaces normal line breaks with the invisible separator in UTF
    fixedCaption = fixedCaption.replace(/(?:\r\n|\r|\n)/g, "\u2063\n")
    // replace value of textarea
    el.value = fixedCaption
    // // handle iOS as a special case thanks to https://apps4lifehost.com/Instagram/CaptionMaker.html and https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios
    // resolve the element
    el = typeof el === "string" ? document.querySelector(el) : el
    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      // save current contentEditable/readOnly status
      var editable = el.contentEditable
      var readOnly = el.readOnly
      // convert to editable with readonly to stop iOS keyboard opening
      el.contentEditable = true
      el.readOnly = true
      // create a selectable range
      var range = document.createRange()
      range.selectNodeContents(el)
      // select the range
      var selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      el.setSelectionRange(0, 999999)
      // restore contentEditable/readOnly to original state
      el.contentEditable = editable
      el.readOnly = readOnly
    } else {
      el.select()
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
            ref={el => (el = this.textarea = el)}
            name="caption input field"
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
