import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const NotEligiblePage = ({ navigate }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      // alignItems="center"
      sx={{ padding: "1rem", height: "100vh" }}
    >
      <Grid item>
        <Typography variant="h3">
          Unfortunately as of now your case is not eligible for IndyRent
          Assistance Program! We will keep you updated if any changes in the
          future
        </Typography>
        <Typography variant="h6">
          We will keep you posted if we do support you in the future
        </Typography>
      </Grid>
      <Button
        // color="base"
        onClick={() => navigate("/")}
        startIcon={<ArrowLeft />}
      >
        Back to home
      </Button>
    </Grid>
  );
};

export default withNavigate(NotEligiblePage);
