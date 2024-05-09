import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NewArticle from "./NewArticle";

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
      <ul className="sidebarList">
        {navLinks.map((link, index) => (
          <li
            className="sidebarListItem"
            key={index}
          >
            <NavLink to={link.route}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
