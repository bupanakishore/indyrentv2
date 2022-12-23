import { LoadingButton } from "@mui/lab";
import { Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Form from "../../common/Form";

import { withNavigate } from "../../common/WithNavigate";

const mapStateToProps = (state) => {
  return {
    role: state.onboarding.role,
    current: state.app.currentQuestion,
    options: state.app.options,
    form: state.app.form,
    loading: state.app.loading,
  };
};

const QuestionsPage = ({ role, current, options, form, loading, navigate }) => {
  const dispatch = useDispatch();
  const onClickAnswer = (ans) => {
    // dispatch on giving answer TODO - trigger this with a saga
    dispatch({
      type: "GIVE_ANSWER",
      payload: { ans: ans },
    });
    // check if routing to success or failure, then go to route
    goToNextRoute(ans.onSubmitRoute);
  };

  const goToNextRoute = (route) => {
    if (route !== null) {
      navigate(route);
    }
  };

  // useEffect(() => {
  //   if (success == false) {
  //     navigate("/tenant/sorry");
  //   }
  // }, [success]);
  useEffect(() => {
    console.log(current, options);
  }, [current, options]);

  return (
    <Grid
      item
      container
      justifyContent={"space-between"}
      // alignItems={"center"}
      // minHeight={"100%"}
      columns={12}
      sx={{ padding: "1rem" }}
    >
      <Grid item xs={12}>
        {loading && (
          <LinearProgress sx={{ marginBottom: "1rem" }} color="tenant" />
        )}
        <Typography variant={role}>{current?.header}</Typography>
        <br />
        <br />
        <Typography variant="h3">{current?.title}</Typography>
      </Grid>
      {form !== null && (
        <Form
          fields={form.fields}
          onSubmitEvent={form.onSubmitEvent}
          nextId={form.nextQuestionId}
          onSubmitRouteTo={() => goToNextRoute(form.onSubmitRoute)}
        />
      )}
      <Grid item container justifyContent={"space-betweeen"} spacing={3}>
        {options.map((choice) => {
          return (
            <Grid item xs={choice.options.layout === "HALF" ? 6 : 12}>
              <LoadingButton
                loading={loading}
                variant="outlined"
                size="large"
                color={role}
                onClick={() => onClickAnswer(choice)}
                fullWidth
              >
                {choice.options.value}
              </LoadingButton>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(withNavigate(QuestionsPage));
