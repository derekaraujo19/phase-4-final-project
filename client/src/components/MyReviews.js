import React, { useState, useEffect } from "react";
import AddReview from "./AddReview";
import Review from "./Review";

function MyReviews({user, albums}) {
  const [reviews, setReviews] = useState([]);
  const [showAddReview, setShowAddReview] = useState(null);

  // Get user's Reviews:
  useEffect(() => {
      fetch(`/reviews`).then((r) => {
        if (r.ok) {
          r.json().then((revs) => setReviews(revs))
        }
      });
  }, []);

  // Add Review Form
  function showAddReviewForm(){
    setShowAddReview(true)
  };

  // Add New Review to DOM
  function addNewReview(newReview) {
    setReviews([...reviews, newReview])
  };

  // Update review
  function handleUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews);
  };

  // Delete Review from DOM
  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  // If user not logged in, prompt them to log in:
  if(!user) return <h3> Please Log In or Create An Account </h3>

  // Add Review Form
  if(showAddReview) return <AddReview showAddReview={setShowAddReview} albums={albums} addNewReview={addNewReview}/>

  console.log(reviews)

  return (
    <ul>
      <button onClick={showAddReviewForm}>Add New Review</button>
      {reviews.map((review) => (
        <Review
          review={review}
          key={review.id}
          handleUpdateReview={handleUpdateReview}
          handleDeleteReview={handleDeleteReview}
        />
      ))}
    </ul>
  );
}

export default MyReviews;