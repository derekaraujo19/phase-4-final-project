import React from "react";


function Album({album, user}) {



  return (
    <div className="AlbumList">
      <li><b>"{album.title}"</b> </li>
      <li> <em>{album.artist} </em></li>
      {album.release_date ? <li>{album.release_date}</li> : ""}
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
      {album.reviews.map((review) => (
        <ul key={review.id} id="album_reviews">
          <li style={ {fontSize: 24, color: "#FFB6C1"} }><b> @{review.user.username} -  </b>{review.created_at.slice(5,10)}-{review.created_at.slice(0,4)} </li>
          <li style={ {fontSize: 25} }><b>{review.title}</b></li>
          <li style={ {fontSize: 24} }>{review.body}</li>
        </ul>
      ))}
    </div>
  );
}

export default Album;


