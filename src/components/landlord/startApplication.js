import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { withNavigate } from "../common/WithNavigate";

const StartApplication = ({ navigate }) => {
  const tabs = [
    { label: "1. Tenant and Property owner details", route: "tenantdetails" },
    { label: "2. Rental Agreement Details", route: "rentagreement" },
    { label: "3. Confirmation", route: "confirmation" },
  ];
  const [selectedIndex, setIndex] = useState(0);
  return (
    <Grid
      container
      sx={{ height: "100vh", bgcolor: "landlord.main", padding: "1rem" }}
      alignItems={"flex-start"}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
      </Grid>

      <Grid item>
        {tabs.map((item, i) => (
          <Grid>
            <Typography
              variant={selectedIndex === i ? "h3" : "h5"}
              color={"white"}
              style={{ opacity: selectedIndex === i ? "1" : "0.5" }}
              onClick={() => setIndex(i)}
            >
              {item.label}
            </Typography>
            <br />
          </Grid>
        ))}
      </Grid>
      <Grid width={"100%"} item container justifyContent={"flex-end"}>
        <Button
          variant="contained"
          size="large"
          color={"light"}
          endIcon={<ArrowRight />}
          onClick={() => navigate("/landlord/" + tabs[selectedIndex].route)}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(StartApplication);
