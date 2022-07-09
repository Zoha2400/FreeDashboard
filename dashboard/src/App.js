import logo from "./logo.svg";
import "./App.scss";
import Menu from "./Components/menu/Menu";
import { Grid } from "@mui/material";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className="Container-wrapper">
      <Grid container spacing={1} className="Container">

        <Grid xs={2} sm={2} md={1} lg={1} xl={1}>
          <Menu/>
        </Grid>

        <Grid xs={10} sm={10} md={11} lg={11} xl={11}>
          <Content/>
        </Grid>

        


      </Grid>
    </div>
  );
}

export default App;
