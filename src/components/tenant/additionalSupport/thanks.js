import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";

const ThanksPage = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Typography variant="h3">
          Thank you for sharing. As of now we only provide rental assistance,
          but we will keep you updated if things change!
        </Typography>
        <Typography variant="subtitle">
          Know more about assistance for additional support
        </Typography>
      </Grid>
      <Button variant="contained" color="tenant" endIcon={<ArrowRight />}>
        Proceed
      </Button>
    </Grid>
  );
};

export default ThanksPage;
