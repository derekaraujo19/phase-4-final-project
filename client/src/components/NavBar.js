import {NavLink} from "react-router-dom";

function NavBar(){

  return (
    <div className="Nav">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/reviews"> My Reviews </NavLink>
      <NavLink to="/profile"> Profile </NavLink>
    </div>
  );
}

export default NavBar;