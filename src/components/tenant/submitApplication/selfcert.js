import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Selfcert = () => {
  return (
    <Grid container direction={"column"}>
      <Typography variant="h3">Self Certification</Typography>
      <Typography variant="subtitle">
        Tristique et sem purus amet est porttitor metus. Tempor id eget urna nec
        odio nunc donec pellentesque tortor. Urna vestibulum, sit libero
        vulputate. Semper odio sagittis rhoncus suscipit donec mauris.
        Pellentesque venenatis nibh quis orci. At convallis ut dignissim lectus
        vivamus eget enim eros ullamcorper. Mi aliquam rhoncus enim enim duis.
        Convallis diam magnis consequat in ullamcorper. Nisi, mi ut vivamus ac
        sollicitudin nec risus integer. Dolor sed elementum, egestas magna
        commodo, eu dolor, id diam. Vestibulum lorem purus ornare ipsum velit.
        Curabitur elit tristique odio dui porta ultrices quisque volutpat
        adipiscing. Vestibulum mattis nunc leo nunc ornare. Consectetur enim eu
        vitae, eget ultrices amet in id suspendisse. At posuere elementum in
        nisl praesent mi vitae.
      </Typography>
      <TextField variant="filled" label="Sign here"/>
    </Grid>
  );
};

export default Selfcert;
