import React, {useState} from "react";

function LogIn({onLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
      // else {
      //   r.json().then((e) => setErrors(e.errors));
      // }
    });
  }



  return(
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit">login</button>
      </form>
    </div>
  );
}

export default LogIn;