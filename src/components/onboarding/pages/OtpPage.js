import React, { useEffect, useState } from "react";
import OTPInput from "../../common/OTPInput";
import { connect, useDispatch } from "react-redux";
import ErrorPage from "../../common/error";

import HandShake from "../../../assets/handshake.png";
import { Button, Grid } from "@mui/material";
import { OtpPageContent as content } from "../../content/OtpPageContent";
import { LoadingButton } from "@mui/lab";
import { withNavigate } from "../../common/WithNavigate";

const mapStateToProps = (state) => {
  return {
    fetching: state.verifyotp.fetching,
    data: state.verifyotp.data,
    error: state.verifyotp.error,
    phone: state.onboarding.phone,
    role: state.onboarding.role,
    userId: state.onboarding.userId,
  };
};

const OtpPage = ({ navigate, fetching, data, error, phone, role, userId }) => {
  const [code, setCode] = useState("");

  const dispatch = useDispatch();
  // after submit otp
  const onSubmitOtp = () => {
    dispatch({
      type: "VERIFY_OTP_REQUEST",
      payload: {
        data: {
          otp: code,
          channel: "phone",
          phone: phone,
          role: role,
        },
      },
    });
    return null;
  };

  useEffect(() => {
    if (data) {
      console.table(data);
      navigate("/onboarding/address");
    }
  }, [data]);

  // change mobile no.
  const changeMobileNo = () => {
    navigate("/onboarding");
    return null;
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

      {error && <ErrorPage err={error} retry={"RESET_OTP"} />}

      <Grid item>
        <div>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={HandShake}
            alt="handshake"
          />
        </div>
      </Grid>
      <Grid item sx={{ padding: "0 1rem 0 1rem" }}>
        <h2>{content[role]}</h2>
        <h4>We have sent an OTP to {phone}</h4>
        <br />
        <OTPInput code={code} role={role} onChange={(code) => setCode(code)} />
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
          onClick={onSubmitOtp}
        >
          Submit OTP
        </LoadingButton>
        <Button
          color="base"
          sx={{ marginTop: "1rem" }}
          onClick={changeMobileNo}
        >
          Change Mobile Number
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(OtpPage));
