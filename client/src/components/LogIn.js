import React, {useState} from "react";

function LogIn({onLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignup, setShowSignup] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");



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
        r.json().then((user) => onLogin(user));
        setUsername("");
        setPassword("");
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }


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
            {errors ? (
              <ul>{errors}</ul>
            ) : ""
            }
          </div>
      </div>
  );

  return(
    <div>
      {/* Log In Form */}
        <form onSubmit={handleLoginSubmit}>
          <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}
          />
          <input type="text" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {/* Errors */}
        <div>
          {errors ? (
            <ul>{errors}</ul>
          ) : ""
          }
        </div>
      <label>Don't have an account?</label>
      <button onClick={showSignupForm}>Create One</button>
    </div>

  );
}

export default LogIn;