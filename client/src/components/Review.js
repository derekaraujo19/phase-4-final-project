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
    <ul key={review.id}>
      <li> <img src={review.album.artwork_url} alt="Album Artwork" width="100" height="100"/> {review.album.title} by {review.album.artist} </li>
      <li>{review.title}</li>
      <li>{review.body}</li>
      <li>{review.created_at}</li>
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