import React, { useState,useEffect } from "react";

function AddReview({showAddReview, addNewReview}) {
  const [albums, setAlbums] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [errors, setErrors] = useState([]);

  // Get albums for Select Options:
    useEffect(() => {
      fetch('/albums')
        .then((r) => r.json())
        .then((albums) => setAlbums(albums));
    }, []);

  // Submit new review:
  function handleReviewSubmit(e) {
    e.preventDefault();
    let newReviewData = {
      "title": title,
      "body": body,
      "album_id": albumId
    };
    fetch('/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewData)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((newReview) => addNewReview(newReview));
        showAddReview(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // Return to Review Listview
  function returnToReviewList() {
    showAddReview(false);
  };


  return (
    <div>
      <form className="forms" onSubmit={handleReviewSubmit}>
        <select className="album-select" placeholder="Choose Album" value={albumId} onChange={(e) => setAlbumId(e.target.value)}>
          <option disabled={true} value="">-Choose an Album-</option>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>{album.title}</option>
          ))}
        </select>
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea name="body" placeholder="Max 250 Characters" maxLength="250" style={{width:"350px", height:"120px", resize: "none"}}value={body} onChange={(e) => setBody(e.target.value)}/>
        <button>Post</button>
      </form>
      <button onClick={returnToReviewList}>Return to List</button>
      {/* ERRORS */}
      <div>
        {errors ? (errors.map((error) => (
          <ul key={error} className="Errors">{error}</ul>
        ))) : ""
        }
      </div>
    </div>
  );
}

export default AddReview;