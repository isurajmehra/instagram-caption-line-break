import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from "@material/react-dialog"

const ExampleModal = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/example-modal-iphone-image.png/" }) {
        childImageSharp {
          fluid(maxWidth:1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Caption Example</DialogTitle>
      <DialogContent>
        <Image
          fluid={data.avatar.childImageSharp.fluid}
          alt="example caption with line breaks"
          style={{
            minWidth:`300px`
          }}
        />
      </DialogContent>
      <DialogFooter>
        <DialogButton action="dismiss" isDefault>
          Dismiss
        </DialogButton>
      </DialogFooter>
    </Dialog>
  )
}

export default ExampleModal;
