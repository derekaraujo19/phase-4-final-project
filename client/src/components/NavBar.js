import {NavLink} from "react-router-dom";

function NavBar(){
  return (
    <div>
      <NavLink
        to="/albums"
      >
        Albums
      </NavLink>
      <NavLink
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}

export default NavBar;