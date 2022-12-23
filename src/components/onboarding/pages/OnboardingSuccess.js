import React from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import { withNavigate } from "../../common/WithNavigate";

const mapStateToProps = (state) => {
  return {
    // future apis

    // fetching: state.addaddress.fetching,
    // data: state.addaddress.data,
    // error: state.addaddress.error,
    name: state.onboarding.name,
    role: state.onboarding.role,
  };
};

const OnboardingSuccess = ({ navigate, name, role }) => {
  // start app
  const startApp = () => {
    if (role === "tenant") {
      navigate("/tenant/apply");
    } else {
      navigate("/landlord/dashboard");
    }
  };
  // fill application later
  const fillApplicationLater = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      minHeight={"100vh"}
      sx={{ padding: "1rem" }}
    >
      <Grid item>
        <Typography variant={role}>Hello, {name}</Typography>
        <Typography variant="h3">
          Thank you {name} for sharing. Your details are safe with us
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          variant="contained"
          size="large"
          color={role}
          onClick={startApp}
        >
          {role === "tenant" ? "Start IndyRent Application" : "Add Property"}
        </Button>
        <Button color="base" onClick={fillApplicationLater}>
          {role === "tenant" ? "Fill application later" : "Continue later"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(OnboardingSuccess));
