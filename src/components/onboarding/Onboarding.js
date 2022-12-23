import React from "react";
import { Outlet } from "react-router-dom";

import { connect } from "react-redux";
import { Box } from "@mui/material";

const mapStateToProps = (state) => {
  return {
    role: state.onboarding.role,
  };
};

const Onboarding = ({ role }) => {
  return (
    <Box sx={{ bgcolor: `bg${role}` }}>
      <Outlet />
    </Box>
  );
};

export default connect(mapStateToProps)(Onboarding);
