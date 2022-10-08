import {NavLink} from "react-router-dom";

function NavBar({user, setUser}){

  // Log Out
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
  }


  return (
    <div>
      <NavLink
        to="/albums"
      >
        Albums
      </NavLink>
      {user ? <button onClick={handleLogout}>Log Out</button> :
      <NavLink to="/login">Log In or Sign Up</NavLink>}
    </div>
  );
}

export default NavBar;