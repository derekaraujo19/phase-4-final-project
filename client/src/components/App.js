import React, { useState, useEffect } from "react";
import Title from "./Title"
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AlbumList from "./AlbumList";
import MyReviews from "./MyReviews";
import LogIn from "./LogIn";
import '../App.css';


function App() {
  const [user, setUser] = useState(null);


  // Stay Logged On MUST HANDLE ERRORS
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);




  return (
    <div className="App">
      <Title />
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<AlbumList  user={user} /> } />
        <Route exact path="/reviews" element={<MyReviews user={user}/>} />
        <Route exact path="/login" element={<LogIn onLogin={setUser}/>} />
      </Routes>

    </div>
  );
}

export default App;
