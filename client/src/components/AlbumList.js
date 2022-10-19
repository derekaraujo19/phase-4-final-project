import React, { useEffect, useState } from "react";
import Album from "./Album";
import AddAlbum from "./AddAlbum"

function AlbumList({user, setAlbums, albums}){
  const [search, setSearch] = useState("");
  const [showAddAlbum, setShowAddAlbum] = useState(null);


  // Get album list
  useEffect(() => {
    fetch('/albums')
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, [setAlbums]);

  // Search
  const displayedAlbums = albums.filter((album) =>
  album.title.toLowerCase().includes(search.toLowerCase())
  );

  // Show Add Album Form
  function showAddAlbumForm(){
    setShowAddAlbum(true)
  };

  // Add New Album to DOM
  function addNewAlbum(newAlbum) {
    setAlbums([newAlbum, ...albums]);
  };

  // Add Album Form
  if(showAddAlbum) return <AddAlbum showAddAlbum={setShowAddAlbum} addNewAlbum={addNewAlbum} />


  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search by Title"
          autoComplete="off"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <button onClick={showAddAlbumForm}>Add New Album</button>
      <div className="AlbumList">
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            album={album}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumList;