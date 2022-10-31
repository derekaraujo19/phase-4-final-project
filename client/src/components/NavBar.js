import {NavLink} from "react-router-dom";

const linkStyles = {
  color: "#FFC0CB"
};

function NavBar(){

  return (
    <div className="Nav">
      <NavLink
        to="/"
        style={linkStyles}
        className="nav_link"
        >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        style={linkStyles}
        className="nav_link"
        > My Reviews
      </NavLink>
      <NavLink
        to="/profile"
        style={linkStyles}
        className="nav_link"
        >
        Profile
      </NavLink>
    </div>
  );
}

export default NavBar;