import { Typography } from "@mui/material";

export const QuestionContent = [
  {
    q: (
      <>
        <Typography variant="h3">Since April 1,2022</Typography>
        <Typography variant="h5">
          Is there an adult member in your household who has recieved
          unemployment?
        </Typography>
      </>
    ),
    options: {
      buttonSize: "half",
      choices: ["yes", "no"],
    },
  },
  {
    q: (
      <>
        <Typography variant="h3">Since March,2022</Typography>
        <Typography variant="h5">
          Did your household experience a reduction in income?
        </Typography>
      </>
    ),
    options: {
      buttonSize: "half",
      choices: ["yes", "no"],
    },
  },
  {
    q: (
      <>
        <Typography variant="h3">Question Header</Typography>
        <Typography variant="h5">
          Some Question here?
        </Typography>
      </>
    ),
    options: {
      buttonSize: "full",
      choices: ["option a", "option b", "option c", "option d"],
    },
  },
];
