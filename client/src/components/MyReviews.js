import React, { useState, useEffect } from "react";

function MyReviews({user}) {
  const [reviews, setReviews] = useState([]);

  // Get Reviews List: DO WE NEED TO HANDLE ERRORS?
  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/reviews`).then((r) => {
        if (r.ok) {
          r.json().then((revs) => setReviews(revs))
        }
      });
    }
  }, [user]);

  // If user not logged in, prompt them to log in:
  if(!user) return <h3>Please Log In or Create An Account to Start Reviewing!</h3>

  return (
    <ul>
      {reviews.map((review) => (
        <ul key={review.id}>
          <li> <img src={review.album.artwork_url} alt="Album Artwork" width="100" height="100"/> {review.album.title} by {review.album.artist} </li>
          <li>{review.title}</li>
          <li>{review.body}</li>
          <li>{review.created_at}</li>
        </ul>

      ))}
    </ul>
  );
}

export default MyReviews;