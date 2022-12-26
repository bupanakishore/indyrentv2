import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Members } from "../../assets/icons/familyIcon.svg";
import { ReactComponent as Income } from "../../assets/icons/incomeIcon.svg";
import { ReactComponent as Rent } from "../../assets/icons/renticon.svg";
import { ReactComponent as Support } from "../../assets/icons/supportIcon.svg";
import { withNavigate } from "../common/WithNavigate";

const TenantHome = ({ navigate }) => {
  return (
    <Grid container direction={"column"} justifyContent={"space-evenly"}>
      <Grid item padding={"1rem"}>
        <Typography variant="tenant">Hello, Jane</Typography>
        <Typography variant="h3">Your Application</Typography>
        <Typography>
          Select and fill the required details under each category
        </Typography>
      </Grid>
      <Grid item container padding={"1rem"}>
        <Grid item width={"50%"}>
          <Button variant="contained" color="tenant">
            My Information
          </Button>
        </Grid>
        <Grid item width={"50%"}>
          <Button variant="contained" color="landlord">
            Property Owner Information
          </Button>
        </Grid>
      </Grid>
      <Grid item container padding={"1rem"}>
        <Grid item width={"50%"} padding="1rem">
          <NavLink to={"/tenant/family"}>
            <Members />
            <Typography variant="h5">Family/House Members</Typography>
            <br />
            <Grid container>
              <CircularProgress color="tenant" size={24} />
              <Typography> &nbsp;25% Completed</Typography>
            </Grid>
          </NavLink>
        </Grid>
        <Grid item width={"50%"} padding="1rem">
          <Income />
          <Link to={"/tenant/income"}>
            <Typography variant="h5">Household Income</Typography>
          </Link>
          <br />
          <Grid container>
            <CircularProgress color="tenant" size={24} />
            <Typography> &nbsp;25% Completed</Typography>
          </Grid>
        </Grid>
        <Grid item width={"50%"} padding="1rem">
          <Rent />
          <Link to={"/tenant/rent"}>
            <Typography variant="h5">Rental Assistance</Typography>
          </Link>
          <br />
          <Grid container>
            <CircularProgress color="tenant" size={24} />
            <Typography> &nbsp;25% Completed</Typography>
          </Grid>
        </Grid>
        <Grid item width={"50%"} padding="1rem">
          <Support />
          <Link to={"/tenant/support"}>
            <Typography variant="h5">Additional Support</Typography>
          </Link>
          <br />
          <Grid container>
            <CircularProgress color="tenant" size={24} />
            <Typography> &nbsp;25% Completed</Typography>
          </Grid>
        </Grid>
        <Button fullWidth size="large" color="tenant" variant="outlined">
          <Typography>25% Completed</Typography>
        </Button>
      </Grid>
      <LinearProgress color="tenant" />
    </Grid>
  );
};

export default withNavigate(TenantHome);
