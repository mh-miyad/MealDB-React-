import { Badge, Navbar } from "flowbite-react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import React from "react";

const NavbarCom = ({numberofcart}) => {
  return (
    <div className="mb-3">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MealDb
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="relative">
            <HiOutlineShoppingCart className="w-8 h-7" />
            <Badge
              color="failure"
              className="absolute top-0 right-0 transform translate-x-2 -translate-y-2"
            >
              {numberofcart}
            </Badge>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to={"/"}> Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to={'/about'}>About</NavLink>
          </Navbar.Link>
          <Navbar.Link>   <NavLink to={'/contact'}> Contact</NavLink></Navbar.Link>
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCom;
