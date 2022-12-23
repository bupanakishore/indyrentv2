import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const PrevRent = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Do you owe any rent from previous months?
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

export default PrevRent;
