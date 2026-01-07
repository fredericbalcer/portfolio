import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Dialog,
  Box,
  PaperProps
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import avatar from "../assets/avatar.jpg";

const menuItems = [
  { text: "CV", path: "/cv" },
  { text: "Skills", path: "/skills" },
  { text: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { sm: "none"} }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Frédéric BALCER
          </Typography>

          <IconButton onClick={() => setDialogOpen(true)}>
            <Avatar src={avatar} />
          </IconButton>


          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
            paper: {
            sx: {
                backgroundColor: '#1a1a2e',
                color: '#ffffff',
            },
            },
        }}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                sx={{
                    color: '#e0c3fc',
                    '&:hover': {
                    backgroundColor: 'rgba(180,130,255,0.15)',
                    },
                }}              
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Dialog 
      open={dialogOpen} 
      onClose={() => setDialogOpen(false)}


 
      >

        <Box sx={{ p: 2 }}>
          <img
            className="avatar-zoom"
            src={avatar}
            alt="Frédéric BALCER"
            style={{
            width: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '12px'
        }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default Navbar;
