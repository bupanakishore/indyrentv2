import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const EnterEmail = () => {
  return (
    <Grid container>
      <Typography variant="h3">
        We can forward this application to more people.
      </Typography>
      <Typography variant="subtitle">Enter email address</Typography>
      <TextField variant="filled" label="Enter email" />
      <Button variant="contained" color="tenant">
        Proceed
      </Button>
    </Grid>
  );
};

export default EnterEmail;
