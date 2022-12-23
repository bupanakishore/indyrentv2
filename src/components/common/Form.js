import { LoadingButton } from "@mui/lab";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { ArrowRight, Upload } from "react-feather";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Form = ({ fields, onSubmitEvent, nextId, onSubmitRouteTo }) => {
  console.log(fields, onSubmitEvent, nextId, "<<<<");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const onSave = () => {
    dispatch({
      type: onSubmitEvent,
    });
    dispatch({
      type: "GIVE_ANSWER",
      payload: { ans: { data: getValues(), nextQuestionId: nextId } },
    });
    onSubmitRouteTo();
  };
  return (
    <Grid container direction={"column"} justifyContent={"space-between"}>
      <Grid item>
        {fields.map((field) => {
          switch (field.type) {
            case "text":
              return (
                <TextField
                  color={"tenant"}
                  fullWidth
                  inputProps={{
                    ...register(field.label, { required: true }),
                  }}
                  label={field.label}
                  variant="filled"
                  sx={{ margin: "1rem 0" }}
                />
              );
            case "select":
              return (
                <Grid item sx={{ margin: "1rem 0" }}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">{field.label}</InputLabel>
                    <Select
                      labelId="select-label"
                      label={field.label}
                      inputProps={{
                        ...register(field.label, { required: true }),
                      }}
                      variant="filled"
                      color="tenant"
                    >
                      {field.selectOptions.map((opt) => (
                        <MenuItem value={opt}>{opt}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              );
            case "file":
              return (
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: "100%",
                    border: "1px solid #A718DA",
                    borderRadius: "0.5rem",
                    height: "10rem",
                  }}
                >
                  <Grid item>
                    <Button
                      startIcon={<Upload />}
                      variant="contained"
                      component="label"
                      color="tenant"
                      sx={{ margin: "0 auto" }}
                    >
                      Upload Documents
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Grid>
                </Grid>
              );
          }
        })}
      </Grid>
      <Grid item>
        <LoadingButton
          color="tenant"
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          sx={{ float: "right" }}
          onClick={onSave}
        >
          Proceed
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default Form;
