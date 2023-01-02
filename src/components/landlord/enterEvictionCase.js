import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { withNavigate } from "../common/WithNavigate";

const EnterEvictionCase = ({ navigate }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      padding={"1rem"}
      height={"100vh"}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography variant="landlord">Rental Assistance</Typography>
        </Grid>
        <Grid
          container
          height={"75vh"}
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Typography variant="h3">Enter your eviction case number</Typography>
          <br />
          <Grid
            item
            container
            direction={"column"}
            // alignItems={"flex-end"}
            marginTop={"6rem"}
          >
            <TextField fullwidth variant="filled" color="landlord" label="Case No."/>
            <br />
            <Button
              onClick={() => navigate("/landlord/tenantdue")}
              variant="contained"
              endIcon={<ArrowRight/>}
              color="landlord"
              sx={{ width: "49%",float:"right" }}
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withNavigate(EnterEvictionCase);
