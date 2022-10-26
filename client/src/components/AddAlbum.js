import React, {useState} from "react";


function AddAlbum({showAddAlbum, addNewAlbum}){
  const [title, setTitle] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [artist, setArtist] = useState("");
  const [artwork, setArtwork] = useState("");
  const [errors, setErrors] = useState([]);

  // Submit new album
  function handleAddAlbumSubmit(e) {
    e.preventDefault();
    let newAlbumData = {
      "title": title,
      "release_date": release_date,
      "artist": artist,
      "artwork_url": artwork
    };
    fetch("/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((newAlbum) => addNewAlbum(newAlbum));
        e.target.reset();
        showAddAlbum(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // Return user to album list
  function returnToAlbumList(){
    showAddAlbum(false);
  };


  return (
    <div className="forms">
      <form onSubmit={handleAddAlbumSubmit}>
        <input  type="text" name="title" placeholder="Title" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)}  />
        <input  type="text" name="release_date" placeholder="Release Date (opt.)" autoComplete="off" value={release_date} onChange={(e) => setRelease_date(e.target.value)}  />
        <input  type="text" name="artist" placeholder="Artist" autoComplete="off" value={artist} onChange={(e) => setArtist(e.target.value)}  />
        <input  type="text" name="artwork" placeholder="Artwork URL" autoComplete="off" value={artwork} onChange={(e) => setArtwork(e.target.value)}  />
        <button>Add Album</button>
      </form>
      <button onClick={returnToAlbumList}>Return to List</button>
      {/* ERRORS */}
      <div className="Errors">
        {errors ? (errors.map((error) => (
          <ul key={error}>{error}</ul>
        ))) : ""
        }
      </div>
    </div>
  );
}

export default AddAlbum;




