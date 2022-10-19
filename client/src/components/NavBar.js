import {NavLink} from "react-router-dom";

const linkStyles = {
  color: "#000000",
};

const activeStyle = {
  color: "#FFC0CB",
};



function NavBar(){




  return (
    <div className="Nav">
      <NavLink
        exact to="/home"
        style={({ isActive }) => (isActive ? activeStyle : linkStyles)}
        >
        Home
      </NavLink>
      <NavLink
        exact to="/reviews"
        style={({ isActive }) => (isActive ? activeStyle : linkStyles)}
        > My Reviews
      </NavLink>
      <NavLink
        exact to="/profile"
        style={({ isActive }) => (isActive ? activeStyle : linkStyles)}
        >
        Profile
      </NavLink>
    </div>
  );
}

export default NavBar;