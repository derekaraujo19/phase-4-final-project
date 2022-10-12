import React, { useState } from "react";

function AddReview({user, album}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")


  // Submit new review:
  function handleReviewSubmit(e) {
    // e.preventDefault();
    let newReviewData = {
      "title": title,
      "body": body,
      "album_id": album.id
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
        r.json().then((newReview) => console.log(newReview));
      } else {

        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  if(!user) return <h1>Please sign in or create an account to post a review</h1>
  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea name="body" placeholder="" maxLength="250" value={body} onChange={(e) => setBody(e.target.value)}/>
        <button>Post</button>
      </form>
    </div>
  );
}

export default AddReview;