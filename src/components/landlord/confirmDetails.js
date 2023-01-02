import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { withNavigate } from "../common/WithNavigate";

const ConfirmDetailsLandlord = ({ navigate }) => {
  return (
    <Grid
      container
      sx={{ height: "100vh", bgcolor: "landlord.main", padding: "1rem" }}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6" color={"white"}>
          Property Owner/Manager Details
        </Typography>
        <Typography variant="h3" color={"white"}>
          Confirm your details.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle" color={"lightgreen"}>
          Your Name
        </Typography>
        <Typography variant="h5" color={"white"}>
          José Aldo
        </Typography>
        <br />
        <Typography variant="subtitle" color={"lightgreen"}>
          Mobile Number
        </Typography>
        <Typography variant="h5" color={"white"}>
          9158487856
        </Typography>
        <br />
        <Typography variant="subtitle" color={"lightgreen"}>
          Email Address
        </Typography>
        <Typography variant="h5" color={"white"}>
          josealdo@gmail.com
        </Typography>
        <br />
        <Typography variant="subtitle" color={"lightgreen"}>
          Address
        </Typography>
        <Typography variant="h5" color={"white"}>
          JOHN BONER NEIGHBORHOOD CENTERS, 3030 W 16th ST, INDIANAPOLIS, IN
          46222
        </Typography>
        <br />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          color={"light"}
          endIcon={<ArrowRight />}
          onClick={() => navigate("/landlord/benifitaddress")}
        >
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(ConfirmDetailsLandlord);
