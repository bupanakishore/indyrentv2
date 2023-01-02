import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft } from "react-feather";
import { withNavigate } from "../common/WithNavigate";

const TenantDue = ({ navigate }) => {
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
          <Typography variant="landlord">Rental Details</Typography>
        </Grid>
        <Grid
          container
          height={"75vh"}
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Typography variant="h3">
            Does the tenant owe any amount to you?
          </Typography>
          <br />
          <Grid
            item
            container
            justifyContent={"space-between"}
            marginTop={"6rem"}
          >
            <Button
              onClick={() => navigate("/landlord/confirmdetails")}
              variant="outlined"
              color="landlord"
              sx={{ width: "49%" }}
            >
              Yes
            </Button>
            <Button
              onClick={() => navigate("/landlord/dashboard")}
              variant="outlined"
              color="landlord"
              sx={{ width: "49%" }}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withNavigate(TenantDue);
