import React from "react";
import ReactDOM from "react-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {Grid, Cell} from "react-flexr";
import InfoCard from "./components/InfoCard";

const theme = getMuiTheme(),
      styles = {
        grid: {
          width: 500,
          margin: "0 auto"
        },
        centerText: {
          textAlign: "center"
        }
      };

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <AppBar title="Project Insight" showMenuIconButton={false} />
      <div style={styles.grid}>
        <Grid>
          <Cell>
            <InfoCard />
          </Cell>
        </Grid>
        <div style={{display: "flex"}}>
          <div style={{flex: 2, margin: "5px"}}>
            <InfoCard />
          </div>
          <div style={{flex: 1, margin: "5px"}}>
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#content"));
