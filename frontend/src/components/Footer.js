import React from "react"
import { Container, makeStyles } from "@material-ui/core"

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "80vh",
  },
}))
const classes = useStyle()
const Footer = () => {
  return <Container maxWidth='lg' className={classes.root}></Container>
}

export default Footer
