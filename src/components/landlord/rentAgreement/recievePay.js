import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const RecievePay = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Do you receive a section 8 payment for a portion of the rent for this
        unit?
      </Typography>
      <br />
      <Grid item container justifyContent={"space-between"} marginTop={"6rem"}>
        <Button
          onClick={() => navigate("/landlord/startapplication")}
          variant="outlined"
          size="large"
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          No
        </Button>
        <Button
          onClick={() => navigate("/landlord/rentagreement/lease")}
          variant="outlined"
          size="large"
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          Yes
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(RecievePay);
