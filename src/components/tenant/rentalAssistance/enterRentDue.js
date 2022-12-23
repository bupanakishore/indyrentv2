import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";

const EnterRentDue = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Since when is your rent due?</Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        <TextField variant="filled" label="Select Month" />
        <Button variant="contained" endIcon={<ArrowRight />} color="tenant">
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default EnterRentDue;
