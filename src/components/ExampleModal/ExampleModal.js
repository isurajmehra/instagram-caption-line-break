import React from "react"
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from "@material/react-dialog"
import ExampleModalImage from "../../images/example-modal-iphone-image.png"


function ExampleModal(props) {
    return (
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Caption Example</DialogTitle>
        <DialogContent>
          <img src={ExampleModalImage} width="100%" alt="example caption with line breaks"/>
        </DialogContent>
        <DialogFooter>
          <DialogButton action="dismiss" isDefault>Dismiss</DialogButton>
        </DialogFooter>
      </Dialog>
    )
  }

export default ExampleModal;
