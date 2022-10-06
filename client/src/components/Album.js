function Album(album) {
  console.log(album)
  return (
    <ul>
      <ul>{album.album.title}</ul>
    </ul>
  );
}

export default Album;