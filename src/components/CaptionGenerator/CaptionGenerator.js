import React from "react"
import TextField, { Input } from "@material/react-text-field"
import MaterialIcon from "@material/react-material-icon"
import Button from "@material/react-button"

class CaptionGenerator extends React.Component {
  state = { value: "" }
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
          />
        </TextField>
        <Button raised onClick={() => console.log("clicked!")}>
          Generate &amp; Copy Caption
        </Button>
      </>
    )
  }
}

export default CaptionGenerator
