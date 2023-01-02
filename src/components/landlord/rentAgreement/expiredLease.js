import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const ExpiredLease = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Grid>
        <Typography variant="h3">
          Is your tenant currently on an expired lease?
        </Typography>
        <br />
        <Typography variant="subtitle">
          Assuming tenancy going forward on a month to month basis.
        </Typography>
      </Grid>
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
          onClick={() => navigate("/landlord/rentagreement/selectdues")}
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

export default withNavigate(ExpiredLease);
