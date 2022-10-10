function Album({album, user}) {

  return (
    <ul>
      <li>"{album.title}" - {album.artist} </li>
      {album.release_date ? <li>{album.release_date}</li> : ""}
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      {user ? <button>add a review!</button> : ""}
      {album.reviews.map((review) => (
        <ul key={review.id}>
          <li>{review.user.username}</li>
          <li>{review.created_at}</li>
          <li>{review.title}</li>
          <li>{review.body}</li>
        </ul>
      ))}
    </ul>
  );
}

export default Album;


