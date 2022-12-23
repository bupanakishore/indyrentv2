import { Button, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const StartPage = () => {
  const dispatch = useDispatch();
  const toggleRole = (role) => {
    dispatch({
      type: "PURGE",
      key: "root", // Whatever you chose for the "key" value when initialising redux-persist in the **persistCombineReducers** method - e.g. "root"
      result: () => null, // Func expected on the submitted action.
    });
    // set role
    dispatch({
      type: "UPDATE_STATE_VARIABLE",
      payload: { key: "role", value: role },
    });
  };
  // purge on mount
  useEffect(() => {
    dispatch({
      type: "RESET_STATE",
    });
  }, []);
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      <Grid
        container
        item
        direction={"column"}
        justifyContent={"space-between"}
        minHeight={"30vh"}
      >
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center" }}>
            Welcome to IndyRent Application
          </h1>
        </Grid>
        <Grid
          container
          item
          direction={"row"}
          justifyContent={"center"}
          spacing={3}
        >
          <Grid item>
            <Button size="large" variant="outlined" color="tenant">
              <Link onClick={() => toggleRole("tenant")} to="/onboarding">
                Tenant
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button size="large" variant="outlined" color="landlord">
              <Link onClick={() => toggleRole("landlord")} to="/onboarding">
                Landlord
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StartPage;
