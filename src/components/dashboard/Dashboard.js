import React from "react";
import { Outlet } from "react-router-dom";

import { connect } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowLeft, Info } from "react-feather";

const mapStateToProps = (state) => {
  return {
    role: state.onboarding.role,
    name: state.onboarding.name,
  };
};

const Dashboard = ({ role, name }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      sx={{
        bgcolor: `#FBF5EB`,
        padding: "1rem 0",
        position: "relative",
        height: "100vh",
      }}
    >
      <Grid
        item
        container
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ padding: "1rem" }}
      >
        <Typography variant="h5">
          Welcome, {name}
        </Typography>
        <Grid item>
          <Button startIcon={<Info />} color={"landlord"}>
            My Info
          </Button>
        </Grid>
      </Grid>
      <Grid item container minHeight={"80vh"}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(Dashboard);
