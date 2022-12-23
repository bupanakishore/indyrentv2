import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowLeft, User, Users } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const AddFamily = ({ navigate }) => {
  return (
    <Grid
      container
      height={"100vh"}
      direction={"column"}
      justifyContent={"space-between"}
      padding={"1rem"}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography variant="tenant">Family/Members</Typography>
          <Typography variant="h3">Add all family/house members</Typography>
        </Grid>
      </Grid>
      <Grid item direction={"column"}>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          color="tenant"
          startIcon={<User />}
          sx={{ marginBottom: "1rem" }}
          onClick={() => navigate("/tenant/family/add")}
        >
          Add Head of the house
        </Button>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          color="tenant"
          startIcon={<Users />}
          onClick={() => navigate("/tenant/family/add")}
        >
          Add other members
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(AddFamily);
