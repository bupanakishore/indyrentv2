import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const OptionsApply = () => {
  const options = [
    "Job hours reduced due to COVID-19",
    "Job hours reduced due to lack of childcare",
    "Job hours reduced by the employer",
    "Got laid off or workplace shut down",
  ];
  return (
    <Grid
      container
      height={"100%"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">
        Select all that apply to your household
      </Typography>
      <Typography variant="subtitle">
        select if the mentioned situation applies to anyone in your household
      </Typography>
      <br />
      <Grid item container marginTop={"6rem"}>
        {options.map((option, i) => (
          <Button
            sx={{ margin: "1rem 0" }}
            color="tenant"
            fullWidth
            key={i}
            variant="outlined"
          >
            {option}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default OptionsApply;
