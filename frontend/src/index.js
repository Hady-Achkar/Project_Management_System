import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import reportWebVitals from "./reportWebVitals"
import { purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
    backgroud: {
      main: purple[100],
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
