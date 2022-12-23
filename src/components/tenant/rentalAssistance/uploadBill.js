import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";

const UploadBill = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Electricity amount details</Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        <TextField variant="filled" label="Amount due" />
        <TextField variant="filled" label="Service provider" />
        <TextField variant="filled" label="Due since (Select month)" />
        <Button variant="contained" endIcon={<ArrowRight />} color="tenant">
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default UploadBill;
