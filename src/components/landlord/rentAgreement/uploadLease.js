import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight, Upload } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const UploadLease = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Grid>
        <Typography variant="h3">
          Share your lease agreement with the tenant
        </Typography>
        <br />
        <Typography>*supported files: jpeg, jpg, pdf, heice</Typography>
      </Grid>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            bgcolor: "landlord.light",
            height: "10rem",
            borderRadius: "12px",
          }}
        >
          <Button
            variant="outlined"
            color="landlord"
            startIcon={<Upload />}
            component="label"
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <br />
        <Button
          onClick={() => navigate("/landlord/startapplication")}
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(UploadLease);
