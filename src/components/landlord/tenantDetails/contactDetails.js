import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const TenantContact = ({ navigate }) => {
  const formFields = [
    "Mobile Number",
    "Confirm Mobile Number",
    "Email Address",
    "Confirm Email Address",
  ];
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Contact details</Typography>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        {formFields.map((field, i) => (
          <TextField
            fullWidth
            label={field}
            variant="filled"
            color="landlord"
            sx={{ marginBottom: "1rem" }}
            key={i}
          />
        ))}

        <Button
          onClick={() => navigate("/landlord/tenantdetails/address")}
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

export default withNavigate(TenantContact);
