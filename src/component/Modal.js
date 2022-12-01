import {
  Dialog,
  DialogContent,
  Box,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";



const useStyles = makeStyles((theme) => ({
  dailogOpen: {
    borderRadius: "25px",
    padding: "20px",
    "& h5": {
      color: "black",
      fontSize: "17px",
      paddingBottom: "1rem",
    },
    "& .MuiDialog-paperWidthSm": {
      padding: "20px",
    },
  },
}));

export default function Modal({
  openModal,
  closeModal,
  img,
  Genre,
  Released,
  Title
}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  console.log("status---", status);
  return (
    <>
      <Dialog
        className={classes.dailogOpen}
        open={openModal}
        maxWidth="md"
        fullWidth
        onClose={closeModal}
      >
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <img src={img} style={{ width: "100%", maxWidth: '400px', height: "250px" }} alt="image" />
            </Grid>
            <Grid item xs={12} md={6}>
             
              <Typography>Movie Name:{Title}</Typography>
              <Typography>
                Released Date :{ Released}
              </Typography>
              <Typography>
              Genre :{ Genre}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>

        <Box
          align="center"
          style={{ marginLeft: "10px", padding: "5px 20px" }}
        ></Box>
      </Dialog>
    </>
  );
}
