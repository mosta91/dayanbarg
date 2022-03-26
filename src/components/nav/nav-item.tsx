import { Link } from "gatsby";
import React from "react";
type NavItemProps = {
  to: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <li className="w-16 flex items-center justify-center">
      <Link
        className="
          w-16 
          py-1.5
          rounded-lg 
          text-stone-900/60
          no-underline
          text-center
          font-fa
          font-semibold
          bg-blue-200/0
          hover:text-stone-900/80
          dark:text-stone-200/60
          dark:hover:text-stone-200/80
        "
        activeClassName="
          text-stone-900
          hover:text-stone-900
          dark:text-stone-200
          dark:hover:text-stone-200
        "
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
