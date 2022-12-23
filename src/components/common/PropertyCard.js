import { Button, Card, Typography } from "@mui/material";
import React from "react";

const PropertyCard = ({ address, id, initiated, name, index }) => {
  return (
    <Card
      sx={{
        padding: "1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h5">
        <b>#{index + 1}</b> {name}
      </Typography>
      <Typography variant="p">
        <span style={{ display: "block" }}>{address.line1}</span>
        <span style={{ display: "block" }}>{address.line2}</span>
        <span style={{ display: "block" }}>{address.zipcode}</span>
        <span style={{ display: "block" }}>{address.city}</span>
      </Typography>
      <br />
      <Button
        sx={{ float: "right" }}
        variant={initiated ? "contained" : "outlined"}
        color={initiated ? "landlord" : "base"}
      >
        {initiated ? "Fill Application" : "Initiate"}
      </Button>
    </Card>
  );
};

export default PropertyCard;
