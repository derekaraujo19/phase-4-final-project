import React, { useState, useEffect } from "react";
import Title from "./Title"
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AlbumList from "./AlbumList";
import MyReviews from "./MyReviews";
import Profile from "./Profile";
import '../App.css';


function App() {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);


  // Stay Logged On:
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
        <Route exact path="/" element={<AlbumList  user={user} albums={albums} setAlbums={setAlbums} /> } />
        <Route exact path="/reviews" element={<MyReviews user={user} albums={albums}/>} />
        <Route exact path="/Profile" element={<Profile setUser={setUser} user={user}/>} />
      </Routes>

    </div>
  );
}

export default App;
