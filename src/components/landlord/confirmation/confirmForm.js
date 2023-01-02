import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ArrowRight } from "react-feather";
import { withNavigate } from "../../common/WithNavigate";

const ConfirmForm = ({ navigate }) => {
  return (
    <Grid
      container
      height={"75vh"}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Typography variant="h3">Confirmation</Typography>
      <br />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"flex-end"}
        marginTop={"6rem"}
      >
        <Typography>
          Tristique et sem purus amet est porttitor metus. Tempor id eget urna
          nec odio nunc donec pellentesque tortor. Urna vestibulum, sit libero
          vulputate. Semper odio sagittis rhoncus suscipit donec mauris.
          Pellentesque venenatis nibh quis orci. At convallis ut dignissim
          lectus vivamus eget enim eros ullamcorper. Mi aliquam rhoncus enim
          enim duis. Convallis diam magnis consequat in ullamcorper. Nisi, mi ut
          vivamus ac sollicitudin nec risus integer. Dolor sed elementum,
          egestas magna commodo, eu dolor, id diam. Vestibulum lorem purus
          ornare ipsum velit. Curabitur elit tristique odio dui porta ultrices
          quisque volutpat adipiscing. Vestibulum mattis nunc leo nunc ornare.
          Consectetur enim eu vitae, eget ultrices amet in id suspendisse. At
          posuere elementum in nisl praesent mi vitae. Ut lacinia sed felis
          lorem est sagittis nunc maecenas. Semper commodo, nec, nunc, in sapien
          interdum magna malesuada sed. Eu, facilisis sit vitae, volutpat.
          Vestibulum eu vel sed faucibus in lacus suspendisse quis. Orci nibh
          volutpat, eget varius. Quis ornare habitant dui consectetur non arcu
          at lectus. Ultricies nunc, mattis faucibus commodo in ut senectus
          congue vitae. Quisque dui donec turpis massa pulvinar at. Pellentesque
          tortor ornare lobortis dignissim amet venenatis, elementum
          pellentesque a. Ullamcorper ut a massa vulputate eu. Netus neque enim,
          sed euismod volutpat at vitae nisi. Eu eleifend lobortis ullamcorper
          massa ac vitae est ultrices consequat. Congue sit elementum.
        </Typography>
        <br />
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            bgcolor: "white",
            height: "10rem",
            borderRadius: "12px",
          }}
        >
          <Typography>Sign Here</Typography>
        </Grid>
        <br />
        <Button
          onClick={() => navigate("/landlord/tenantdetails/contact")}
          variant="contained"
          size="large"
          endIcon={<ArrowRight />}
          color="landlord"
          sx={{ width: "49%", marginTop: "1.5rem" }}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
};

export default withNavigate(ConfirmForm);
