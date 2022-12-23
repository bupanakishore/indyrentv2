import { Box, Grid, ThemeProvider } from "@mui/material";
import { theme } from "./components/common/MuiTheme";
import Routing from "./routes/routes";

function App() {
  return (
    <div className="App h-screen">
      <ThemeProvider theme={theme}>
        <Grid
          container
          columns={12}
          justifyContent={"center"}
          alignItems={"center"}
          maxHeight={"100vh"}
        >
          <Grid
            boxSizing={"border-box"}
            item
            xs={12}
            md={8}
            lg={4}
            // p={{ xs: "0", md: "1rem", lg: "2rem" }}
          >
            <Routing />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
