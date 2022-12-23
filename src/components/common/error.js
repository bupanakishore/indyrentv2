import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { AlertCircle } from "react-feather";
import { useDispatch } from "react-redux";
import { withNavigate } from "./WithNavigate";

const ErrorPage = ({ err, navigate, retry }) => {
  const dispatch = useDispatch();
  const handleRetry = () => {
    dispatch({ type: retry });
    navigate(-1);
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      sx={{
        position: "absolute",
        background: "crimson",
        width: "100vw",
        height: "100vh",
        zIndex: "10",
        top: "0",
        left: "0",
        color: "black",
      }}
    >
      <AlertCircle size={"64"} />
      <br />
      <Typography sx={{ textAlign: "center" }} variant="h3" color={"white"}>
        {err}
      </Typography>
      <br />
      <Button onClick={handleRetry} variant="outlined" color="light">
        Retry
      </Button>
    </Grid>
  );
};

export default withNavigate(ErrorPage);
