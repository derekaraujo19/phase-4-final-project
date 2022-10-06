import React, { useEffect, useState } from "react";
import Album from "./Album";


function AlbumList(){
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");

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

  // Add Album

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
      <ul>
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            album={album}

          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;