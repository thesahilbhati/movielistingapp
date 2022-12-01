import React from 'react'
import {
  Box,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop:"5rem"
  },
}))

export default function Liquidity() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Box><Typography>Sahil Bhati ©CopyRight All Right Reserved</Typography></Box>
          <Box>
            <TwitterIcon style={{ color: "#5DAED5", margin: '5px 8px' }} />
            <TelegramIcon style={{ color: "#4470CF", margin: '5px 8px' }} />
            <FacebookIcon style={{ color: "#4470CF", margin: '5px 8px' }} />
            <InstagramIcon style={{ color: "#D53581", margin: '5px 8px' }} />
            <YouTubeIcon style={{ color: "#C8312B", margin: '5px 8px' }} />
          </Box>

        </Container>
      </Box>
    </>
  )
}
