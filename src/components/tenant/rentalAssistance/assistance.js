import {
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Assistance = () => {
  const months = [
    "April 2022",
    "May 2022",
    "June 2022",
    "July 2022",
    "August 2022",
    "September 2022",
    "October 2022",
    "November 2022",
    "December 2022",
    "January 2022",
    "February 2022",
    "March 2022",
  ];
  const [isConfirm,setCOnfirm] = useState(false)
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Select months you want assistance for?
      </Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        {months.map((month, i) => (
          <Button
            sx={{ margin: "0.5rem 0", justifyContent: "space-between" }}
            variant="outlined"
            color="tenant"
            fullWidth
          >
            {month}
            <Checkbox color="tenant" />
          </Button>
        ))}
      </Grid>
      <Button variant="contained" size="large" color="tenant">Confirm</Button>
    </Grid>
  );
};

export default Assistance;
