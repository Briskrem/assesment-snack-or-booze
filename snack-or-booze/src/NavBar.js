import React from "react";
import "./NavBar.css";
import { NavLink, Link} from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink  to="/" className="navbar-brand">
          Snack or clooze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/items" state={{item: 'snacks'}} >Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items" state={{item: 'drinks'}} >Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
<Link to={'/snacks'}>Add Color</Link>
