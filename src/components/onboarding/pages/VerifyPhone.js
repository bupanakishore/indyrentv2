import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import ErrorPage from "../../common/error";
import { useForm } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { VerifyPhoneContent as content } from "../../content/VerifyPhoneContent";
import { withNavigate } from "../../common/WithNavigate";
import { ErrorMessage } from "@hookform/error-message";

const mapStateToProps = (state) => {
  return {
    fetching: state.sendotp.fetching,
    data: state.sendotp.data,
    error: state.sendotp.error,
    role: state.onboarding.role,
  };
};

const VerifyPhone = ({ navigate, fetching, data, error, role }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onVerifyPhone = (data) => {
    let values = getValues();
    // set name for user
    dispatch({
      type: "UPDATE_STATE_VARIABLE",
      payload: { key: "name", value: values.name },
    });
    // set phone
    dispatch({
      type: "UPDATE_STATE_VARIABLE",
      payload: { key: "phone", value: values.phone },
    });
    // call api for otp
    dispatch({
      type: "SEND_MOBILE_OTP_REQUEST",
      payload: { data: { phone: values.phone.toString(), role: role } },
    });
  };

  useEffect(() => {
    if (data) {
      console.table(data);
      console.log("navigating...");
      navigate("/onboarding/otp");
    }
  }, [data]);

  const onChangeRole = () => {
    dispatch({
      type: "UPDATE_STATE_VARIABLE",
      payload: { key: "role", value: role == "tenant" ? "landlord" : "tenant" },
    });
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      {/* {fetching && <Loading />} */}

      {error && <ErrorPage err={error} />}

      <Grid item minHeight={"30vh"}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "normal",
            padding: "0 1rem 0 1rem",
          }}
        >
          {content[role].header}
        </h1>
      </Grid>
      <Grid item container direction={"column"} justifyContent={"center"}>
        <Grid
          item
          style={{
            padding: "0 1rem 0 1rem",
          }}
        >
          <h4>{content[role].prompt}</h4>
          <br />
          <TextField
            color={role}
            fullWidth
            inputProps={{
              ...register("name", {
                required: "required",
                maxLength: { value: 50, message: "Can be 50 chars at max" },
              }),
            }}
            label="Name"
            variant="filled"
            error={errors?.name}
            helperText={errors?.name?.message}
          />
          <TextField
            sx={{
              marginTop: "1rem",
            }}
            fullWidth
            inputProps={{
              ...register("phone", {
                required: true,
                valueAsNumber: "Must have only numbers",
                maxLength: { value: 10, message: "Must be ten digits" },
              }),
            }}
            color={role}
            label="Phone"
            variant="filled"
            error={errors?.phone}
            helperText={errors?.phone?.message}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={"column"}
        spacing={3}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        sx={{
          padding: "0 1rem 1rem 1rem",
        }}
      >
        <LoadingButton
          loading={fetching}
          variant="contained"
          size="large"
          color={role}
          onClick={handleSubmit(onVerifyPhone)}
        >
          Verify Mobile
        </LoadingButton>
        <Button color="base" sx={{ marginTop: "1rem" }} onClick={onChangeRole}>
          No, I am a &nbsp;
          <span className="capitalize">
            {role == "tenant" ? "landlord" : "tenant"}
          </span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(VerifyPhone));
