import React, { useEffect, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./sideBar.css";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import AddTitleModal from "../Dialog/AddTitleModal";
import { setNewSession } from "../../redux/chats/action";
import {
  clearSessionId,
  deleteSession,
  onLogout,
  setCurrentSessionId,
} from "../../redux/auth/actions";
import { useNavigate } from "react-router-dom";
import bibleLogo from "../../assets/bible-logo.png";
import { Avatar } from "@mui/material";
const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          // transition: theme.transitions.create("margin", {
          //   easing: theme.transitions.easing.easeOut,
          //   duration: theme.transitions.duration.enteringScreen,
          // }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  border: "none",
  background: "transparent",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  // transition: theme.transitions.create(["margin", "width"], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        border: "none",
        // transition: theme.transitions.create(["margin", "width"], {
        //   easing: theme.transitions.easing.easeOut,
        //   duration: theme.transitions.duration.enteringScreen,
        // }),
        background: "transparent",
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  background: "transparent",
}));

export default function SideBar({ children }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openTitleModal, setOpenTitleModal] = React.useState(false);
  const [sessionTitle, setSessionTitle] = React.useState("");
  const { userSessions, userData, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("token");
  const sidebarRef = useRef(null);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onAddNewSession = () => {
    setOpenTitleModal(true);
  };

  const handleClose = () => {
    setOpenTitleModal(false);
  };

  const handleTitleSubmit = () => {
    const title = sessionTitle;
    dispatch(setNewSession(title));
    dispatch(clearSessionId());
    setSessionTitle("");
    setOpenTitleModal(false);
    handleDrawerClose();
  };

  const onHandleLogout = () => {
    dispatch(onLogout());
    handleDrawerClose();
  };

  const redirectToSection = (sessionID) => {
    dispatch(setCurrentSessionId(sessionID));
    navigate(`/c/:${sessionID}`);
    handleDrawerClose();
  };

  const onSessionDelete = (data) => {
    dispatch(deleteSession(data?.sessionId));
    handleDrawerClose();
    dispatch(clearSessionId());
    dispatch(setNewSession(null));
    navigate(`/`);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleDrawerClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <Box sx={{ width: "100%" }} className="side-bar-box">
        {/* <CssBaseline /> */}
        {isAuthenticated ? 
        <>
          <AppBar
            position="fixed"
            open={open}
            color="transparent"
            sx={{ boxShadow: "none" }}
          >
            <Toolbar className="side-bar-container">
              <div className="side-bar-menus">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      mr: 2,
                      color: "white",
                      "&:focus": {
                        outline: "none", // No shadow on hover
                      },
                    },
                    open && { display: "none" },
                  ]}
                >
                  <MenuIcon color="white" />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="add"
                  edge="start"
                  sx={[
                    {
                      mr: 2,
                      "&:focus": {
                        outline: "none", // No shadow on hover
                      },
                    },
                    open && { display: "none" },
                  ]}
                  onClick={() => onAddNewSession()}
                >
                  <img src="/assets/icons/add-icon.svg" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: 2,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                color: "white",
                background: "#181010",
                border: "none",
              },
            }}
            color="transparent"
            variant="persistent"
            anchor="left"
            open={open}
            ref={sidebarRef}
          >
            <DrawerHeader className="side-bar-container">
              <div className="side-bar-menus">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      mr: 2,
                      color: "white",
                      "&:focus": {
                        outline: "none", // No shadow on hover
                      },
                    },
                    // open && { display: "none" },
                  ]}
                >
                  <MenuIcon color="white" />
                </IconButton>
                <div style={{ justifyContent: "flex-end" }}>
                  <IconButton
                    color="inherit"
                    aria-label="add"
                    edge="start"
                    onClick={() => onAddNewSession()}
                    sx={[
                      {
                        mr: 2,
                        "&:focus": {
                          outline: "none", // No shadow on hover
                        },
                      },

                      // open && { display: "none" },
                    ]}
                  >
                    <img src="/assets/icons/add-icon.svg" />
                  </IconButton>
                </div>
              </div>
            </DrawerHeader>
            <Divider />
            <div className="bible_inside_drawer">
              <img
                src={bibleLogo}
                className="logo-img"
                alt="Bible Logo"
                height={41}
                width={41}
              />
              <Typography
                variant="h5"
                color="#FFF6F6;
"
                sx={{ fontSize: "20px" }}
              >
                interpretation.ai
              </Typography>
            </div>
            <List
              style={{
                background: "transparent",
                padding: "20px",
                textAlign: "center",
              }}
            >
              {userSessions?.map((text, index) => (
                <ListItem key={text?.title} disablePadding>
                  <ListItemButton
                    onClick={() => redirectToSection(text?.sessionId)}
                  >
                    {/* <ListItemIcon>
                </ListItemIcon> */}
                    <ListItemText primary={text?.title} />
                  </ListItemButton>
                  <IconButton
                    color="inherit"
                    aria-label="delete"
                    edge="start"
                    onClick={() => onSessionDelete(text)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <ListItem sx={{ marginTop: "auto" }}>
              {isLoggedIn && (
                <>
                  <ListItemButton
                    className="logout"
                    onClick={() => onHandleLogout()}
                  >
                    <ListItemIcon>
                      <Avatar
                        sx={{ bgcolor: "orange" }}
                      >{`${userData?.firstName[0]}${userData?.secondName[0]}`}</Avatar>
                    </ListItemIcon>
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                  </ListItemButton>
                </>
              )}
            </ListItem>
          </Drawer>
        </> : ''}
        <Main open={open} className="outlet-main">
          {/* <DrawerHeader /> */}
          {children}
        </Main>
      </Box>
      <AddTitleModal
        openTitleModal={openTitleModal}
        handleClose={handleClose}
        handleSubmit={handleTitleSubmit}
        setSessionTitle={setSessionTitle}
        sessionTitle={sessionTitle}
      />
    </>
  );
}
