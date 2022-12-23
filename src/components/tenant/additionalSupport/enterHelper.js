import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";

const EnterHelper = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Who is helping you fill this application?
      </Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        <TextField variant="filled" label="Their Full Name" />
        <TextField variant="filled" label="Their Contact Number" />
        <TextField variant="filled" label="Their Email Address" />
        <Button variant="contained" endIcon={<ArrowRight />} color="tenant">
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default EnterHelper;
