import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Main from "./components/main/Main.jsx";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "10pt",
        fontFamily: "CircularStd",
        fontWeight: 500,
        color: "white",
        backgroundColor: "black",
        textAlign: "center"
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider>
          <div>
            <Main />
          </div>
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
