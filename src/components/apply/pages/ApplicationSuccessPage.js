import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const ApplicationSuccessPage = ({ navigate }) => {
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
          Congratulations you have completed the application
        </Typography>
        <Typography variant="h6">
          We will keep be in contact with you
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

export default withNavigate(ApplicationSuccessPage);
