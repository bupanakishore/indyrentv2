import {
  Box,
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { ArrowLeft, Plus } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const AddMember = ({navigate}) => {
  const [isHead, setHead] = useState(true);
  return (
    <Grid
      container
      // height={"100vh"}
      direction={"column"}
      padding={"1rem"}
      overflow={"scroll"}
    >
      <Grid item>
        <Grid item container sx={{ opacity: "0.5" }} alignItems={"center"}>
          <ArrowLeft /> &ensp; <Typography variant="h5">Back</Typography>
        </Grid>
        <br />
        <Grid item>
          <Typography variant="tenant">Adding Member</Typography>
          <Typography variant="h3">
            {isHead
              ? "Are you, Jane, head of this house?"
              : "Tell us about the Head of the house"}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {isHead ? (
          <Grid container justifyContent={"space-between"}>
            <Button
              onClick={() => setHead(false)}
              variant="outlined"
              color="tenant"
              sx={{ width: "49%" }}
            >
              Yes
            </Button>
            <Button
              onClick={() => setHead(false)}
              variant="outlined"
              color="tenant"
              sx={{ width: "49%" }}
            >
              No
            </Button>
          </Grid>
        ) : (
          <Grid container direction={"column"} sx={{ marginTop: "2rem" }}>
            <Grid container direction={"column"}>
              <Typography variant="tenant">Part 1</Typography>
              <hr />
              <TextField fullWidth variant="filled" label="Full name" />
              <br />
              <TextField fullWidth variant="filled" label="Date of Birth" />
              <br />
              <TextField fullWidth variant="filled" label="Marital Status" />
            </Grid>
            <br />
            <Grid container direction={"column"}>
              <Typography variant="tenant">Part 2</Typography>
              <hr />
              <TextField variant="filled" label="Sex" />
              <br />
              <TextField variant="filled" label="Race" />
              <br />
              <Grid
                container
                fullWidth
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Hispanic/Latino?</Typography>
                <ToggleButtonGroup
                  color="tenant"
                  exclusive
                  aria-label="Platform"
                >
                  <ToggleButton value="yes">Yes</ToggleButton>
                  <ToggleButton value="no">No</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <br />
              <Grid
                container
                fullWidth
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Any Disability?</Typography>
                <ToggleButtonGroup
                  color="tenant"
                  exclusive
                  aria-label="Platform"
                >
                  <ToggleButton value="yes">Yes</ToggleButton>
                  <ToggleButton value="no">No</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <br />
            <Grid container direction={"column"}>
              <Typography variant="tenant">Part 3</Typography>
              <hr />
              <Grid
                container
                fullWidth
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>Filed 2020 Tax Return?</Typography>
                <ToggleButtonGroup
                  color="tenant"
                  exclusive
                  aria-label="Platform"
                >
                  <ToggleButton value="yes">Yes</ToggleButton>
                  <ToggleButton value="no">No</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <br />
              <TextField variant="filled" label="Education Level" />
              <br />
              <TextField variant="filled" label="MIlitary Status" />
            </Grid>
            <br />
            <Button startIcon={<Plus />} variant="contained" color="tenant">
              Add
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default withNavigate(AddMember);
