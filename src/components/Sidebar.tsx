import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

interface Link {
  label: string;
  route: string;
}

interface SidebarProps {
  navLinks: Link[];
}

const Sidebar: React.FC<SidebarProps> = ({ navLinks }) => {
  return (
    <div className="sidebar">
      <List>
        {navLinks.map((link, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={link.route}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
