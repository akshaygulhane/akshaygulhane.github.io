import React from "react";

import NavItems from "./navItems/navItems";
import DarkModeToggle from "../UI/DarkModeToggle";

const DesktopMenu = ({ notOnePageSection }) => {
  return notOnePageSection ? null : (
    <>
      <NavItems />
      <DarkModeToggle />
    </>
  );
};

export default DesktopMenu;
