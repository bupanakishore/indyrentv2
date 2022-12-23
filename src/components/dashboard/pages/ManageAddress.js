import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Plus } from "react-feather";
import { getLandlordProperties } from "../../../api/onboarding/apis";
import { connect, useDispatch } from "react-redux";
import { withNavigate } from "../../common/WithNavigate";
import PropertyCard from "../../common/PropertyCard";

const mapStateToProps = (state) => {
  return {
    userId: state.onboarding.userId,
    fetching: state.properties.fetching,
    data: state.properties.data,
    error: state.properties.error,
  };
};

const ManageAddress = ({
  userId,
  navigate,
  fetching,
  data: { properties },
  error,
}) => {
  // const [properties, setProperties] = useState([]);
  // const [update, setRefetch] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "PROPERTIES_REQUEST",
      payload: { userId: userId },
    });
  }, []);
  return (
    <Grid
      container
      direction={"column"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <div
        className="properties"
        style={{ width: "100%", padding: "1rem", boxSizing: "border-box" }}
      >
        {fetching && <LinearProgress color="landlord"/>}
        {properties.length === 0 && (
          <Typography variant="h6">No properties found</Typography>
        )}
        {properties?.map((prop, i) => {
          return (
            <>
              <PropertyCard {...prop} index={i} />
            </>
          );
        })}
      </div>
      <Button
        onClick={() => navigate("/landlord/addproperty")}
        startIcon={<Plus />}
        variant={"contained"}
        color="landlord"
      >
        Add Property
      </Button>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(ManageAddress));
