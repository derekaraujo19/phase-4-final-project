import React, { useState } from "react";
import EditReview from "./EditReview";

function Review({review, handleUpdateReview, handleDeleteReview}) {
  const [isEditing, setIsEditing] = useState(false);

  // Delete Review Backend:
  function handleDeleteSubmit() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    });
    handleDeleteReview(review.id);
  }

  return (
    <ul id="user_reviews" key={review.id}>
      <div id="user_review_album_data">
        <img src={review.album.artwork_url} alt="Album Artwork" width="100" height="100"/>
        <li> <b>{review.album.title}</b> </li>
        <li style={ {fontSize: 25} }>by {review.album.artist} </li>
      </div>
      <li style={{color:"#6F7378"}}><b>{review.title}</b></li>
      <li style={ {fontSize: 25, padding:5} }>{review.body}</li>
      <li style={{padding:8, fontSize:24,color:"#6F7378"}}> on {review.created_at.slice(5,10)}-{review.created_at.slice(0,4)}</li>
      {isEditing ? (
        <EditReview review={review} setIsEditing={setIsEditing} handleUpdateReview={handleUpdateReview} />
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={handleDeleteSubmit}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </ul>
  );
}

export default Review;