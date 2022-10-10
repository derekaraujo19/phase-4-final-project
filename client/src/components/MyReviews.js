function MyReviews({user}) {


  if(!user) return <h3>Please Log In or Create An Account to Start Reviewing!</h3>

  return (
    <h3>MY REVIEWS</h3>
  );
}

export default MyReviews;