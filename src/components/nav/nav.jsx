import { useState } from "react";
import {
  AppBar,
  Drawer,
  Stack,
  Toolbar,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import {
  Menu,
  Dashboard,
  Add,
  Filter3,
  EmojiObjects,
  Group,
  AssessmentOutlined,
} from "@mui/icons-material";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const lists = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      route: "/agent/",
    },
    {
      name: "Create Bet",
      icon: <Add />,
      route: "/agent/createbet",
    },
    {
      name: "Latest Bets",
      icon: <Filter3 />,
      route: "/agent/latestbets",
    },
    {
      name: "Winning Numbers",
      icon: <EmojiObjects />,
      route: "/agent/winningnumers",
    },
    {
      name: "Winner Lists",
      icon: <Group />,
      route: "/agent/winnerlists",
    },
    {
      name: "Reports",
      icon: <AssessmentOutlined />,
      route: "/agent/reports",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {lists.map((list) => (
          <ListItem disablePadding key={list.name}>
            <NavLink to={list.route}>
              <ListItemButton>
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Stack
          justifyContent="space-between"
          alignItems={"center"}
          direction="row"
          width="100%"
        >
          <h2 className="text-2xl font-bold">Lottery</h2>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Stack>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <h1 className="text-2xl p-3 font-bold">Lottery</h1>
          <Divider />
          {DrawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
