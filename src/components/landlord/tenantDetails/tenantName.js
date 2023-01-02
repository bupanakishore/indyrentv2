import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const TenantName = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Tenant Name</Typography>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        <TextField
          fullWidth
          label="Their Full Name"
          variant="filled"
          color="landlord"
        />
        <br />
        <Button
          onClick={() => navigate("/landlord/tenantdetails/contact")}
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(TenantName);
