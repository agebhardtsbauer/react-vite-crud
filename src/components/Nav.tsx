import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

const Nav: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
          >
            Alan's CRUD
          </Link>
        </Typography>
        <Link
          component={RouterLink}
          to="/posts"
          color="inherit"
          underline="hover"
          sx={{ marginRight: 4 }}
        >
          Articles
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
          underline="hover"
          sx={{ marginRight: 4 }}
        >
          About
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          color="inherit"
          underline="hover"
          sx={{ marginRight: 8 }}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
