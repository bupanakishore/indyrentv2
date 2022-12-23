import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import OTPInput from "../../common/OTPInput";
import { connect, useDispatch } from "react-redux";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { withNavigate } from "../../common/WithNavigate";
import { LoadingButton } from "@mui/lab";

const mapStateToProps = (state) => {
  return {
    fetching: state.postdetails.fetching,
    data: state.postdetails.data,
    error: state.postdetails.error,
    name: state.onboarding.name,
    phone: state.onboarding.phone,
    email: state.onboarding.email,
    role: state.onboarding.role,
    userId: state.onboarding.userId,
  };
};

const ConfirmDetails = ({
  navigate,
  fetching,
  data,
  error,
  name,
  phone,
  email,
  role,
  userId,
}) => {
  const dispatch = useDispatch();

  // send otp to email
  const onVerifyEmail = () => {
    setConfirm(true);
    // get email
    let email = getValues().email;
    dispatch({
      type: "SEND_EMAIL_OTP_REQUEST",
      payload: { data: { email: email, userId: userId, role: role } },
    });
  };

  // add user details to db
  const onConfirmEmail = () => {
    let formValues = getValues();
    // check otp
    dispatch({
      type: "ADD_DETAILS_REQUEST",
      payload: { data: formValues, userId: userId, otp: code, role: role },
    });
    // navigate to success when data is recieved
    if (data && !fetching) {
      navigate("/onboarding/success");
    }
  };

  const changeEmail = () => {
    setConfirm(false);
    return null;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [isConfirm, setConfirm] = useState(false);

  const [code, setCode] = useState("");

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
      sx={{ padding: "1rem", backgroundColor: isConfirm ? role : "#fff" }}
    >
      <Grid className="form">
        <Typography variant={role}>
          {isConfirm ? "And..." : "Almost Done"}
        </Typography>
        <Typography variant="h3">
          {isConfirm ? "Confirm your Email" : "Confirming your details"}
        </Typography>
      </Grid>
      <Grid item>
        {isConfirm ? (
          <div className="form-otp-confirm w-full">
            <Typography mb={4} variant="p">
              We have sent an OTP
            </Typography>
            <br />
            <br />
            <OTPInput
              code={code}
              role={role}
              onChange={(code) => setCode(code)}
            />
          </div>
        ) : (
          <div className="form-fields w-full">
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("name", {
                  required: "required",
                  maxLength: { value: 50, message: "max 50 chars" },
                }),
              }}
              color={role}
              label="Name"
              variant="filled"
              defaultValue={name}
              error={errors?.name && true}
              helperText={errors?.name?.message}
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("phone", {
                  required: "required",
                  valueAsNumber: "must have only numbers",
                  maxLength: { value: 10, message: "must be 10 digits" },
                }),
              }}
              color={role}
              label="Phone"
              variant="filled"
              defaultValue={phone.toString()}
              error={errors?.phone && true}
              helperText={errors?.phone?.message}
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("alt_phone", {
                  maxLength: { value: 10, message: "must be 10 digits" },
                }),
              }}
              color={role}
              label="Alternate Phone"
              variant="filled"
              error={errors?.alt_phone && true}
              helperText={errors?.alt_phone?.message}
            />
            <TextField
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              inputProps={{
                ...register("email", {
                  required: "required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "must be an email",
                  },
                  maxLength: { value: 50, message: "max 50 chars" },
                }),
              }}
              color={role}
              label="Email"
              variant="filled"
              defaultValue={email}
              error={errors?.email && true}
              helperText={errors?.email?.message}
            />
          </div>
        )}
        <br />
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
          variant="contained"
          size="large"
          color={role}
          onClick={isConfirm ? onConfirmEmail : handleSubmit(onVerifyEmail)}
        >
          {isConfirm ? "Confirm" : "Send OTP"}
        </LoadingButton>
        <Button color="base" onClick={changeEmail}>
          Change Email Address
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(ConfirmDetails));
