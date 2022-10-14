import React, {useState, useEffect} from "react";

function Profile({setUser, user}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignup, setShowSignup] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [userAlbums, setUserAlbums] = useState([])


  // Log In Submit
  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(r => {
      if(r.ok){
        r.json().then((user) => setUser(user));
        setUsername("");
        setPassword("");
        setErrors([]);
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

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

  // Show Signup Form Trigger
  function showSignupForm(){
    setShowSignup(true)
  }

  // Sign Up Submit
  function handleSignupSubmit(e){
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username":newUsername,
        "password":newPassword,
        "password_confirmation":newPasswordConfirm,
      }),
    }).then((r)=> {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setShowSignup(false);
        setErrors([]);
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  // Get user's albums
  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/albums`).then((r) => {
        if(r.ok) {
          r.json().then((albums) => setUserAlbums(albums))
        }
      })
    }
  }, [user])

  const uniqueAlbums = [...new Set(userAlbums.map(album => album.title))];


  if(showSignup) return (
      <div>
        {/* Sign Up Form */}
        <form onSubmit={handleSignupSubmit}>
          <input type="text" name="username" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          <input type="text" name="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="text" name="password_confirmation" placeholder="Confirm Password" value={newPasswordConfirm} onChange={(e) => setNewPasswordConfirm(e.target.value)} />
          <button type="submit">Create Account</button>
        </form>
        {/* Errors */}
          <div>
            {errors ? (errors.map((error) => (
              <ul key={error}>{error}</ul>
            ))) : ""
            }
          </div>
      </div>
  );

  return(
    <div>
      {/* Log In Form/LogOut */}
      {user ? <h3> Welcome, {user.username}! </h3> : ""}
      {user ? <h4> You have reviewed these albums: </h4> : ""}
      {user ? uniqueAlbums.map((album) => (
          <li key={album}>{album}</li>
      )) : ""
      }
      {!user ? (
      <form onSubmit={handleLoginSubmit}>
          <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}
          />
          <input type="text" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        ) : (
      <button onClick={() => handleLogout()}> Log Out </button>
        )
        }
        {/* Errors */}
        <div>
          {errors ? (
            <ul>{errors}</ul>
          ) : ""
          }
        </div>
      {!user ? (
        <div>
          <label>Don't have an account?</label>
          <button onClick={showSignupForm}>Create One</button>
        </div>
      ) : ""}
    </div>

  );
}

export default Profile;