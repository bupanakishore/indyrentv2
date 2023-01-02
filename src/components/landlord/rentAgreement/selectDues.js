import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const SelectDues = ({ navigate }) => {
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
  const [isConfirm, setConfirm] = useState(false);
  const [selection, setSelection] = useState([]);
  const handleConfirm = () => {
    if (isConfirm) {
      navigate("/landlord/rentagreement/uploadlease");
    } else {
      setConfirm(!isConfirm);
    }
  };
  const handleSelect = (i) => {
    if (selection.includes(months[i])) {
      setSelection(
        selection.filter((val) => {
          return val !== months[i];
        })
      );
    } else {
      setSelection([...selection, months[i]]);
    }
  };
  useEffect(() => {
    console.log(selection);
  }, [selection]);
  return (
    <Grid container height={"75vh"} justifyContent={"space-between"}>
      <Typography variant="h3">Contact details</Typography>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        {isConfirm && selection.length > 0
          ? selection.map((field, i) => (
              <Button
                key={i}
                fullWidth
                variant={"contained"}
                color="landlord"
                sx={{ textAlign: "left", marginBottom: "1rem",flexDirection:"column",alignItems:"flex-start" }}
                onClick={() => handleSelect(i)}
              >
                <Typography variant="h5">{field}</Typography>
                <br />
                <TextField fullWidth label="Enter Rent Dues" variant="outlined" sx={{bgcolor:"white", borderRadius:"8px"}} />
                <Typography sx={{opacity:"0.5"}}>Rent amount + late fees</Typography>
              </Button>
            ))
          : months.map((field, i) => (
              <Button
                key={i}
                fullWidth
                variant={selection.includes(field) ? "contained" : "outlined"}
                color="landlord"
                sx={{ textAlign: "left", marginBottom: "1rem" }}
                onClick={() => handleSelect(i)}
              >
                {field}
              </Button>
            ))}

        <Button
          onClick={handleConfirm}
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          {isConfirm ? "Proceed" : "Confirm"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(SelectDues);
