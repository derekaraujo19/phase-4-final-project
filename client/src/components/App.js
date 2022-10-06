import React, { useState } from "react";
import Title from "./Title"
import { Routes, Route } from "react-router-dom";
import AlbumList from "./AlbumList";
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import '../App.css';


function App() {
  const [user, setUser] = useState(null);


  // // Stay Logged On
  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  return (
    <div className="App">
      <Title />
      <NavBar user={user}/>
      <Routes>
        <Route exact path="/albums" element={<AlbumList />} />
        <Route exact path="/login" element={<LogIn onLogin={setUser}/>} />
      </Routes>

    </div>
  );
}

export default App;
