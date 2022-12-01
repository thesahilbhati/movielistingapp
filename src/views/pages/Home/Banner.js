import React, { useContext, useState } from 'react'
import { Box, Typography, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import 'animate.css'
import { AuthContext } from '../../../context/Auth';
import Modal from 'src/component/Modal';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
  },

  cardBox: {
    boxShadow: "5px 5px 5px lightgrey",
    padding: "20px",
    height: "350px",
    minHeight: "max-content",
    "&:hover": {
      transform: "scale(1.1)",
      transition: '.5s',
    },
  },

  modalBox: {
    backgroundColor: "rgb(0,0,0,0.9)",
    marginTop: "20px",
    height: "100vh",
    display: "flex",
    // position:"relative",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    // position:"absolute",
    backgroundColor: "#fff",
    height: "700px",
    width: "700px",

    // transform:"translate(50,50)",
  },
}))
function Banner() {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  console.log("DAT_____", auth.movie)
  const [selectModal, setSelectModal] = useState(false);
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          {auth.text !== '' ? auth.movie ?
            auth.movie.map((data, i) => {
              return (
                <Grid item xs={6} sm={4} md={3}>


                  <Box className={classes.cardBox} style={{ alignItems: "center" }}>
                    <Box onClick={() => { setSelectModal(true)}}>
                      <img src={data.Poster === "N/A" ? "/images/Logo1.jpeg" : data.Poster} style={{ width: "100%", maxWidth: '400px', height: "250px" }} alt="image" />
                      {selectModal
                        && <Modal
                          closeModal={() => { setSelectModal(false) }}
                          openModal={selectModal}
                          img={data.Poster}
                          Genre={data.Type}
                          Released={data.Year}
                          Title={data.Title}
                        />}
                    </Box>
                    <Box>
                      <Typography variant='h5'>{`Movie Name : ${data.Title}`}</Typography>
                      <Typography variant='h6'>{`Relese Date : ${data.Year}`}</Typography>
                    </Box>
                  </Box>


                </Grid>
              )
            }) : <Typography variant='h1' style={{ color: "red" }}>Type Something</Typography>
            :
            <Typography variant='h1' style={{ color: "red" }}>Type Something</Typography>
          }
        </Grid>
      </Container>



      
    </Box>



  )
}

export default Banner
