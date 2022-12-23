import React, { useState } from "react";
import OtpInput from "react18-input-otp";

const OTPInput = ({ code, onChange, role }) => {
  const roleToHex = {
    tenant: "#A718DA",
    landlord: "#258603",
  };
  return (
    <div>
      <OtpInput
        value={code}
        onChange={onChange}
        numInputs={4}
        separator={<span style={{ width: "1rem", height: "1rem" }}></span>}
        isInputNum={false}
        shouldAutoFocus={true}
        containerStyle={"justify-evenly"}
        inputStyle={{
          width: "2rem",
          padding: "1rem",
          background: "#fff",
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          borderRadius: "0.375rem",
          borderWidth: "1px",
          borderColor: roleToHex[role],
          color: roleToHex[role],
        }}
        focusStyle={"border-violet-500"}
      />
    </div>
  );
};

export default OTPInput;
