import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const SuccessForm = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Thank you for taking the time to fill out this application!
      </Typography>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        <Typography>Your Application ID - 1241235INDYOCT</Typography>
        <br />
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            bgcolor: "white",
            height: "10rem",
            borderRadius: "12px",
          }}
        >
          <Typography>Sign Here</Typography>
        </Grid>
        <br />
        <Button
          onClick={() => navigate("/landlord/tenantdetails/contact")}
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          Track Application
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(SuccessForm);
