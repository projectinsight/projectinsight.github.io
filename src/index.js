import Test from "./test";
import React from "react";
import ReactDOM from "react-dom";
import {getMuiTheme, MuiThemeProvider} from "material-ui/styles";
import {AppBar} from "material-ui";

const theme = getMuiTheme();

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <AppBar title="Project Insight" showMenuIconButton={false} />
      <Test />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#content"));
