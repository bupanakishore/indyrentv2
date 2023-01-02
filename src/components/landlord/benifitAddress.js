import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft } from "react-feather";
import { withNavigate } from "../common/WithNavigate";

const BenifitAddress = ({ navigate }) => {
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
          <Typography variant="landlord">Benefit Check</Typography>
        </Grid>
        <Grid
          container
          height={"75vh"}
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Typography variant="h3">
            Would you like to receive the benefit check at this address?
          </Typography>
          <br />
          <Grid item sx={{bgcolor:"landlord.bg",padding:"1rem",borderRadius:"8px"}}>
            <Typography variant="subtitle" color={"light"}>Your Address</Typography>
            <Typography variant="h5">JOHN BONER NEIGHBORHOOD CENTERS, 3030 W 16th ST, INDIANAPOLIS, IN 46222</Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={"space-between"}
            marginTop={"6rem"}
          >
            <Button
              onClick={() => navigate("/landlord/startapplication")}
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

export default withNavigate(BenifitAddress);
