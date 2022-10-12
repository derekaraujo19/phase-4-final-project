import React, {useState} from "react";
import AddReview from "./AddReview";

function Album({album, user}) {
  const [showAddReviewForm, setShowAddReviewForm] = useState(false)


  return (
    <ul>
      <li>"{album.title}" - {album.artist} </li>
      {album.release_date ? <li>{album.release_date}</li> : ""}
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      {album.reviews.map((review) => (
        <ul key={review.id}>
          <li>{review.user.username}</li>
          <li>{review.created_at}</li>
          <li>{review.title}</li>
          <li>{review.body}</li>
        </ul>
      ))}
      {showAddReviewForm ? (
        <AddReview user={user} album={album}/>
      ): <button onClick={() => setShowAddReviewForm(true)}>New Review</button>}
    </ul>
  );
}

export default Album;


