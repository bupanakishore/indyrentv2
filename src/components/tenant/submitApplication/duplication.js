import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Duplication = () => {
  return (
    <Grid container direction={"column"}>
      <Typography variant="h3">Duplication of Benefits</Typography>
      <Typography variant="subtitle">
        Venenatis, quis maecenas et, ultricies lacus in penatibus. A tellus
        pharetra pellentesque felis faucibus volutpat. Enim non pellentesque a
        tellus eget turpis mauris sed. Vitae tortor ullamcorper quis tincidunt
        arcu purus. Ut habitasse mattis porttitor suspendisse eget sollicitudin
        dictum nam aliquam. Donec pretium id massa tempor, cras morbi orci urna,
        scelerisque. Lobortis feugiat imperdiet dolor turpis praesent. Volutpat
        id nisl nullam dignissim facilisi semper. Enim ac eros, suspendisse
        fringilla. Enim tempor vestibulum dictum sit viverra ultrices integer
        fermentum, auctor. Rhoncus donec nulla id eleifend cras sagittis.
        Commodo iaculis nulla non molestie vestibulum bibendum. Tincidunt
        aliquet nisl, quis quis non ac tempus. Ac quis condimentum diam nibh mi.
        Sed cras eget potenti cursus.
      </Typography>
      <TextField variant="filled" label="Sign here" />
      <Button variant="conatined">Proceed</Button>
    </Grid>
  );
};

export default Duplication;
