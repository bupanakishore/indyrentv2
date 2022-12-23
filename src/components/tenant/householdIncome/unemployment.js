import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Unemployment = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Have you received unemployment compensation, since March 2021?
      </Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        <Button variant="outlined" color="tenant" sx={{ width: "49%" }}>
          Yes
        </Button>
        <Button variant="outlined" color="tenant" sx={{ width: "49%" }}>
          No
        </Button>
      </Grid>
    </Grid>
  );
};

export default Unemployment;
