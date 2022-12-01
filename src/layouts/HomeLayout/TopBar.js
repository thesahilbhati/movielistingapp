import { AuthContext } from 'src/context/Auth';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  MenuItem,
  Box,
  Container,
  Grow,
  Popper,
  TextField,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from './../../component/Logo'
const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Popular',
    href: '#',
  },

]

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    borderRadius: 0,
    minWidth: 'auto',
    color: '#343F52',
    height: '31px',
    padding: '0px 7px',
    letterSpacing: '1px',
    marginLeft: '15px',
    '@media (max-width: 900px)': {
      fontStyle: 'normal',
      letterSpacing: '-0.6px',
      lineHeight: '24px',
      color: '#FFF',
      padding: '15px !important',
      height: '51px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    '&:active': {
      color: '#1ed760',
    },
    '&:hover': {
      color: '#d00167',
    },
  },
  menuButton1: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
    height: '100%',
    '@media (max-width: 900px)': {
      paddingLeft: '75px',
      paddingRight: '20px',
      height: '100%',
    },
  },
  maindrawer: {
    height: '100%',
    background: '#0c0731',
    width: '260px',
  },
  logoDrawer: {
    paddingLeft: '10px',
    width: '140px',
    marginBottom: '30px',
  },
  drawerContainer: {
    padding: '20px 0px ',
    height: '100%',
    background: '#000',
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  drawericon: {
    color: '#000',
    position: 'absolute',
    top: '0px',
    right: '-10px',
    fontSize: '25px',
  },
  logoImg: {
    objectFit: 'contain',
    '@media (max-width: 500px)': {
      margin: ' 11px 1px 3px 0px',
      width: '52px',
    },
  },
  menuMobile: {
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '-0.6px',
    lineHeight: '1.75',
    color: '#fff',
    borderBottom: '1px solid #3e3e3e',
    padding: '16px',
    '@media (max-width: 500px)': {
      padding: '7px 0',
      width: '100%',
    },
  },
  paper1: {
    background: 'black',
    color: 'white',
  },
  containerHeight: {
    height: '100%',
  },
  mainHeader: {
    justifyContent: 'space-between',
    padding: '0px',
  },
  search: {
    height: '31px',
    position: 'relative',
    color: '#ABABAB',
    borderRadius: '100px',
    backgroundColor: '#E6E6E6',
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#ececec',
      border: '1px solid #300760',
    },
    marginLeft: 20,
    width: '140px',
    maxWidth: '257px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '180px',
    },
  },
  searchIcon: {
    fontSize: '16px',
    padding: theme.spacing(0, 2),
    color: '#000000',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '16px',
  },
  wallet: {
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21px',
    color: '#fff',
    border: '1px solid #ec0066',
    padding: '0 15px',
    background: '#ec0066',
    borderRadius: '50px',
    height: '31px',
    '&:hover': {
      background: '#fff',
      color: '#ec0066',
    },
    '@media (max-width: 900px)': {
      marginLeft: '12px',
      marginTop: '12px',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '13px',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
  submenu: {
    borderTop: '3px solid #300760',
    top: '25px !important',
  },
}))

export default function Header() {

  const auth = useContext(AuthContext)
  console.log("dfkaf", auth)

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${auth.text}&apikey=70142b14`).
      then((res) => {
        console.log("api----", res.data)
        auth.setMovie(res.data.Search)
      })
  }, [auth.text])

  const changeText = (event) => {
    auth.setText(event.target.value);

  }

  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${auth.text}&apikey=70142b14`).
      then((res) => {
        auth.setMovie(res.data.Search)



      })
  }
  const {
    menuMobile,
    menuButton,
    menuButton1,
    toolbar,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    mainHeader,
    submenu,
    classes,
  } = useStyles()
  const history = useHistory()
  console.log(history.location)

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const [open1, setOpen1] = useState({ community: false, user: false })
  const anchorRef = { community: useRef(null), user: useRef(null) }

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" className="p-0">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          {getMenuButtons()}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: '0px' }}
          >
            <Grid item lg={3}>
              <form style={{ display: "flex" }} onSubmit={getMovie}>

                <TextField

                  type="search"
                  placeholder="Search Movie"
                  variant="outlined"
                  fullWidth
                  name="movietext"
                  id="movietext"
                  value={auth.text}
                  onChange={changeText}

                />

                <Button variant='outlined' style={{ marginLeft: "5px" }}
                  onClick={getMovie}
                >Search</Button>

              </form>

            </Grid>
            <Popper
              open={open1.community}
              anchorEl={anchorRef.community.current}
              role={undefined}
              transition
              disablePortal
              className={submenu}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                </Grow>
              )}
            </Popper>
          </Grid>
        </Toolbar>
      </Container >
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/footerlogo.png" alt="" />
            {getDrawerChoices()}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: 'start',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: '#197ab3', fontSize: '30px' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              component: Link,
              className: menuButton1,
            }}
          >
            <MenuItem className={menuMobile}>{label}</MenuItem>
          </Button>
        </>
      )
    })
  }

  const femmecubatorLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              component: Link,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        </>
      )
    })
  }

  return (
    <>
      <AppBar
        position={history.location.pathname !== '/' ? 'relative' : 'absolute'}
        elevation={0}
        style={{ backgroundColor: '#ccc0', border: 'none' }}
      >
        <Container
          maxWidth={history.location.pathname !== '/' ? 'lg' : 'fixed'}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>


    </>
  )
}
