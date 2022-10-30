import {NavLink} from "react-router-dom";

const linkStyles = {
  color: "#FFC0CB"
};




function NavBar(){




  return (
    <div className="Nav">
      <NavLink
        exact to="/"
        style={linkStyles}
        className="nav_link"
        >
        Home
      </NavLink>
      <NavLink
        exact to="/reviews"
        style={linkStyles}
        className="nav_link"
        > My Reviews
      </NavLink>
      <NavLink
        exact to="/profile"
        style={linkStyles}
        className="nav_link"
        >
        Profile
      </NavLink>
    </div>
  );
}

export default NavBar;