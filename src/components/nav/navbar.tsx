import React from "react";
import NavItem from "./nav-item";

const Navbar: React.FC = (props) => {
  return (
    <ul className="flex flex-row gap-2 h-10 place-self-center justify-self-center">
      <NavItem label="خانه" to="/" />
      <NavItem label="درباره" to="/about" />
    </ul>
  );
};

export default Navbar;
