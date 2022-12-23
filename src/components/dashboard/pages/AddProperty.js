import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { renameKeys } from "../../../utils/utils";
import { withNavigate } from "../../common/WithNavigate";

const mapStateToProps = (state) => {
  return {
    userId: state.onboarding.userId,
    fetching: state.addProperty.fetching,
    data: state.addProperty.data,
    error: state.addProperty.error,
  };
};

const AddProperty = ({ navigate, userId, fetching, data, error }) => {
  const [isConfirm, setConfirm] = useState(false);
  const [formValues, setValues] = useState({});

  const dispatch = useDispatch();
  const onAddProperty = () => {
    let fv = getValues();
    let keyMap = {
      Nickname: "name",
      "Address Line 1": "line1",
      "Address Line 2": "line2",
      City: "city",
      "ZIP Code": "zipcode",
    };
    setValues(renameKeys(keyMap, fv));
    setConfirm(true);
  };
  const onConfirmProperty = () => {
    // add address to database
    dispatch({
      type: "ADD_PROPERTY_REQUEST",
      payload: {
        data: {
          userId: userId,
          address: formValues,
        },
      },
    });
    // then go to next step -> useEffect
    navigate("/landlord/dashboard");
  };
  // useEffect(() => {
  //   if (data) {
  //     navigate("/landlord/dashboard");
  //   }
  // }, [data]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  return (
    <Grid
      height={"100vh"}
      container
      direction={"column"}
      justifyContent={"space-between"}
      sx={{
        padding: "1rem",
      }}
    >
      <Grid item>
        <Typography variant="landlord">That's all we require</Typography>
        <Typography variant="h3">Adding Property</Typography>
      </Grid>
      <Grid item className="form">
        {isConfirm ? (
          <Box className="form-confirm">
            <Typography variant="h6">Address provided by you</Typography>
            {Object.keys(formValues).map((key, index) => (
              <Typography key={index} variant="p">
                {formValues[key]},
              </Typography>
            ))}
            <br />
            <Box
              sx={{ bgcolor: "#ddd", padding: "1rem", borderRadius: "12px" }}
            >
              {Object.keys(formValues).map((key, index) => (
                <Typography key={index} variant="h5">
                  {formValues[key]}
                </Typography>
              ))}
            </Box>
          </Box>
        ) : (
          <Box>
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("Nickname", {
                  required: true,
                  maxLength: 50,
                }),
              }}
              color={"landlord"}
              label="Nickname"
              variant="filled"
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("Address Line 1", {
                  required: true,
                  maxLength: 50,
                }),
              }}
              color={"landlord"}
              label="Address Line 1"
              variant="filled"
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("Address Line 2", {
                  required: true,
                  maxLength: 50,
                }),
              }}
              color={"landlord"}
              label="Address Line 2"
              variant="filled"
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("ZIP Code", { required: true, maxLength: 5 }),
              }}
              color={"landlord"}
              label="ZIP Code"
              variant="filled"
            />
            {/* // TODO Dropdown of cities */}
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("City", { required: true, maxLength: 50 }),
              }}
              color={"landlord"}
              label="City"
              variant="filled"
            />
          </Box>
        )}
        <br />
        <br />
        <LoadingButton
          loading={fetching}
          endIcon={<ArrowRight />}
          variant="contained"
          size="large"
          color="landlord"
          sx={{
            float: "right",
          }}
          onClick={() => (isConfirm ? onConfirmProperty() : onAddProperty())}
        >
          {isConfirm ? "Confirm" : "Proceed"}
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(AddProperty));
