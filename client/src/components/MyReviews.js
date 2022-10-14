import React, { useState, useEffect } from "react";
import AddReview from "./AddReview";
import Review from "./Review";

function MyReviews({user, albums}) {
  const [reviews, setReviews] = useState([]);
  const [showAddReview, setShowAddReview] = useState(null);

  // Get user's Reviews: DO WE NEED TO HANDLE ERRORS?
  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/reviews`).then((r) => {
        if (r.ok) {
          r.json().then((revs) => setReviews(revs))
        }
      });
    }
  }, [user]);

  // Add Review Form
  function showAddReviewForm(){
    setShowAddReview(true)
  };

  // Add New Review to DOM
  function addNewReview(newReview) {
    setReviews([...reviews, newReview])
  };

  // If user not logged in, prompt them to log in:
  if(!user) return <h3> Please Log In or Create An Account </h3>

  // Add Review Form
  if(showAddReview) return <AddReview showAddReview={setShowAddReview} albums={albums} addNewReview={addNewReview}/>


  return (
    <ul>
      <button onClick={showAddReviewForm}>Add New Review</button>
      {reviews.map((review) => (
        <Review
          review={review}
          key={review.id}
        />
      ))}
    </ul>
  );
}

export default MyReviews;