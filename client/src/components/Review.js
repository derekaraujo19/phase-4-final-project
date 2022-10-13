import React, { useState } from "react";
import EditReview from "./EditReview";

function Review({review}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ul key={review.id}>
      <li> <img src={review.album.artwork_url} alt="Album Artwork" width="100" height="100"/> {review.album.title} by {review.album.artist} </li>
      <li>{review.title}</li>
      <li>{review.body}</li>
      <li>{review.created_at}</li>
      {isEditing ? (
        <EditReview />
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </ul>
  );
}

export default Review;