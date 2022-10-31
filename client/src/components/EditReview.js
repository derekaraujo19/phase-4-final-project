import React, { useState } from "react";

function EditReview({review, setIsEditing, handleUpdateReview}) {
  const [reviewTitle, setReviewTitle] = useState(review.title);
  const [reviewBody, setReviewBody] = useState(review.body);
  const [errors, setErrors] = useState([])

  function handleUpdateSubmit(e) {
    e.preventDefault();
    let updatedReview = {
      "title":reviewTitle,
      "body":reviewBody
    };
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(updatedReview)
    })
    .then(r => {
      if(r.ok) {
        r.json().then((updatedReview) => handleUpdateReview(updatedReview))
        e.target.reset();
        setIsEditing(false)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  // Return to Review Listview
  function returnToReviewList() {
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleUpdateSubmit} id="edit_review">
        <input type="text" name="title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)}  />
        <textarea name="body"  maxLength="250" style={{width:"350px", height:"120px", resize: "none"}} value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} />
        <button> Save </button>
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

export default EditReview;