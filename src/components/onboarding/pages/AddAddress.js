import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { ArrowRight } from "react-feather";

import { connect, useDispatch } from "react-redux";
import { renameKeys } from "../../../utils/utils";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { AddAddressContent as content } from "../../content/AddAddressContent";
import { LoadingButton } from "@mui/lab";
import { withNavigate } from "../../common/WithNavigate";
import ErrorPage from "../../common/error";

const mapStateToProps = (state) => {
  return {
    fetching: state.addaddress.fetching,
    data: state.addaddress.data,
    error: state.addaddress.error,
    name: state.onboarding.name,
    userId: state.onboarding.userId,
    role: state.onboarding.role,
  };
};

const AddAddress = ({
  navigate,
  fetching,
  data,
  error,
  name,
  userId,
  role,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();

  // on add address
  const onAddAddress = () => {
    // update local state then ..
    let fv = getValues();
    let keyMap = {
      "Address Line 1": "line1",
      "Address Line 2": "line2",
      City: "city",
      "ZIP Code": "zipcode",
    };
    setValues(renameKeys(keyMap, fv));
    setConfirm(true);
  };

  // on confirm
  const onAddressConfirm = () => {
    // update global state
    dispatch({
      type: "UPDATE_STATE_VARIABLE",
      payload: { key: "address", value: formValues },
    });
    // add address to database
    dispatch({
      type: "ADD_ADDRESS_REQUEST",
      payload: {
        data: {
          address: formValues,
          userId: userId,
        },
      },
    });
    // then go to next step -> useEffect
  };

  // navigate when data is recieved
  useEffect(() => {
    console.table(data);
    if (data) {
      navigate("/onboarding/confirm");
    }
  }, [data]);

  const [isConfirm, setConfirm] = useState(false);

  const [formValues, setValues] = useState({});

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
      sx={{ padding: "1rem" }}
    >
      {error && <ErrorPage err={error} retry={"RESET_ADDRESS"} />}
      <Grid item className="form">
        <Typography variant={role} sx={{ color: role }}>
          Hello, {name}
        </Typography>
        <h1>{isConfirm ? "Confirming your USPS Address" : content[role]}</h1>
      </Grid>
      <Grid item>
        {isConfirm ? (
          <Box className="form-confirm">
            <Typography variant="h6">Address provided by you</Typography>
            {Object.keys(formValues).map((key, index) => (
              <Typography variant="p">{formValues[key]},</Typography>
            ))}
            <br />
            <Box
              sx={{ bgcolor: "#ddd", padding: "1rem", borderRadius: "12px" }}
            >
              {Object.keys(formValues).map((key, index) => (
                <Typography variant="h5">{formValues[key]}</Typography>
              ))}
            </Box>
          </Box>
        ) : (
          <Box className="form-fields">
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
              color={role}
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
              color={role}
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
              color={role}
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
              color={role}
              label="City"
              variant="filled"
            />
          </Box>
        )}
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        spacing={3}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <LoadingButton
          loading={fetching}
          onClick={() => {
            isConfirm ? onAddressConfirm() : onAddAddress();
          }}
          variant="contained"
          size="large"
          color={role}
          endIcon={<ArrowRight />}
        >
          {isConfirm ? "Confirm" : "Proceed"}
        </LoadingButton>
        {isConfirm && (
          <Button
            color="base"
            sx={{ marginTop: "1rem" }}
            onClick={() => setConfirm(!isConfirm)}
          >
            Change Address
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(AddAddress));
