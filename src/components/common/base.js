// DEPRECATED

import { Grid } from "@mui/material";
import React from "react";

const Base = ({ children }) => {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} spacing={2} height={"100vh"} columns={12} direction={"column"}>
      {children}
    </Grid>
  );
};

export default Base;
