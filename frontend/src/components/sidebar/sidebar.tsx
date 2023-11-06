import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link } from "react-router-dom";
import DarkModeToggle from "../toggleTheme/toggle";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }: React.PropsWithChildren<{}>) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isDarkMode = theme.palette.mode === "dark";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarMenu: any = [
    { title: "dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { title: "Product", icon: <InventoryIcon />, path: "/" },
    { title: "Sales", icon: <MonetizationOnIcon />, path: "/" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ];

  return (
    <Box sx={{ display: "flex" }} >
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sales Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer
      sx={{
        '.MuiDrawer-paper':{
          backgroundColor: 'transparent !important'
        }
      }}
        variant="permanent"
        open={open}
        className="dark:shadow-card shadow-card"
      >
        <DrawerHeader className="dark:bg-zinc-900 dark:text-white">
          <IconButton
            onClick={handleDrawerClose}
            className="dark:bg-zinc-900 dark:text-white"
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon className="dark:bg-zinc-900 dark:text-white" />
            ) : (
              <ChevronLeftIcon className="dark:bg-zinc-900 dark:text-white" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider  />
        <List className="dark:bg-zinc-900 dark:text-white">
          {sidebarMenu.map((text: any, index: number) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }} className="dark:bg-zinc-900 dark:text-white">
              <ListItemButton
                component={Link}
                to={text.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className="dark:bg-zinc-900 dark:text-white"
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.title}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="dark:bg-zinc-900 dark:text-white"
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
          <Divider />
        <List className="dark:bg-zinc-900 dark:text-white">
        <ListItemButton

                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className="dark:bg-zinc-900 dark:text-white"
                >
                  {<DarkModeToggle />}
                </ListItemIcon>
                <ListItemText
                  primary={"Theme"}
                  sx={{ opacity: open ? 1 : 0 }}
                  className="dark:bg-zinc-900 dark:text-white"
                />
              </ListItemButton>
        </List>
      </CustomDrawer>
      {children}
    </Box>
  );
}
