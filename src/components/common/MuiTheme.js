import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    tenant: {
      main: "#A718DA",
      contrastText: "#fff",
      bg:"#FBF5EC"
    },
    bgtenant: {
      main: "#FBF5EC",
    },
    landlord: {
      main: "#258603",
      light:"rgba(37, 134, 3, 0.1)",
      contrastText: "#fff",
      bg:"#FBF5EB"
    },
    bglandlord: {
      main: "#FBF5EB",
    },
    base: {
      main: "#999",
    },
    light:{
      main: "#fff"
    }
  },
  typography: {
    fontFamily: ["DM Sans"],
    tenant: {
      color: "#A718DA",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    landlord: {
      color: "#258603",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h3: {
      color: "#444",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h6: {
      color: "#999",
    },
  },
});
