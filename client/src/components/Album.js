function Album({album}) {

  return (
    <ul>
      <li>"{album.title}" - {album.artist} </li>
      {album.release_date ? <li>{album.release_date}</li> : ""}
      <img src={album.artwork_url} alt="Album Artwork" width="400" height="400"/>
    </ul>
  );
}

export default Album;


