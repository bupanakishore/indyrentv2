import {
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SupportNeeded = () => {
  const months = [
    "Childcare",
    "Comunication (Phone and/or Internet)",
    "Employment",
    "Medical",
    "Transportation",
    "September 2022",
    "Transportation",
    "Food",
  ];
  const [isConfirm, setCOnfirm] = useState(false);
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Do you require additional support?</Typography>
      <Typography variant="subtitle">Select all that you require</Typography>
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
      <Button variant="contained" size="large" color="tenant">
        Confirm
      </Button>
    </Grid>
  );
};

export default SupportNeeded;
