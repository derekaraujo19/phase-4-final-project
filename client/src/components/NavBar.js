import {NavLink} from "react-router-dom";

function NavBar({user}){

  // Log Out


  return (
    <div>
      <NavLink
        to="/albums"
      >
        Albums
      </NavLink>
      {user ? <button onClick={handleLogout}>Log Out</button> :
      <NavLink to="/login">Log In</NavLink>}
    </div>
  );
}

export default NavBar;