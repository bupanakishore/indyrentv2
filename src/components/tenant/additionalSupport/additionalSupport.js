import { Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft } from "react-feather";
import { Outlet } from "react-router-dom";

const AddSupport = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      padding={"1rem"}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography variant="tenant">Additional Support</Typography>
        </Grid>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AddSupport;
