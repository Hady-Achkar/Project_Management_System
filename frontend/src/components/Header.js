import {
  Container,
  Grid,
  InputBase,
  Link,
  makeStyles,
  Paper,
  fade,
  Button,
} from "@material-ui/core"
import { purple } from "@material-ui/core/colors"
import SearchIcon from "@material-ui/icons/Search"
import { useHistory } from "react-router-dom"
import React from "react"

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.main,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: "transparent",
    },
    left: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    mid: {
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    right: {
      justifyContent: "flex-end",
      alignItems: "center",
    },
    container: {
      backgroundColor: purple[100],
      height: "100px",
    },
    btn: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "25ch",
      },
    },
  }))
  const classes = useStyles()
  const history = useHistory()

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid container item xs={6} className={classes.left}>
            <Link href='/'>
              <h1>LOGO</h1>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    history.push(`/search?=${event.target.value}`)
                  }
                }}
              />
            </div>
          </Grid>
          <Grid container item xs={3} spacing={3} className={classes.mid}>
            <Link href='#'>
              <h4>Link</h4>
            </Link>
            <Link href='#'>
              <h4>Link</h4>
            </Link>
          </Grid>
          <Grid container item xs={3} spacing={3} className={classes.right}>
            <Button
              color='primary'
              variant='contained'
              className={classes.btn}
              onClick={() => {
                history.push("/login")
              }}
            >
              Login
            </Button>
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                history.push("/register")
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Header
