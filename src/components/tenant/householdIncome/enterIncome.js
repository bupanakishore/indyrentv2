import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";

const EnterIncome = () => {
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Your total expected household income, this month
      </Typography>
      <Typography variant="subtitle">
        Calculate and enter the sum of all sources of income in your household
      </Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        <TextField variant="filled" label="Total household Income" />
        <TextField
          variant="filled"
          label="List employers or sources of income"
        />
        <Button variant="contained" endIcon={<ArrowRight />} color="tenant">
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default EnterIncome;
