import {
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SupportRecieved = () => {
  const months = [
    "Section 8 voucher",
    "via Faith-based org",
    "via Community-based org",
    "Others",
  ];
  const [isConfirm, setCOnfirm] = useState(false);
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Have you received any additional monetary assistance for Rent?
      </Typography>
      <Typography variant="subtitle">Select all that apply</Typography>
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

export default SupportRecieved;
