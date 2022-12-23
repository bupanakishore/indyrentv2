import React from "react";
import { Outlet } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowLeft } from "react-feather";
import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    role: state.onboarding.role,
    total: state.app.totalQuestions,
    current: state.app.currentQuestion,
  };
};

const Apply = ({ role, total, current }) => {
  const dispatch = useDispatch()
  // start application on mount
  useEffect(()=>{
    console.log("start application");
    dispatch({
      type: "APPLICATION_START",
    });
  },[])
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      sx={{
        bgcolor: `bg${role}`,
        padding: "1rem 0",
        position: "relative",
        height: "100vh",
      }}
    >
      <Grid
        item
        container
        justifyContent={"space-between"}
        sx={{ padding: "1rem" }}
      >
        <Button variant="text" color="base" startIcon={<ArrowLeft />}>
          Go back
        </Button>
        
      </Grid>
      <Grid item container minHeight={"80vh"}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(Apply);
