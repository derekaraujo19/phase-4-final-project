import React, { useEffect, useState } from "react";
import Album from "./Album";
import AddAlbum from "./AddAlbum"
import AddReview from "./AddReview";


function AlbumList({user}){
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [showAddAlbum, setShowAddAlbum] = useState(null);




  // Get album list
  useEffect(() => {
    fetch('/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  // Search
  const displayedAlbums = albums.filter((album) =>
  album.title.toLowerCase().includes(search.toLowerCase())
  );

  // Add Album Form
  function showAddAlbumForm(){
    setShowAddAlbum(true)
  };

  // Add New Album to DOM
  function addNewAlbum(newAlbum) {
    setAlbums([...albums, newAlbum]);
  };

  // Add Album Form
  if(showAddAlbum) return <AddAlbum showAddAlbum={setShowAddAlbum} addNewAlbum={addNewAlbum} />


  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search"
        autoComplete="off"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={showAddAlbumForm}>Add New Album</button>
      <ul>
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            album={album}
            user={user}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;